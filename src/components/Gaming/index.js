import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import SectionsBar from '../SectionsBar'
import GamingItemCard from '../GamingItemCard'
import FailureView from '../FailureView'
import RouteHeader from '../RouteHeader'
import NxtwatchContext from '../../context/NxtwatchContext'

import {
  NxtwatchHomeBgContainer,
  NxtwatchGamingContentContainer,
  NxtwatchGamingCardItemsContainer,
  LoaderContainer,
  LoaderContent,
  NxtwatchGamingRouteBg,
} from './styledComponents'
import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingData: [],
  }

  componentDidMount() {
    this.getGamingData()
  }

  getGamingInformation = data => {
    const updatedData = data.videos.map(each => ({
      id: each.id,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))
    this.setState({gamingData: updatedData})
  }

  getGamingData = async () => {
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
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
      })
      this.getGamingInformation(data)
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  getGamingViewData = themeColor => {
    const {apiStatus, gamingData} = this.state
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
          <NxtwatchGamingCardItemsContainer themecolor={themeColor}>
            {gamingData.map(each => (
              <GamingItemCard key={each.id} gamingDetails={each} />
            ))}
          </NxtwatchGamingCardItemsContainer>
        )

      case apiStatusConstants.failure:
        return (
          <NxtwatchGamingCardItemsContainer>
            <FailureView onRetry={this.getGamingInformation} />
          </NxtwatchGamingCardItemsContainer>
        )

      default:
        return null
    }
  }

  render() {
    return (
      <NxtwatchContext.Consumer>
        {({themeColor}) => (
          <NxtwatchGamingRouteBg themecolor={themeColor}>
            <Header />
            <NxtwatchHomeBgContainer>
              <SectionsBar />
              <NxtwatchGamingContentContainer themecolor={themeColor}>
                <RouteHeader />
                {this.getGamingViewData(themeColor)}
              </NxtwatchGamingContentContainer>
            </NxtwatchHomeBgContainer>
          </NxtwatchGamingRouteBg>
        )}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Gaming
