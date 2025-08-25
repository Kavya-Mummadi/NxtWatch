import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  NxtwatchRouterHeader,
  RouterHeaderRouteIconBg,
  NxtwatchRouterHeaderHeading,
} from './styledComponents'

import NxtwatchContext from '../../context/NxtwatchContext'

const iconsMap = {
  FaFire,
  SiYoutubegaming,
  MdPlaylistAdd,
}

const RouteHeadersList = [
  {
    heading: 'Trending',
    iconName: 'FaFire',
    routerPath: '/trending',
  },
  {
    heading: 'Gaming',
    iconName: 'SiYoutubegaming',
    routerPath: '/gaming',
  },
  {
    heading: 'Saved Videos',
    iconName: 'MdPlaylistAdd',
    routerPath: '/saved-videos',
  },
]

const RouteHeader = () => (
  <NxtwatchContext.Consumer>
    {({themeColor}) => {
      const currentPath = window.location.pathname
      const currentHeaderObj = RouteHeadersList.find(
        item => item.routerPath === currentPath,
      )
      const IconComponent = iconsMap[currentHeaderObj.iconName]
      return (
        <NxtwatchRouterHeader themecolor={themeColor}>
          <RouterHeaderRouteIconBg themecolor={themeColor}>
            <IconComponent color="#ff0000" size="30" />
          </RouterHeaderRouteIconBg>
          <NxtwatchRouterHeaderHeading themecolor={themeColor}>
            {currentHeaderObj.heading}
          </NxtwatchRouterHeaderHeading>
        </NxtwatchRouterHeader>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default RouteHeader
