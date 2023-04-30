import styled, { keyframes } from "styled-components"

export const Div = styled.div`
    background-color: #D9D9D9;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-bottom: 10px;
    margin-bottom: 15px;
`
export const Titulo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Imagem = styled.div`
    height: 100px;
    width: 100px;
    border-radius:50px;
    margin: 5px auto;
    border: 6px solid ${props => props.color};
    margin-top: 10px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`

export const Texto = styled.div`
    margin-right: 20px;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
        margin-bottom:8px;

    }
    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 20px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
    }
`
export const Interacao = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 10px;
`

export const Button = styled.div`
    width: 40px;
    height: 40px;
    background-color: #08246C;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000000;  
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 31px;
    cursor: pointer;
`

export const Quantidade = styled.div`
    width:200px;
    display: flex;
    justify-content: space-evenly;
    margin-right: 50px;
    margin-left: ${props => props.hidden ? "150px" : "0px"};
`
export const Number = styled.div`
    width :40px;
    height :40px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000000;  
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
`
export const fadeInOut = keyframes`
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
`;

export const RedCard = styled.div`
    width: 150px;
    background-color: pink;
    margin-left: 30px;
    display: ${props => props.hidden ? "none" : "flex"};
    animation: ${fadeInOut} 3s linear;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
    }
`
export const Card = styled.div`
    width: 25px;
    height: 20px;
    background-color:#F50707 ;
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
`
