import {
  LinkVideos,
  NxtwatchCardItemBgContainer,
  NxtwatchCardItemThumbnail,
  NxtwatchCardText,
  NxtwatchCardItemProfilePic,
  NxtwatchCardItemPara,
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
            <NxtwatchCardItemThumbnail
              src={thumbnailUrl}
              alt="video thumbnail"
            />
            <NxtwatchCardTextContainer>
              <NxtwatchCardItemProfilePic
                src={profileImageUrl}
                alt="channel logo"
              />
              <NxtwatchCardText>
                <NxtwatchCardItemPara themecolor={themeColor}>
                  {title}
                </NxtwatchCardItemPara>
                <NxtwtachCardItemViewerDetailsSection>
                  <NxtwtachCardItemChannelName themecolor={themeColor}>
                    {name}
                  </NxtwtachCardItemChannelName>
                  <NxtwatchCardItemViewSection>
                    <NxtwatchCardItemViewItem themecolor={themeColor}>
                      <p>{viewCount}</p>
                    </NxtwatchCardItemViewItem>
                    <NxtwatchCardItemViewItem themecolor={themeColor}>
                      <p>{publishedLater}</p>
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
