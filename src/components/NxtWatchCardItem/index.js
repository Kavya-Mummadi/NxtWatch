import {
  LinkVideos,
  NxtwatchCardItemBgContainer,
  NxtwatchCardItemThumbnail,
  NxtwatchCardText,
  NxtwatchCardItemProfilePic,
  NxtwatchCardItemHeading,
  NxtwtachCardItemViewerDetailsSection,
  NxtwtachCardItemChannelName,
  NxtwatchCardItemViewSection,
  NxtwatchCardItemViewItem,
  NxtwatchCardTextContainer,
} from './styledComponents'

import NxtwatchContext from '../../context/NxtwatchContext'

const NxtWatchCardItem = props => {
  const {HomeVideoData} = props
  const {
    title,
    name,
    profileImageUrl,
    id,
    publishedAt,
    thumbnailUrl,
    viewCount,
  } = HomeVideoData

  const getYearsAgo = dateString => {
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

  const publishedLater = getYearsAgo(publishedAt)

  return (
    <NxtwatchContext.Consumer>
      {({themeColor}) => (
        <LinkVideos to={`/videos/${id}`}>
          <NxtwatchCardItemBgContainer>
            <NxtwatchCardItemThumbnail src={thumbnailUrl} />
            <NxtwatchCardTextContainer>
              <NxtwatchCardItemProfilePic src={profileImageUrl} />
              <NxtwatchCardText>
                <NxtwatchCardItemHeading themecolor={themeColor}>
                  {title}
                </NxtwatchCardItemHeading>
                <NxtwtachCardItemViewerDetailsSection>
                  <NxtwtachCardItemChannelName themecolor={themeColor}>
                    {name}
                  </NxtwtachCardItemChannelName>
                  <NxtwatchCardItemViewSection>
                    <NxtwatchCardItemViewItem themecolor={themeColor}>
                      {viewCount}
                    </NxtwatchCardItemViewItem>
                    <NxtwatchCardItemViewItem themecolor={themeColor}>
                      {publishedLater}
                    </NxtwatchCardItemViewItem>
                  </NxtwatchCardItemViewSection>
                </NxtwtachCardItemViewerDetailsSection>
              </NxtwatchCardText>
            </NxtwatchCardTextContainer>
          </NxtwatchCardItemBgContainer>
        </LinkVideos>
      )}
    </NxtwatchContext.Consumer>
  )
}
export default NxtWatchCardItem
