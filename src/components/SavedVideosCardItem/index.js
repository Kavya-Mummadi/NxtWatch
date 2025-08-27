import {
  SavedVideosCardLink,
  SavedVideosCardBg,
  SavedVideosCardImage,
  SavedVideosCarditemTextContainer,
  SavedVideosCardItemTitle,
  SavedVideosCardItemViews,
  SavedVideosCardItemViewSection,
  SavedVideosCardItemViewItem,
} from './styledComponents'

import NxtwatchContext from '../../context/NxtwatchContext'

const SavedVideosCardItem = props => {
  const {data} = props
  const {id, title, thumbnailUrl, viewCount, publishedAt, name} = data

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
        <SavedVideosCardLink to={`/videos/${id}`}>
          <SavedVideosCardBg>
            <SavedVideosCardImage src={thumbnailUrl} />
            <SavedVideosCarditemTextContainer>
              <SavedVideosCardItemTitle themecolor={themeColor}>
                {title}
              </SavedVideosCardItemTitle>
              <SavedVideosCardItemViews themecolor={themeColor}>
                {name}
              </SavedVideosCardItemViews>
              <SavedVideosCardItemViewSection>
                <SavedVideosCardItemViewItem themecolor={themeColor}>
                  <p>{viewCount} views</p>
                </SavedVideosCardItemViewItem>
                <SavedVideosCardItemViewItem themecolor={themeColor}>
                  <p>{publishedYears} years ago</p>
                </SavedVideosCardItemViewItem>
              </SavedVideosCardItemViewSection>
            </SavedVideosCarditemTextContainer>
          </SavedVideosCardBg>
        </SavedVideosCardLink>
      )}
    </NxtwatchContext.Consumer>
  )
}

export default SavedVideosCardItem
