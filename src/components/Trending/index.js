import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import SectionsBar from '../SectionsBar'
import TrendingItemCard from '../TrendingItemCard'
import FailureView from '../FailureView'
import RouteHeader from '../RouteHeader'
import NxtwatchContext from '../../context/NxtwatchContext'

import {
  NxtwatchHomeBgContainer,
  NxtwatchTrendingContentContainer,
  NxtwatchTrendingCardItemsContainer,
  LoaderContainer,
  LoaderContent,
  NxtwatchTrendingRouteBg,
} from './styledComponents'
import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Trending extends Component {
  state = {
    trendingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingInformation()
  }

  onTredingViewSuccess = trendingVideosData => {
    const updatedData = trendingVideosData.map(each => ({
      title: each.title,
      viewCount: each.view_count,
      thumbnailurl: each.thumbnail_url,
      publishedAt: each.published_at,
      id: each.id,
      name: each.channel.name,
      profileImageUrl: each.channel.profile_image_url,
    }))
    this.setState({
      trendingVideosList: updatedData,
    })
  }

  getTrendingInformation = async () => {
    this.setState({
      apiStatus: apiStatusConstants.loading,
    })
    const trendingApiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
      })
      this.onTredingViewSuccess(data.videos)
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  gettrendingViewData = themeColor => {
    const {apiStatus, trendingVideosList} = this.state
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
          <NxtwatchTrendingCardItemsContainer themecolor={themeColor}>
            {trendingVideosList.map(each => (
              <TrendingItemCard key={each.id} videoDetails={each} />
            ))}
          </NxtwatchTrendingCardItemsContainer>
        )

      case apiStatusConstants.failure:
        return (
          <NxtwatchTrendingCardItemsContainer themecolor={themeColor}>
            <FailureView onRetry={this.getTrendingInformation} />
          </NxtwatchTrendingCardItemsContainer>
        )

      default:
        return null
    }
  }

  render() {
    return (
      <NxtwatchContext.Consumer>
        {({themeColor}) => (
          <NxtwatchTrendingRouteBg
            data-testid="trending"
            themecolor={themeColor}
          >
            <Header />
            <NxtwatchHomeBgContainer>
              <SectionsBar />
              <NxtwatchTrendingContentContainer themecolor={themeColor}>
                <RouteHeader />
                {this.gettrendingViewData(themeColor)}
              </NxtwatchTrendingContentContainer>
            </NxtwatchHomeBgContainer>
          </NxtwatchTrendingRouteBg>
        )}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Trending
