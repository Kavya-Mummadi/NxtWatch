import styled from 'styled-components'
import {MdPlaylistAdd} from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'

export const NxtwatchHomeBgContainer = styled.div`
    width: 100%;
    display: flex;
    overflow-y: auto;
    margin: 0px;

`

export const SavedVideosRouteIcon = styled(MdPlaylistAdd)`
    width: 30px;
    height: 30px;
    color:  #ff0000;
`

export const SearchIcon = styled(FaSearch)`
    color: #606060;
`

export const NxtwatchSavedVideosContentContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    background-color: #f1f1f1;
    overflow-y: auto;
    overflow-x:hidden;
    height: 100vh;
`

export const NxtwatchSavedVideosHeader = styled.div`
padding:20px;
display: flex;
flex-direction: row;
align-items: center;
width: 100vw;
background-color: ${props =>
  props.themecolor === 'light' ? '#ebebeb' : '#231f20'};
margin-bottom: 0px;

`

export const SavedVideosRouteIconBg = styled.div`
padding: 30px;
border-radius: 150px;
display: flex;
  background-color: ${props =>
    props.themecolor === 'light' ? '#e2e8f0' : '#181818'};
    
flex-direction: row;
align-items: center;
justify-content: center;
width: 90px;
margin-right: 10px;
`
export const NxtwatchSavedVideosHeaderHeading = styled.h1`
font-family: "Roboto";
color: ${props => (props.themecolor === 'light' ? '#231f20' : '#f1f5f9')};
font-size: 35px;
font-weight: 600;
margin-left: 20px;
@media(max-width: 767px){
    font-size: 25px;
}

`

export const NxtwatchSavedVideosCardItemsContainer = styled.ul`
list-style-type: none;
display: flex;
flex-direction: row;
padding: 40px;
flex-wrap:wrap;

background-color: ${props => (props.themecolor === 'light' ? '' : '#000000')};
@media(max-width: 767px){
    padding: 20px;
}

margin: 0px;
`
