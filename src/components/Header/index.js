import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import NxtwatchContext from '../../context/NxtwatchContext'

import {
  NxtwatchHeaderContainer,
  NxtwatchHeaderLogo,
  NxtwatchHeaderMediumDetailsContainer,
  NxtwatchHeaderSmallDetailsContainer,
  MoonIcon,
  BarsIcon,
  NxtwatchHeaderDetailsListitem,
  NxtwatchHeaderProfile,
  NxtwatchHeaderLogoutbutton,
  LogoutIcon,
  SunnyIcon,
} from './styledComponents'

class Header extends Component {
  onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <NxtwatchContext.Consumer>
        {({themeColor, setThemeColor}) => {
          const nxtWatchLogoUrl =
            themeColor === 'light'
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          const ThemeIcon = themeColor === 'light' ? MoonIcon : SunnyIcon

          return (
            <NxtwatchHeaderContainer themeColor={themeColor}>
              <Link to="/">
                <NxtwatchHeaderLogo src={nxtWatchLogoUrl} alt="" />
              </Link>
              <NxtwatchHeaderSmallDetailsContainer>
                <NxtwatchHeaderDetailsListitem>
                  <ThemeIcon onClick={setThemeColor} themecolor={themeColor} />
                </NxtwatchHeaderDetailsListitem>
                <NxtwatchHeaderDetailsListitem>
                  <BarsIcon />
                </NxtwatchHeaderDetailsListitem>
                <NxtwatchHeaderDetailsListitem>
                  <LogoutIcon themecolor={themeColor} onClick={this.onLogout} />
                </NxtwatchHeaderDetailsListitem>
              </NxtwatchHeaderSmallDetailsContainer>
              <NxtwatchHeaderMediumDetailsContainer>
                <NxtwatchHeaderDetailsListitem>
                  <ThemeIcon themecolor={themeColor} onClick={setThemeColor} />
                </NxtwatchHeaderDetailsListitem>
                <NxtwatchHeaderDetailsListitem>
                  <NxtwatchHeaderProfile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt=""
                  />
                </NxtwatchHeaderDetailsListitem>
                <NxtwatchHeaderDetailsListitem>
                  <NxtwatchHeaderLogoutbutton
                    themecolor={themeColor}
                    onClick={this.onLogout}
                  >
                    Logout
                  </NxtwatchHeaderLogoutbutton>
                </NxtwatchHeaderDetailsListitem>
              </NxtwatchHeaderMediumDetailsContainer>
            </NxtwatchHeaderContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default withRouter(Header)
