import {
  NotFoundBgContainer,
  NotFoundContentContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

import NxtwatchContext from '../../context/NxtwatchContext'

const NotFound = () => (
  <NxtwatchContext.Consumer>
    {({themeColor}) => {
      const notFoundUrl =
        themeColor === 'light'
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <NotFoundBgContainer>
          <NotFoundContentContainer>
            <NotFoundImage src={notFoundUrl} alt="not found" />
            <NotFoundHeading themecolor={themeColor}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundDescription themecolor={themeColor}>
              We are sorry, the page you requested could not be found.
            </NotFoundDescription>
          </NotFoundContentContainer>
        </NotFoundBgContainer>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default NotFound
