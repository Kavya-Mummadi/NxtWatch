import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const LinkVideos = styled(Link)`
  text-decoration: none;
`

export const NxtwatchCardItemBgContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100vw;
  @media (min-width: 576px) {
    width: 100px;
    margin-right: 25px;
    margin-bottom: 40px;
  }
  @media (min-width: 768px) {
    width: 350px;
  }
`
export const NxtwatchCardTextContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
`

export const NxtwatchCardItemThumbnail = styled.img`
  width: 105%;
`

export const NxtwatchCardText = styled.div`
  padding-left: 20px;
  padding-top: 0px;
  margin: 0px;
`

export const NxtwatchCardItemProfilePic = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 15px;
`
export const NxtwatchCardItemPara = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.themecolor === 'light' ? '#475569' : '#d7dfe9')};
  font-size: 13px;
  font-weight: 500;
  @media (min-width: 576px) {
    font-size: 19px;
  }
  margin-bottom: 0px;
`

export const NxtwtachCardItemViewerDetailsSection = styled.div`
  display: flex;
  justiy-content: center;
  align-items: center;
  @media (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const NxtwtachCardItemChannelName = styled.p`
  font-family: 'Roboto';
  color: #64748b;
  font-size: 12px;
  font-weight: 500;
  margin-right: 25px;
  @media (min-width: 576px) {
    font-size: 20px;
    padding-left: 0px;
    margin-bottom: 20px;
  }
`

export const NxtwatchCardItemViewSection = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: disc;
  padding: 0px;
  margin: 0px;
`

export const NxtwatchCardItemViewItem = styled.li`
  font-family: 'Roboto';
  color: #616e7c;
  font-size: 12px;
  font-weight: 500;
  margin-right: 30px;
  @media (min-width: 576px) {
    font-size: 13px;
    &:first-child {
      list-style-type: none;
    }
  }
`
