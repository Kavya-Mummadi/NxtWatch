import styled from 'styled-components'

export const NotFoundBgContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const NotFoundContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const NotFoundImage = styled.img`
    width: 30vw;
    margin-bottom: 30px;
`
export const NotFoundHeading = styled.h1`
    font-family:"Roboto";
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 5px;
    color: ${props => (props.themecolor === 'light' ? '#0f0f0f' : '#f8fafc')};
`
export const NotFoundDescription = styled.p`
    font-family:"Roboto";
    color: #64748b;
    font-size: 20px;
    color: ${props => (props.themecolor === 'light' ? '#0f0f0f' : '#d7dfe9')};
`
