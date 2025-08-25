import {Component} from 'react'

import Header from '../Header'
import SectionsBar from '../SectionsBar'
import SavedVideosCardItem from '../SavedVideosCardItem'
import RouteHeader from '../RouteHeader'
import NosavedVideos from '../NoSavedVideos'
import NxtwatchContext from '../../context/NxtwatchContext'

import {
  NxtwatchHomeBgContainer,
  NxtwatchSavedVideosContentContainer,
  NxtwatchSavedVideosCardItemsContainer,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <NxtwatchContext.Consumer>
        {({themeColor, savedVideos}) => (
          <div>
            <Header />
            <NxtwatchHomeBgContainer themecolor={themeColor}>
              <SectionsBar />
              <NxtwatchSavedVideosContentContainer>
                {savedVideos.length === 0 ? (
                  <NosavedVideos />
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
          </div>
        )}
      </NxtwatchContext.Consumer>
    )
  }
}

export default SavedVideos
