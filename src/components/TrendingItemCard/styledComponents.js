import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingCardLink = styled(Link)`
    text-decoration: none;
`

export const TrendingCardBg = styled.li`
    display: flex;
    flex-direction:column;
    margin-bottom: 50px;
    width: 105vw;
    @media(min-width: 768px){
        flex-direction: row;
        margin-right:30px;
    }
`

export const TrendingCardImage = styled.img`

    @media(min-width: 678px){
        width: 450px;
    }
`

export const TrendingCardItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 8px;
    margin: 0px;
    @media(max-width: 576px){
        flex-direction: row;
    }
    @media(min-width:768px){
        padding-left: 20px;
    }
`

export const TrendingCardItemTitle = styled.h1`
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 600;
    padding-top: 10px;
    margin: 0px;
    color: ${props => (props.themecolor === 'light' ? '#1e293b' : '#ffffff')};
    @media(max-width: 576px){
        font-size: 20px;
    }
`

export const TrendingItemTextContainer = styled.div`
@media(max-width: 576px){
    padding: 10px;
}
`

export const TrendingCardItemChannelPic = styled.img`
    width: 40px;
    height: 40px;
    margin-top: 22px;
`

export const TrendingChannelPicContainer = styled.div`
    @media(min-width: 576px){
        display: none;
    }

`

export const TrendingcardItemLikeAndTimeContainer = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: disc;
    margin-left: 0px;
    padding-left:  0px;
    color: ${props => (props.themecolor === 'light' ? '#7e858e' : '#cbd5e1')};
`

export const TrendingCardChannelName = styled.p`
    margin-right: 40px;
    font-family: "Roboto";
    font-size: 15px;
    color: ${props => (props.themecolor === 'light' ? '#64748b' : '#cbd5e1')};
`

export const TrendingCardItemTextContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media(min-width: 576px){
        flex-direction: column;
        align-items: flex-start;
    }
`

export const TrendingCardListItem = styled.li`
    margin-right: 40px;
    font-family: "Roboto";
    font-size: 15px;
   color: #7e858e;
    @media(min-width: 768px){
    &:first-child {
        list-style-type: none;
        }
    }

`
