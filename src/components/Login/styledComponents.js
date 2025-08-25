import styled from 'styled-components'

export const NxtWatchLoginBgContainer = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
`

export const NxtWatchLoginContainer = styled.div`
    box-shadow: 0px 15px 25px #ebebeb;
    background-color: #ffffff;
    width: 90vw;
    border-radius: 6px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    @media(min-width: 768px){
        width: 600px;
        padding-left: 50px;
        padding-right: 50px;
    }
`

export const NxtWatchLogo = styled.img`
    width: 50%;
    margin-bottom: 10px;
    align-self: center;
`
export const FormFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`

export const FormFieldLabel = styled.label`
    font-family: "Roboto";
    color: #64748b;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 8px;
    @media(min-width: 768px){
        font-size: 20px;
    }
`

export const FormElementType = styled.input`
    width: 100%;
    border:1px solid #cbd5e1;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 3px;
    font-family: "Roboto";
    color: #475569;
    font-size: 15px;
    @media(min-width: 768px){
        font-size: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 30px;
        padding-right: 30px;
    }
`

export const TooglePasswordContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top:12px;
    margin-bottom: 20px;
    @media(min-width: 768px){
        margin-top: 20px;
    }
`

export const InputCheckboxField = styled.input`
    width: 20px;
    height: 20px;
    border-radius: 1px solid #cbd5e1;
    padding: 3px;
    margin-right: 10px;
`

export const CheckboxLabelElement = styled.label`
    font-family:"Roboto";
    color: #181818;
    font-size: 17px;
    font-weight: 500;
    @media(min-width: 768px){
        font-size: 20px;
    }
`
export const LoginButton = styled.button`
    width: 100%;
    background-color: #3b82f6;
    border-radius: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-top: 10px;
    border:0px solid;
    font-family:"Roboto";
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 2px;
    @media(min-width: 768px){
        font-size: 20px;
    }
`

export const ErrorParagraph = styled.p`
    font-family:"Roboto";
    color: #ff0b37;
    font-size: 18px;
    font-weight: 500;
    margin-top: 20px;
    @media(min-width: 768px){
        margin-top: 1px;
    }
`
