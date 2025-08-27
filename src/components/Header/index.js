import {Component} from 'react'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import NxtwatchContext from '../../context/NxtwatchContext'

import {
  NxtwatchHeaderContainer,
  NxtwatchHeaderLogo,
  NxtwatchHeaderMediumDetailsContainer,
  NxtwatchHeaderSmallDetailsContainer,
  MoonIcon,
  BarsIcon,
  ThemeButton,
  NxtwatchHeaderDetailsListitem,
  NxtwatchHeaderProfile,
  NxtwatchHeaderLogoutbutton,
  LogoutIcon,
  SunnyIcon,
  PopUpButtonText,
  ClosePopUpBg,
  PopUpButtonsContainer,
  PopUpButtons,
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
            <NxtwatchHeaderContainer themecolor={themeColor}>
              <Link to="/">
                <NxtwatchHeaderLogo src={nxtWatchLogoUrl} alt="website logo" />
              </Link>
              <NxtwatchHeaderSmallDetailsContainer>
                <NxtwatchHeaderDetailsListitem>
                  <ThemeButton data-testid="theme">
                    <ThemeIcon
                      onClick={setThemeColor}
                      themecolor={themeColor}
                    />
                  </ThemeButton>
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
                  <ThemeButton data-testid="theme">
                    <ThemeIcon
                      themecolor={themeColor}
                      onClick={setThemeColor}
                    />
                  </ThemeButton>
                </NxtwatchHeaderDetailsListitem>
                <NxtwatchHeaderDetailsListitem>
                  <NxtwatchHeaderProfile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NxtwatchHeaderDetailsListitem>
                <NxtwatchHeaderDetailsListitem>
                  <div className="popup-container">
                    <Popup
                      modal
                      overlayStyle={{background: 'rgba(0, 0, 0, 0.7)'}}
                      trigger={
                        <NxtwatchHeaderLogoutbutton themecolor={themeColor}>
                          Logout
                        </NxtwatchHeaderLogoutbutton>
                      }
                    >
                      {close => (
                        <ClosePopUpBg themecolor={themeColor}>
                          <PopUpButtonText themecolor={themeColor}>
                            Are you sure, you want to logout?
                          </PopUpButtonText>

                          <PopUpButtonsContainer>
                            <PopUpButtons
                              themeColor={themeColor}
                              type="button"
                              className="trigger-button"
                              onClick={() => close()}
                            >
                              Cancel
                            </PopUpButtons>
                            <PopUpButtons
                              themeColor={themeColor}
                              type="button"
                              className="trigger-button"
                              onClick={() => {
                                this.onLogout()
                                close()
                              }}
                              $variant="confirm"
                            >
                              Confirm
                            </PopUpButtons>
                          </PopUpButtonsContainer>
                        </ClosePopUpBg>
                      )}
                    </Popup>
                  </div>
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
