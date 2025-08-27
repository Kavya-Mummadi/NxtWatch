import {
  NoSavedVideosBgContainer,
  NoSavedVideosContentContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
} from './styledComponents'

import NxtwatchContext from '../../context/NxtwatchContext'

const NoSavedVideos = () => (
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
            Save your videos by clicking a button
          </NoSavedVideosDescription>
        </NoSavedVideosContentContainer>
      </NoSavedVideosBgContainer>
    )}
  </NxtwatchContext.Consumer>
)

export default NoSavedVideos
