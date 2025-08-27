import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  NxtWatchLoginBgContainer,
  NxtWatchLoginContainer,
  NxtWatchLogo,
  FormFieldContainer,
  FormFieldLabel,
  FormElementType,
  TooglePasswordContainer,
  InputCheckboxField,
  CheckboxLabelElement,
  LoginButton,
  ErrorParagraph,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    showErrorMessage: '',
    tooglePassword: false,
  }

  onEnteruserName = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onEnterPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  renderLoginUsernameField = () => {
    const {username} = this.state
    return (
      <FormFieldContainer>
        <FormFieldLabel htmlFor="username">USERNAME</FormFieldLabel>
        <FormElementType
          type="text"
          placeholder="Username"
          id="username"
          onChange={this.onEnteruserName}
          value={username}
        />
      </FormFieldContainer>
    )
  }

  renderLoginPasswordField = () => {
    const {password, tooglePassword} = this.state
    return (
      <FormFieldContainer>
        <FormFieldLabel htmlFor="password">PASSWORD</FormFieldLabel>
        {tooglePassword ? (
          <FormElementType
            type="text"
            placeholder="Password"
            id="password"
            onChange={this.onEnterPassword}
            value={password}
          />
        ) : (
          <FormElementType
            type="password"
            placeholder="Password"
            id="password"
            onChange={this.onEnterPassword}
            value={password}
          />
        )}
      </FormFieldContainer>
    )
  }

  onToogleCheckbox = () => {
    this.setState(prevState => ({
      tooglePassword: !prevState.tooglePassword,
    }))
  }

  renderTogglePasswordField = () => (
    <TooglePasswordContainer>
      <InputCheckboxField
        type="checkbox"
        id="showPassword"
        onClick={this.onToogleCheckbox}
      />
      <CheckboxLabelElement htmlFor="showPassword">
        Show Password
      </CheckboxLabelElement>
    </TooglePasswordContainer>
  )

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 7,
      path: '/',
    })
    history.replace('/')
  }

  onLoginFialure = errorMessage => {
    this.setState({
      errorMessage,
      showErrorMessage: true,
    })
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFialure(data.error_msg)
    }
  }

  render() {
    const {errorMessage, showErrorMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchLoginBgContainer>
        <NxtWatchLoginContainer>
          <NxtWatchLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <form onSubmit={this.onSubmitLoginForm}>
            {this.renderLoginUsernameField()}
            {this.renderLoginPasswordField()}
            {this.renderTogglePasswordField()}
            <LoginButton type="submit">Login</LoginButton>
            {showErrorMessage ? (
              <ErrorParagraph>{`*${errorMessage}`}</ErrorParagraph>
            ) : (
              ''
            )}
          </form>
        </NxtWatchLoginContainer>
      </NxtWatchLoginBgContainer>
    )
  }
}

export default Login
