import styled from 'styled-components'

export const NoSearchResultsBgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px;
     background-color: ${props =>
       props.themecolor === 'light' ? '#f1f1f1' : '#000000'};
       height: 100vh;
       width:100vw;
`

export const NoSearchResultsContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const NoSearchResultsImage = styled.img`
    width: 25vw;
    margin-bottom: 20px;
    @media(max-width: 767px){
        width: 90%;
    }
`

export const NoSearchResultsHeading = styled.h1`
    font-family: "Roboto";
    color: ${props => (props.themecolor === 'light' ? '#0f0f0f' : '#ffffff')};
    font-size: 30px;
    font-weight: 600;
     @media(max-width: 767px){
       font-size: 18px;
    }
`

export const NoSearchResultsDescription = styled.p`
    font-family: "Roboto";
    color: ${props => (props.themecolor === 'light' ? '#64748b' : '#f4f4f4')};
    font-size: 25px;
    margin-bottom:20px;
    @media(max-width: 767px){
       font-size: 10px;
    }
`

export const NoSearchResultsButton = styled.button`
    border : 0px solid ;
    border-radius: 5px;
    padding-left: 30px;
    padding-right:30px;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #4f46e5;
    font-family: "Roboto";
    color: #ffffff;
    font-size: 18px;
`
