import styled from 'styled-components'
import {FaMoon, FaBars} from 'react-icons/fa'
import {FiLogOut, FiSun} from 'react-icons/fi'

export const NxtwatchHeaderContainer = styled.nav`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${props =>
      props.themeColor === 'light' ? '#ffffff' : '#212121'}
    
`

export const NxtwatchHeaderLogo = styled.img`
    width: 125px;
    @media(min-width: 768px){
        width: 175px;
        padding-left: 25px;
    }
`

export const NxtwatchHeaderMediumDetailsContainer = styled.ul`
    list-style-type: none;          
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 767px){
        display: none;
    }
`

export const NxtwatchHeaderSmallDetailsContainer = styled.div`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 35%;
    @media(min-width: 768px){
        display: none;
    }
 `

export const MoonIcon = styled(FaMoon)`
    width: 25px;
    height: 25px;
    padding: 0px;
    margin: 0px;
    @media(min-width:768px){
        width: 50px;
        height: 50px;
        padding: 5px;
    }
    color: ${props => (props.themecolor === 'light' ? '#000000' : '#ffffff')}
    
`

export const SunnyIcon = styled(FiSun)`
  width: 25px;
    height: 25px;
    padding: 0px;
    margin: 0px;
    @media(min-width:768px){
        width: 50px;
        height: 50px;
        padding: 5px;
    }
    color: ${props => (props.themecolor === 'light' ? '#000000' : '#ffffff')}
`

export const LogoutIcon = styled(FiLogOut)`
    width: 25px;
    height: 25px;
    padding: 0px;
    margin: 0px;
    @media(min-width:768px){
       width: 50px;
        height: 50px;
        padding: 5px;
    }
    color: ${props => (props.themecolor === 'light' ? '#ffffff' : '#000000')}
`

export const BarsIcon = styled(FaBars)`
    width: 25px;
    height: 25px;
    padding: 0px;
    margin: 0px;
    @media(min-width: 768px){
        width: 50px;
        height: 50px;
        padding: 5px;
    }
`

export const NxtwatchHeaderDetailsListitem = styled.li`
    margin-right: 25px;
`

export const NxtwatchHeaderProfile = styled.img`
    width: 25px;
    height: 25px;
    padding: 0px;
    margin: 0px;
    @media(min-width: 768px){
       width: 50px;
        height: 50px;
        padding: 5px;
    }
`

export const NxtwatchHeaderLogoutbutton = styled.button`
    border: 2px solid ${props =>
      props.themecolor === 'light' ? '#3b82f6' : '#ffffff'};
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 500;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 4px;
    background-color: transparent;
    color: ${props => (props.themecolor === 'light' ? '#3b82f6' : '#ffffff')}
`
