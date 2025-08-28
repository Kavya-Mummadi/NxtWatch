import styled from 'styled-components'

export const NoSavedVideosBgContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.themecolor === 'light' ? '#ebebeb' : '#231f20'};
`

export const NoSavedVideosContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NoSavedVideosImage = styled.img`
  width: 30vw;
  margin-bottom: 30px;
`
export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 5px;
  color: ${props => (props.themecolor === 'light' ? '#0f0f0f' : '#f4f4f4')};
`
export const NoSavedVideosDescription = styled.p`
  font-family: 'Roboto';
  color: #64748b;
  font-size: 20px;
  color: ${props => (props.themecolor === 'light' ? '#0f0f0f' : ' #ebebeb')};
`
