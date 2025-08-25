import {
  NoSavedVideosBgContainer,
  NoSavedVideosContentContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
} from './styledComponents'

import NxtwatchContext from '../../context/NxtwatchContext'

const NotFound = () => (
  <NxtwatchContext.Consumer>
    {({themeColor}) => (
      <NoSavedVideosBgContainer themecolor={themeColor}>
        <NoSavedVideosContentContainer>
          <NoSavedVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoSavedVideosHeading themecolor={themeColor}>
            No saved videos found
          </NoSavedVideosHeading>
          <NoSavedVideosDescription themecolor={themeColor}>
            You can save your videos while watching them
          </NoSavedVideosDescription>
        </NoSavedVideosContentContainer>
      </NoSavedVideosBgContainer>
    )}
  </NxtwatchContext.Consumer>
)

export default NotFound
