import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import NxtwatchContext from '../../context/NxtwatchContext'

import {
  LinkEl,
  NxtwatchSectionContainer,
  NxtwatchSections,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedVideosIcon,
  NxtwatchSectionTitle,
  NxtwatchSectionsFooter,
  NxtwatchFooterHeading,
  NxtwatchSocialMediaIcons,
  NxtwatchSocialMediaImages,
  NxtwatchFooterCaption,
  NxtwatchSectionItem,
} from './styledComponents'

class SectionsBar extends Component {
  render() {
    return (
      <NxtwatchContext.Consumer>
        {({activeTabId, setActiveTabId, themeColor}) => {
          const Sections = [
            {
              id: uuidv4(),
              name: 'Home',
              route: '/',
              sectionId: 'HOME',
              icon: <HomeIcon themecolor={themeColor} />,
            },
            {
              id: uuidv4(),
              name: 'Trending',
              sectionId: 'TRENDING',
              route: '/trending',
              icon: <TrendingIcon themecolor={themeColor} />,
            },
            {
              id: uuidv4(),
              name: 'Gaming',
              sectionId: 'GAMING',
              route: '/gaming',
              icon: <GamingIcon themecolor={themeColor} />,
            },
            {
              id: uuidv4(),
              name: 'Saved Videos',
              sectionId: 'SAVEDVIDEOS',
              route: '/saved-videos',
              icon: <SavedVideosIcon themecolor={themeColor} />,
            },
          ]

          return (
            <NxtwatchSectionContainer themecolor={themeColor}>
              <NxtwatchSections themecolor={themeColor}>
                {Sections.map(each => (
                  <NxtwatchSectionItem
                    key={each.id}
                    themecolor={themeColor}
                    isActive={activeTabId === each.sectionId}
                    onClick={() => setActiveTabId(each.sectionId)}
                  >
                    <LinkEl to={each.route}>
                      {each.icon}
                      <NxtwatchSectionTitle themecolor={themeColor}>
                        {each.name}
                      </NxtwatchSectionTitle>
                    </LinkEl>
                  </NxtwatchSectionItem>
                ))}
              </NxtwatchSections>

              <NxtwatchSectionsFooter>
                <NxtwatchFooterHeading themecolor={themeColor}>
                  CONTACT US
                </NxtwatchFooterHeading>
                <NxtwatchSocialMediaIcons>
                  <NxtwatchSocialMediaImages
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <NxtwatchSocialMediaImages
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <NxtwatchSocialMediaImages
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linkedin logo"
                  />
                </NxtwatchSocialMediaIcons>
                <NxtwatchFooterCaption themecolor={themeColor}>
                  Enjoy! Now to see your channels and recommendations!
                </NxtwatchFooterCaption>
              </NxtwatchSectionsFooter>
            </NxtwatchSectionContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default SectionsBar
