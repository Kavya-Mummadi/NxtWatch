import {
  GamingCardLink,
  GamingCardBg,
  GamingCardImage,
  GamingCarditemTextContainer,
  GamingCardItemTitle,
  GamingCardItemViews,
} from './styledComponents'

import NxtwatchContext from '../../context/NxtwatchContext'

const GamingItemCard = props => {
  const {gamingDetails} = props
  const {id, thumbnailUrl, title, viewCount} = gamingDetails
  return (
    <NxtwatchContext.Consumer>
      {({themeColor}) => (
        <GamingCardLink to={`/videos/${id}`}>
          <GamingCardBg>
            <GamingCardImage src={thumbnailUrl} alt={title} />
            <GamingCarditemTextContainer>
              <GamingCardItemTitle themecolor={themeColor}>
                {title}
              </GamingCardItemTitle>
              <GamingCardItemViews themecolor={themeColor}>
                {viewCount} Watching Worldwide
              </GamingCardItemViews>
            </GamingCarditemTextContainer>
          </GamingCardBg>
        </GamingCardLink>
      )}
    </NxtwatchContext.Consumer>
  )
}
export default GamingItemCard
