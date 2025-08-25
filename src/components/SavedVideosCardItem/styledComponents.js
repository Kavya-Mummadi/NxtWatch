import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SavedVideosCardLink = styled(Link)`
    text-decoration: none;
   flex-wrap: wrap;  
  width: 100%; 

`

export const SavedVideosCardBg = styled.li`
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    margin-right: 35px;
`

export const SavedVideosCardImage = styled.img`
    width:700px;
    height: 300px;
    margin-right: 20px;
    @media(max-width:767px){
        width: 200px;
        height: 150px;
        margin-right: 10px;
    }
`

export const SavedVideosCarditemTextContainer = styled.div`
display: flex;
width: 100%;
flex-direction:column;
margin-left:0px;
padding-right: 10px;
`

export const SavedVideosCardItemTitle = styled.h1`
    font-family:"Roboto";
    font-size: 30px;
    font-weight: 600;
    padding-top:10px;
    margin: 0px;
    color: ${props => (props.themecolor === 'light' ? '#1e293b' : '#f1f5f9')};
    @media(max-width:767px){
        font-size: 12px;
        padding:0px;
        margin:0px;
    }

`

export const SavedVideosCardItemViews = styled.p`
    font-family:"Roboto";
    font-size: 20px;
     color: ${props => (props.themecolor === 'light' ? '#606060' : '#94a3b8')};
  
@media(max-width:767px){
        font-size: 15px;
    }
`

export const SavedVideosCardItemViewSection = styled.ul`
display:flex;
flex-direction:row;
list-style-type: disc;
padding:0px;
margin:0px;
@media(max-width: 767px){
    width: 100%;

}

`

export const SavedVideosCardItemViewItem = styled.li`
font-family:"Roboto";
 color: ${props => (props.themecolor === 'light' ? '#616e7c' : '#94a3b8')};
  
font-size: 10px;
font-weight:500;
margin-right: 30px;
 &:first-child {
      list-style-type: none; 
    }
@media(min-width: 768px){
    font-size: 20px;
    font-weight:500;
    margin-right: 35px;
}
`
