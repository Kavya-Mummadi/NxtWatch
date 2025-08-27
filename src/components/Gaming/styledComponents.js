import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'

export const NxtwatchHomeBgContainer = styled.div`
  width: 100vw;
  display: flex;
  width: 100vw;
  margin: 0px;
`

export const GamingRouteIcon = styled(SiYoutubegaming)`
  width: 40px;
  height: 40px;
  color: #ff0000;
`

export const SearchIcon = styled(FaSearch)`
  color: #606060;
`

export const NxtwatchSectionTitle = styled.h1`
  font-family: 'Roboto';
  color: #475569;
  font-weight: 500;
  font-size: 20px;
  padding-left: 20px;
`

export const NxtwatchSectionsFooter = styled.div`
  display: flex;
  flex-direction: column;
`

export const NxtwatchGamingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props =>
    props.themecolor === 'light' ? '#f1f1f1' : '#000000'};
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
`

export const NxtwatchGamingHeader = styled.div`
  padding: 30px;
  display: flex;
  width: 100vw;
  flex-direction: row;
  align-items: center;
  background-color: ${props =>
    props.themecolor === 'light' ? '#ebebeb' : '#231f20'};
`

export const GamingRouteIconBg = styled.div`
  padding: 25px;
  border-radius: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  background-color: ${props =>
    props.themecolor === 'light' ? '#e2e8f0' : '#181818'};

  @media (max-width: 576px) {
    width: 75px;
    height: 75px;
  }
`
export const NxtwatchGamingHeaderHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.themecolor === 'light' ? '#231f20' : '#f1f5f9')};
  font-size: 35px;
  font-weight: 600;
  margin-left: 20px;
  @media (max-width: 576px) {
    font-size: 25px;
  }
`

export const NxtwatchGamingCardItemsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding: 40px;
  flex-wrap: wrap;
  margin-top: 0px;
  background-color: ${props =>
    props.themecolor === 'light' ? '#f4f4f4' : '#000000'};
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

export const NxtwatchGamingRouteBg = styled.div`
  background-color: ${props =>
    props.themecolor === 'light' ? '#f9f9f9' : '#0f0f0f'};
`
