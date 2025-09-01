import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'

import NxtwatchContext from '../../context/NxtwatchContext'
import SectionsBar from '../SectionsBar'

import {
  NxtwatchHomeBgContainer,
  NxtwatchVideoItemDetails,
  ReactPlayerWrapper,
  NxtwatchDisplayContainer,
  NxtwatchTextContainer,
  NxtwatchVideoTitle,
  NxtwatchVideosDetailsContainer,
  NxtwatchViewDetailsContainer,
  NxtwatchLikeDetailsContainer,
  NxtwatchVideoViewItem,
  NxtwatchVideoDetailsItem,
  LikeIcon,
  IconsLabel,
  DisLikeIcon,
  SaveIcon,
  Line,
  NxtwatchVideoChannelContainer,
  NxtwatchVideoChannelPic,
  NxtwatchVideoChannelDetailsContainer,
  NxtwatchVideoChannelName,
  NxtwatchChannelSubscribers,
  NxtwatchVideoChannelDecsription,
  NxtwatchVideoSmallChannelDescription,
  LoaderContainer,
  LoaderContent,
  NxtwatchVideoDetailsRouteBg,
} from './styledComponents'
import Header from '../Header'
import FailureView from '../FailureView'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class VideoItemDetails extends Component {
  state = {
    videoData: '',
    apiStatus: apiStatusConstants.initial,
    likeStatus: null,
  }

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.loading,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const videoApiUrl = `https://apis.ccbp.in/videos/${id}`
    const response = await fetch(videoApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedVideoData = {
        id: data.video_details?.id || '',
        title: data.video_details?.title || '',
        thumbnailUrl: data.video_details?.thumbnail_url || '',
        videoUrl: data.video_details?.video_url || '',
        description: data.video_details?.description || '',
        viewCount: data.video_details?.view_count || '',
        publishedAt: data.video_details?.published_at || '',
        profileImageUrl: data.video_details?.channel?.profile_image_url || '',
        subscriberCount: data.video_details?.channel?.subscriber_count || '',
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoData: updatedVideoData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  getYearsAgo = dateString => {
    const todayDate = new Date()
    const publishedDate = new Date(dateString)
    let diff = todayDate.getFullYear() - publishedDate.getFullYear()
    if (
      todayDate.getMonth() < publishedDate.getMonth() ||
      (todayDate.getMonth() === publishedDate.getMonth() &&
        todayDate.getDate() < publishedDate.getDate())
    ) {
      diff -= 1
    }
    return diff <= 1 ? `${diff} year ago` : `${diff} years ago`
  }

  handleLike = () => {
    this.setState({likeStatus: 'like'})
  }

  handleDislike = () => {
    this.setState({
      likeStatus: 'disLike',
    })
  }

  getVideoDataView = (themeColor, savedVideos, addToSavedVideos) => {
    const {apiStatus, videoData, likeStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return (
          <NxtwatchDisplayContainer themecolor={themeColor}>
            <LoaderContainer data-testid="loader">
              <LoaderContent>
                <Loader
                  type="ThreeDots"
                  color="#0b69ff"
                  height="50"
                  width="50"
                />
              </LoaderContent>
            </LoaderContainer>
          </NxtwatchDisplayContainer>
        )

      case apiStatusConstants.success: {
        const isAlreadySaved = savedVideos.some(
          each => each.id === videoData.id,
        )
        return (
          <NxtwatchDisplayContainer themecolor={themeColor}>
            <NxtwatchVideoItemDetails>
              <ReactPlayerWrapper>
                <ReactPlayer
                  url={videoData.videoUrl}
                  width="100%"
                  height="100%"
                  controls
                />
              </ReactPlayerWrapper>
            </NxtwatchVideoItemDetails>
            <NxtwatchTextContainer>
              <NxtwatchVideoTitle themecolor={themeColor}>
                {videoData.title}
              </NxtwatchVideoTitle>
              <NxtwatchVideosDetailsContainer>
                <NxtwatchViewDetailsContainer>
                  <NxtwatchVideoViewItem>
                    {videoData.viewCount} views
                  </NxtwatchVideoViewItem>
                  <NxtwatchVideoViewItem>
                    <p>{this.getYearsAgo(videoData.publishedAt)}</p>
                  </NxtwatchVideoViewItem>
                </NxtwatchViewDetailsContainer>
                <NxtwatchLikeDetailsContainer>
                  <NxtwatchVideoDetailsItem onClick={this.handleLike}>
                    <LikeIcon id="like" status={likeStatus} />
                    <IconsLabel
                      htmlFor="like"
                      status={likeStatus === 'like' ? 'like' : null}
                    >
                      Like
                    </IconsLabel>
                  </NxtwatchVideoDetailsItem>
                  <NxtwatchVideoDetailsItem onClick={this.handleDislike}>
                    <DisLikeIcon id="dislike" status={likeStatus} />
                    <IconsLabel
                      htmlFor="dislike"
                      status={likeStatus === 'disLike' ? 'disLike' : null}
                    >
                      Dislike
                    </IconsLabel>
                  </NxtwatchVideoDetailsItem>
                  <NxtwatchVideoDetailsItem
                    onClick={() => {
                      addToSavedVideos(videoData)
                    }}
                  >
                    <SaveIcon id="save" $savedstatus={isAlreadySaved} />
                    <IconsLabel htmlFor="save" savedstatus={isAlreadySaved}>
                      {isAlreadySaved ? 'Saved' : 'Save'}
                    </IconsLabel>
                  </NxtwatchVideoDetailsItem>
                </NxtwatchLikeDetailsContainer>
              </NxtwatchVideosDetailsContainer>
              <Line />
              <NxtwatchVideoChannelContainer>
                <NxtwatchVideoChannelPic
                  src={videoData.profileImageUrl}
                  alt="channel logo"
                />
                <NxtwatchVideoChannelDetailsContainer>
                  <NxtwatchVideoChannelName themecolor={themeColor}>
                    {videoData.name}
                  </NxtwatchVideoChannelName>
                  <NxtwatchChannelSubscribers>
                    <p>{videoData.subscriberCount} Subscribers</p>
                  </NxtwatchChannelSubscribers>
                  <NxtwatchVideoChannelDecsription themecolor={themeColor}>
                    {videoData.description}
                  </NxtwatchVideoChannelDecsription>
                </NxtwatchVideoChannelDetailsContainer>
              </NxtwatchVideoChannelContainer>
              <NxtwatchVideoSmallChannelDescription>
                {videoData.description}
              </NxtwatchVideoSmallChannelDescription>
            </NxtwatchTextContainer>
          </NxtwatchDisplayContainer>
        )
      }

      case apiStatusConstants.failure:
        return (
          <NxtwatchDisplayContainer themecolor={themeColor}>
            <FailureView />
          </NxtwatchDisplayContainer>
        )

      default:
        return null
    }
  }

  render() {
    return (
      <NxtwatchContext.Consumer>
        {({themeColor, savedVideos, addToSavedVideos}) => (
          <NxtwatchVideoDetailsRouteBg
            data-testid="VideoItemDetails"
            themecolor={themeColor}
          >
            <Header />
            <NxtwatchHomeBgContainer themecolor={themeColor}>
              <SectionsBar />
              {this.getVideoDataView(themeColor, savedVideos, addToSavedVideos)}
            </NxtwatchHomeBgContainer>
          </NxtwatchVideoDetailsRouteBg>
        )}
      </NxtwatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
