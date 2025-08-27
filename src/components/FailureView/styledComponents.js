import styled from 'styled-components'

export const FailureViewBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  background-color: ${props =>
    props.themecolor === 'light' ? '#f4f4f4' : '#000000'};
`

export const FailureViewContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const FailureViewImage = styled.img`
  width: 25vw;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    width: 80%;
  }
`

export const FailureViewHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 0px;
  color: ${props => (props.themecolor === 'light' ? '#0f0f0f' : '#f9f9f9')};
  @media (max-width: 767px) {
    font-size: 12px;
  }
`

export const FailureViewDescription = styled.p`
  font-family: 'Roboto';
  color: #64748b;
  font-size: 25px;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    font-size: 10px;
  }
`

export const FailureViewButton = styled.button`
  border: 0px solid;
  border-radius: 5px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #4f46e5;
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
`
