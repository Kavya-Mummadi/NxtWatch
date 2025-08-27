import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingCardLink = styled(Link)`
  text-decoration: none;
  flex-grow: 1;
`

export const GamingCardBg = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-right: 20px;
  @media (max-width: 576px) {
    width: 120px;
  }
  @media (max-width: 768px) {
    width: 200px;
    margin-right: 30px;
    margin-bottom: 30px;
  }
`

export const GamingCardImage = styled.img`
  margin-bottom: 20px;
  @media (min-width: 768px) {
    height: 450px;
  }
  @media (max-width: 767px) {
    height: 300px;
  }
`

export const GamingCarditemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
`

export const GamingCardItemTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  padding-top: 10px;
  margin: 0px;

  color: ${props => (props.themecolor === 'light' ? '#1e293b' : '#f1f5f9')};
  @media (max-width: 767px) {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    font-size: 25px;
  }
`

export const GamingCardItemViews = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  @media (max-width: 767px) {
    font-size: 9px;
  }
  color: ${props => (props.themecolor === 'light' ? '#606060' : ' #cbd5e1')};

  @media (min-width: 768px) {
    font-size: 20px;
  }
`
