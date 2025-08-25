import {
  NoSearchResultsBgContainer,
  NoSearchResultsContentContainer,
  NoSearchResultsImage,
  NoSearchResultsHeading,
  NoSearchResultsDescription,
  NoSearchResultsButton,
} from './styledComponents'
import NxtwatchContext from '../../context/NxtwatchContext'

const NoSearchResults = () => (
  <NxtwatchContext.Consumer>
    {({themeColor}) => (
      <NoSearchResultsBgContainer themecolor={themeColor}>
        <NoSearchResultsContentContainer>
          <NoSearchResultsImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
            alt="no videos"
          />
          <NoSearchResultsHeading themecolor={themeColor}>
            No Search results found
          </NoSearchResultsHeading>
          <NoSearchResultsDescription themecolor={themeColor}>
            Try different Keywords or remove search filter
          </NoSearchResultsDescription>
          <NoSearchResultsButton type="button" themecolor={themeColor}>
            Retry
          </NoSearchResultsButton>
        </NoSearchResultsContentContainer>
      </NoSearchResultsBgContainer>
    )}
  </NxtwatchContext.Consumer>
)
export default NoSearchResults
