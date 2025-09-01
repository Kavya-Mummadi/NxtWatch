import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import NoSearchResults from '../NoSearchResults'
import SectionsBar from '../SectionsBar'
import NxtWatchCardItem from '../NxtWatchCardItem'
import NxtwatchContext from '../../context/NxtwatchContext'
import FailureView from '../FailureView'

import {
  NxtwatchHomeBgContainer,
  NxtwatchHomeContentContainer,
  NxtwatchBannerContainer,
  CloseIcon,
  NxtWatchBannerContentContainer,
  NxtwatchLogo,
  NxtwatchBannerPara,
  NxtwatchBannerButton,
  NxtwatchHomeDisplayContentContainer,
  SearchContainer,
  SearchBar,
  SearchIcon,
  SearchButton,
  NxtwatchDynamicContainer,
  NxtWatchCardsContainer,
  LoaderContainer,
  LoaderContent,
  CloseButton,
  NxtwatchBannerButtonContainer,
  NxtwatchHomeRouteBg,
} from './styledComponents'
import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Home extends Component {
  state = {
    homeVideosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    showBanner: true,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onHomeSectionSuccess = HomeVideos => {
    const updatedData = HomeVideos.map(each => ({
      name: each.channel.name,
      profileImageUrl: each.channel.profile_image_url,
      id: each.id,
      publishedAt: each.published_at,
      title: each.title,
      thumbnailUrl: each.thumbnail_url,
      viewCount: each.view_count,
    }))
    this.setState({
      homeVideosList: updatedData,
    })
  }

  getHomeVideos = async () => {
    console.log('yes')
    const {searchInput} = this.state
    this.setState({
      apiStatus: apiStatusConstants.loading,
    })
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
      })
      this.onHomeSectionSuccess(data.videos)
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickCloseBanner = () => {
    this.setState({
      showBanner: false,
    })
  }

  renderDisplay = () => {
    const {apiStatus, homeVideosList} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return (
          <LoaderContainer data-testid="loader">
            <LoaderContent>
              <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
            </LoaderContent>
          </LoaderContainer>
        )

      case apiStatusConstants.success:
        return (
          <NxtwatchDynamicContainer>
            <NxtWatchCardsContainer>
              {homeVideosList.length === 0 ? (
                <NoSearchResults onRetry={this.getHomeVideos} />
              ) : (
                homeVideosList.map(each => (
                  <NxtWatchCardItem key={each.id} HomeVideoData={each} />
                ))
              )}
            </NxtWatchCardsContainer>
          </NxtwatchDynamicContainer>
        )

      case apiStatusConstants.failure:
        return (
          <NxtwatchDynamicContainer>
            <FailureView onRetry={this.getHomeVideos} />
          </NxtwatchDynamicContainer>
        )

      default:
        return null
    }
  }

  render() {
    const {searchInput, showBanner} = this.state
    return (
      <NxtwatchContext.Consumer>
        {({themeColor}) => (
          <NxtwatchHomeRouteBg data-testid="home" themecolor={themeColor}>
            <Header />
            <NxtwatchHomeBgContainer>
              <SectionsBar />
              <NxtwatchHomeContentContainer themecolor={themeColor}>
                <NxtwatchBannerContainer
                  showbanner={showBanner}
                  data-testid="banner"
                >
                  <NxtwatchBannerButtonContainer>
                    <CloseButton data-testid="close">
                      <CloseIcon onClick={this.onClickCloseBanner} />
                    </CloseButton>
                  </NxtwatchBannerButtonContainer>
                  <NxtWatchBannerContentContainer>
                    <NxtwatchLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <NxtwatchBannerPara>
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </NxtwatchBannerPara>
                    <NxtwatchBannerButton type="button">
                      GET IT NOW
                    </NxtwatchBannerButton>
                  </NxtWatchBannerContentContainer>
                </NxtwatchBannerContainer>
                <NxtwatchHomeDisplayContentContainer>
                  <SearchContainer>
                    <SearchBar
                      type="search"
                      placeholder="Search"
                      className="w-100"
                      onChange={this.onSearch}
                      value={searchInput}
                    />
                    <SearchButton
                      data-testid="searchButton"
                      type="button"
                      onClick={() => this.getHomeVideos()}
                    >
                      <SearchIcon />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderDisplay()}
                </NxtwatchHomeDisplayContentContainer>
              </NxtwatchHomeContentContainer>
            </NxtwatchHomeBgContainer>
          </NxtwatchHomeRouteBg>
        )}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Home
