import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {MdHome, MdPlaylistAdd, MdClose} from 'react-icons/md'
import {FaFire, FaSearch} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'

export const LinkEl = styled(Link)`
    text-decoration: none;
     display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    margin: 0px;
`

export const NxtwatchSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 270px;
    height: 100vh;
    background-color:${props =>
      props.themecolor === 'light' ? '#ffffff' : '#212121'};
    @media(max-width: 768px){
        display: none;
    }
`

export const NxtwatchSections = styled.ul`
    list-style-type: none;
    padding: 0px;
    margin: 0px;
     background-color:${props =>
       props.themecolor === 'light' ? '#ffffff' : '#212121'};
`
export const NxtwatchSectionItem = styled.li`
  background-color: ${({isActive, themecolor}) => {
    if (isActive) {
      return themecolor === 'light' ? '#e2e8f0' : '#424242'
    }
    return themecolor === 'light' ? '#ffffff' : '#212121'
  }};
  
`

const createIcon = Icon => styled(Icon)`
    width: 25px;
    height: 25px;
    margin-left: 20px;
     color: ${props => (props.themecolor === 'light' ? '#475569' : '#d7dfe9')};
`

export const HomeIcon = createIcon(MdHome)
export const TrendingIcon = createIcon(FaFire)
export const GamingIcon = createIcon(SiYoutubegaming)
export const SavedVideosIcon = createIcon(MdPlaylistAdd)
export const CloseIcon = styled(MdClose)`
    width: 25px;
    height: 25px;
    align-self: flex-end;
    margin-bottom: 15px;
    color: #424242;
    font-weight: bold;    
`
export const SearchIcon = styled(FaSearch)`
    color: #606060;
 `

export const NxtwatchSectionTitle = styled.h1`
    font-family: "Roboto";
    color: ${props => (props.themecolor === 'light' ? '#475569' : '#d7dfe9')};
    font-weight: 500;
    font-size: 20px;
    padding-left: 20px;
    
`

export const NxtwatchSectionsFooter = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const NxtwatchFooterHeading = styled.h1`
    font-family: "Roboto";
    color: ${props => (props.themecolor === 'light' ? '#475569' : '#e2e8f0')};
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
`

export const NxtwatchSocialMediaIcons = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding: 0px;
    margin: 0px;
`

export const NxtwatchSocialMediaImages = styled.img`
    width: 30px;
    height: 30px;
    margin-right:  15px;
`
export const NxtwatchFooterCaption = styled.p`
    font-family: "Roboto";
    color: ${props => (props.themecolor === 'light' ? '#616e7c' : '#e2e8f0')};
    font-size: 19px;
    font-weight: 500;
    margin-top: 20px;
`
