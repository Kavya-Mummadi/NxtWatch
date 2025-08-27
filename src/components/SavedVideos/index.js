import {Component} from 'react'

import Header from '../Header'
import SectionsBar from '../SectionsBar'
import SavedVideosCardItem from '../SavedVideosCardItem'
import RouteHeader from '../RouteHeader'
import NoSavedVideos from '../NoSavedVideos'
import NxtwatchContext from '../../context/NxtwatchContext'

import {
  NxtwatchHomeBgContainer,
  NxtwatchSavedVideosContentContainer,
  NxtwatchSavedVideosCardItemsContainer,
  NxtwatchSavedVideosRouteBg,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <NxtwatchContext.Consumer>
        {({themeColor, savedVideos}) => (
          <NxtwatchSavedVideosRouteBg
            data-testid="savedVideos"
            themecolor={themeColor}
          >
            <Header />
            <NxtwatchHomeBgContainer themecolor={themeColor}>
              <SectionsBar />
              <NxtwatchSavedVideosContentContainer>
                {savedVideos.length === 0 ? (
                  <NoSavedVideos />
                ) : (
                  <>
                    <RouteHeader />
                    <NxtwatchSavedVideosCardItemsContainer
                      themecolor={themeColor}
                    >
                      {savedVideos.map(each => (
                        <SavedVideosCardItem key={each.id} data={each} />
                      ))}
                    </NxtwatchSavedVideosCardItemsContainer>
                  </>
                )}
              </NxtwatchSavedVideosContentContainer>
            </NxtwatchHomeBgContainer>
          </NxtwatchSavedVideosRouteBg>
        )}
      </NxtwatchContext.Consumer>
    )
  }
}

export default SavedVideos
