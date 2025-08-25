import styled from 'styled-components'

export const NxtwatchRouterHeader = styled.div`
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

export const RouterHeaderRouteIconBg = styled.div`
    padding: 30px;
    border-radius: 200px;
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

export const NxtwatchRouterHeaderHeading = styled.h1`
    font-family: "Roboto";
    color: ${props => (props.themecolor === 'light' ? '#231f20' : '#f1f5f9')};
    font-size: 35px;
    font-weight: 600;
    margin-left: 20px;
    @media(max-width:576px){
        font-size: 25px;
    }
`
