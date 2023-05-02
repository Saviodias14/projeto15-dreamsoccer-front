import styled from "styled-components"
import background from "../../assets/background-carrinho.jpg"

export const ContainerCarrinho = styled.div`
    width: 100vw;
    height: calc(100vh - 70px);
    display: flex;
    margin-top: 70px;
    justify-content: space-between;
    padding: 80px 12vw;
    font-size: 17px;
    background: url(${background});
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position:fixed;
    overflow-y:scroll;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 580px;
    border-radius: 10px;
    background: rgba(57, 71, 203, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 26px;
    padding: 15px;
    overflow: auto;   
`

export const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 30vw;
    height: 200px;
    border-radius: 10px;
    background: rgba(217, 217, 217, 0.7);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 15px;
`

export const Div3 = styled.div`
    display: ${props => props.hidden ? "none" : "flex"};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 1;
`

export const Div4 = styled.div`
    width:500px;
    height: 500px;
    display: "flex";
    justify-content: 'center';
    align-items: 'center';
    position : absolute ;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-color: #dadada;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #000000;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    color: #000000;
    padding: 10px 10px 0 10px;
    div {
        margin-bottom:10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    span{
        margin-left: 70px;
        white-space: nowrap;
    }
    h1{
        margin-top: 50px;
        text-align: right;
    }
`
export const Titulo = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #000000;
    display: flex;
    justify-content: center;
`

export const Button = styled.button`
    width: 150px;
    height: 40px;   
    background: #F7EC90;
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 14px;
    color: #000000;
`

export const Button2 = styled.button`
    width: 150px;
    height: 40px;
    background: green;
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 14px;
    color: #000000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
`
export const Button3 = styled.button`
    width: 150px;
    height: 40px;
    background: #cdcdcd;
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 14px;
    color: #000000;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    
`
