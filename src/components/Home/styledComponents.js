import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'

export const NxtwatchHomeBgContainer = styled.div`
    width: 100vw;
    display: flex;
    width: 100%;
    margin: 0px;
`
export const NxtwatchHomeContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 0px;
    overflow-y: auto;
    background-color: ${props =>
      props.themecolor === 'light' ? '#f9f9f9' : ' #181818'};
`
export const NxtwatchBannerContainer = styled.div`
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    height: 45vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    padding: 25px;
    @media(max-width: 576px){
        width: 100%;
        height: 70vh;
        padding: 30px;
    }
`

export const NxtWatchBannerContentContainer = styled.div`
    @media(min-width: 768px){
    width: 400px;
    }
    width: 90vw;
`
export const NxtwatchLogo = styled.img`
    width: 200px;
    margin-bottom: 20px;
    @media(max-width: 767px){
        width: 130px;
    }
`
export const NxtwatchBannerPara = styled.p`
    font-family: "Roboto";
    color: #475569;
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
    @media(max-width: 767px){
        font-size: 20px;
    }
`

export const NxtwatchBannerButton = styled.button`
    border: 2px solid ;
    font-family:"Roboto";
    color: #475569;
    background-color: transparent;
    font-size: 18px;
    font-weight: 600;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    @media(max-width: 767px){
        font-size: 20px;
    }
`

export const NxtwatchHomeDisplayContentContainer = styled.div`
    border-radius: 3px;
    padding-top: 20px;
`

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: none;
    padding-left: 20px;
`

export const SearchBar = styled.input`
    width: 75%;
    font-family: "Roboto";
    color: #616e7c;
    font-size: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid #909090;
    outline: none;
    @media(min-width: 768px){
        width: 30%
    }
`
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

export const SearchButton = styled.button`
padding-top: 8px;
padding-bottom: 8px;
background-color: #ebebeb;
padding-left: 28px;
padding-right:28px;
border: 1px solid #909090;
`

export const NxtwatchDynamicContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    padding: 0px;
`

export const NxtWatchCardsContainer = styled.ul`
    list-style-type: none;
    display: flex;
    
    align-items: start;
    width: 100%;
    padding: 0px;
    flex-wrap: wrap;
    @media(max-width:575){
        flex-direction: column;
    }
    @media(min-width:576px){
        display: flex;
        flex-direction: row;
        padding: 20px;
        flex-wrap: wrap;
        display: flex;
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
