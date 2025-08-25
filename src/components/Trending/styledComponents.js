import styled from 'styled-components'
import {FaFire, FaSearch} from 'react-icons/fa'

export const NxtwatchHomeBgContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 0px;
`

export const TrendingRouteIcon = styled(FaFire)`
    width: 30px;
    height: 30px;
    color:  #ff0000;
`

export const SearchIcon = styled(FaSearch)`
    color: #606060;
`

export const NxtwatchTrendingContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100vh;
    background-color: ${props =>
      props.themecolor === 'light' ? '#f1f1f1' : '#000000'};
`

export const NxtwatchTrendingheader = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${props =>
      props.themecolor === 'light' ? '#ebebeb' : '#231f20'};
    width: 100%;
    box-sizing: border-box;
    @media(max-width: 576px){
        padding: 15px;
    
    }
`

export const TrendingRouteIconBg = styled.div`
    padding: 30px;
    border-radius: 150px;
    background-color: #e2e8f0;
    background-color: ${props =>
      props.themecolor === 'light' ? '#e2e8f0' : '#181818'};
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90px;
    @media(max-width: 576px){
        width: 75px;
        height: 75px;
    }
`

export const NxtwatchTrendingHeaderHeading = styled.h1`
    font-family: "Roboto";
    color: ${props => (props.themecolor === 'light' ? '#231f20' : '#f1f5f9')};
    font-size: 35px;
    font-weight: 600;
    margin-left: 20px;
    @media(max-width:576px){
        font-size: 25px;
    }
`

export const NxtwatchTrendingCardItemsContainer = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
      background-color: ${props =>
        props.themecolor === 'light' ? '#ffffff' : '#000000'};
    margin-top: 0px;
    @media(max-width: 576px){
        padding-left: 0px;
        padding-right: 0px;
        margin: 0px;
    }
`
export const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100vh;
    width: 100vw;
`
export const LoaderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
