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
    {({themeColor}) => (
      <NotFoundBgContainer>
        <NotFoundContentContainer>
          <NotFoundImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
            alt="not found"
          />
          <NotFoundHeading themecolor={themeColor}>
            Page Not Found
          </NotFoundHeading>
          <NotFoundDescription themecolor={themeColor}>
            We are sorry, the page you requested could not be found.
          </NotFoundDescription>
        </NotFoundContentContainer>
      </NotFoundBgContainer>
    )}
  </NxtwatchContext.Consumer>
)

export default NotFound
