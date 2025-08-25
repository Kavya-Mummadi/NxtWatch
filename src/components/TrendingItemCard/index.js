import {
  TrendingCardLink,
  TrendingCardBg,
  TrendingCardImage,
  TrendingCardItemContainer,
  TrendingCardItemTitle,
  TrendingCardChannelName,
  TrendingCardItemTextContentContainer,
  TrendingcardItemLikeAndTimeContainer,
  TrendingCardListItem,
  TrendingItemTextContainer,
  TrendingCardItemChannelPic,
  TrendingChannelPicContainer,
} from './styledComponents'

import NxtwatchContext from '../../context/NxtwatchContext'

const TrendingItemCard = props => {
  const {videoDetails} = props
  const {
    title,
    viewCount,
    id,
    thumbnailurl,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

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

  const publishedYears = getYearsAgo(publishedAt)

  return (
    <NxtwatchContext.Consumer>
      {({themeColor}) => (
        <TrendingCardLink to={`/videos/${id}`}>
          <TrendingCardBg>
            <TrendingCardImage src={thumbnailurl} />
            <TrendingCardItemContainer>
              <TrendingChannelPicContainer>
                <TrendingCardItemChannelPic src={profileImageUrl} />
              </TrendingChannelPicContainer>
              <TrendingItemTextContainer>
                <TrendingCardItemTitle themecolor={themeColor}>
                  {title}
                </TrendingCardItemTitle>
                <TrendingCardItemTextContentContainer>
                  <TrendingCardChannelName themecolor={themeColor}>
                    {name}
                  </TrendingCardChannelName>
                  <TrendingcardItemLikeAndTimeContainer>
                    <TrendingCardListItem>{viewCount}</TrendingCardListItem>
                    <TrendingCardListItem>
                      {publishedYears} years ago
                    </TrendingCardListItem>
                  </TrendingcardItemLikeAndTimeContainer>
                </TrendingCardItemTextContentContainer>
              </TrendingItemTextContainer>
            </TrendingCardItemContainer>
          </TrendingCardBg>
        </TrendingCardLink>
      )}
    </NxtwatchContext.Consumer>
  )
}
export default TrendingItemCard
