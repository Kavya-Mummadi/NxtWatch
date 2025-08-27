import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {MdHome, MdPlaylistAdd, MdClose} from 'react-icons/md'
import {FaFire, FaSearch, FaThumbsUp, FaThumbsDown} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'

export const LinkEl = styled(Link)`
  text-decoration: none;
`

export const NxtwatchHomeBgContainer = styled.div`
  width: 100vw;
  display: flex;
  width: 100vw;
  margin: 0px;
  background-color: ${props =>
    props.themecolor === 'light' ? '#f1f1f1' : '#000000'};
`

export const NxtwatchSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 270px;
  padding: 20px;
  height: 100vh;
  @media (max-width: 768px) {
    display: none;
  }
`

export const NxtwatchSections = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`

export const NxtwatchSectionItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin: 0px;
`

const createIcon = Icon => styled(Icon)`
  width: 20px;
  height: 20px;
  color: #313131;
`

export const HomeIcon = createIcon(MdHome)
export const TrendingIcon = createIcon(FaFire)
export const GamingIcon = createIcon(SiYoutubegaming)
export const SavedVideosIcon = createIcon(MdPlaylistAdd)
export const LikeIcon = styled(FaThumbsUp)`
  color: ${props => (props.status === 'like' ? '#3b82f6' : '#94a3b8')};
  width: 20px;
  height: 20px;
  margin-right: 10px;
`
export const DisLikeIcon = styled(FaThumbsDown)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  color: ${props => (props.status === 'disLike' ? '#3b82f6' : '#94a3b8')};
`

export const SaveIcon = styled(MdPlaylistAdd)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  color: ${props => (props.$savedstatus ? '#3b82f6' : '#94a3b8')};
`

export const CloseIcon = styled(MdClose)`
  align-self: flex-end;
  margin-bottom: 10px;
  color: #000000;
  font-weight: bold;
`
export const SearchIcon = styled(FaSearch)`
  color: #606060;
`

export const NxtwatchSectionTitle = styled.h1`
  font-family: 'Roboto';
  color: #313131;
  font-weight: 500;
  font-size: 20px;
  padding-left: 20px;
`

export const NxtwatchSectionsFooter = styled.div`
  display: flex;
  flex-direction: column;
`

export const NxtwatchFooterHeading = styled.h1`
  font-family: 'Roboto';
  color: #383838;
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
  margin-right: 15px;
`

export const NxtwatchFooterCaption = styled.p`
  font-family: 'Roboto';
  color: #383838;
  font-size: 19px;
  font-weight: 500;
  margin-top: 20px;
`
export const NxtwatchDisplayContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 25px;
  padding-right: 25px;
  width: 100%;
  padding-bottom: 50px;
  height: 100vh;
  overflow-y: auto;
  background-color: ${props =>
    props.themecolor === 'light' ? '#f1f1f1' : '#000000'};
  @media (max-width: 767px) {
    padding: 0px;
  }
`

export const NxtwatchVideoItemDetails = styled.div`
  height: 80vh;
  position: relative;
  margin: 0 auto;
  @media (max-width: 767px) {
    width: 100vw;
    height: 50vh;
  }
`

export const ReactPlayerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const NxtwatchVideoTitle = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-size: 22px;
  margin-top: 30px;
  margin-bottom: 10px;
  color: ${props => (props.themecolor === 'light' ? '#475569' : '#f8fafc')};

  @media (max-width: 767px) {
    font-size: 20px;
  }
`
export const NxtwatchTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    padding: 18px;
  }
`

export const NxtwatchVideosDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const NxtwatchViewDetailsContainer = styled.ul`
  list-style-type: disc;
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  jusityf-content: space-between;
  width: 30%;
  @media (max-width: 767px) {
    width: 80%;
  }
`

export const NxtwatchLikeDetailsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  @media (max-width: 767px) {
    width: 90%;
    align-items: flex-start;
    margin-top: 20px;
    margin-left: 0px;
    padding: 0px;
  }
`

export const NxtwatchVideoViewItem = styled.li`
  font-family: 'Roboto';
  color: #64748b;
  margin-right: 40px;
  font-size: 15px;
  &:first-child {
    list-style-type: none;
  }
`

export const NxtwatchVideoDetailsItem = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const IconsLabel = styled.button`
  font-family: 'Roboto';
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 18px;
  color: ${props => {
    if (props.status === 'like') return '#2563eb'
    if (props.status === 'disLike') return '#2563eb'
    if (props.savedstatus) return '#2563eb'
    return '#64748b'
  }};
`

export const Line = styled.hr`
  width: 100%;
  color: #cccccc;
  height: 2px;
  margin-bottom: 20px;
`

export const NxtwatchVideoChannelContainer = styled.div`
  display: flex;
  flex-direcion: row;
`

export const NxtwatchVideoChannelPic = styled.img`
  margin-top: 8px;
  width: 60px;
  height: 60px;
`

export const NxtwatchVideoChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const NxtwatchVideoChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 0px;
  color: ${props => (props.themecolor === 'light' ? '#475569' : '#f8fafc')};

  @media (max-width: 767px) {
    font-size: 15px;
  }
`

export const NxtwatchChannelSubscribers = styled.p`
font-family:"Roboto";
padding-top:0px
font-size: 18px;
color: #64748b;
`

export const NxtwatchVideoChannelDecsription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  @media (max-width: 767px) {
    display: none;
  }
  color: ${props => (props.themecolor === 'light' ? '#64748b' : '#f8fafc')};
`

export const NxtwatchVideoSmallChannelDescription = styled.p`
  @media (min-width: 768px) {
    display: none;
  }
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`
export const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NxtwatchVideoDetailsRouteBg = styled.div`
  background-color: ${props =>
    props.themecolor === 'light' ? '#f9f9f9' : '#0f0f0f'};
`
