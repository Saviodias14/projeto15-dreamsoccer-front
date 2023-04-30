import styled, { keyframes } from "styled-components"
import { FaTrashAlt, FaWindowMinimize, FaPlus } from "react-icons/fa"
import { useContext, useState } from "react"
import apito from "../assets/audio/apito.mp3"
import AudioPlayer from "./AudioPlayer"
import UserData from "../context/UserData"
import api from "../services/api"


export default function Item({ id, name, amount, color, price, img, valor, setValor }) {

    const [hidden, setHidden] = useState(true)
    const [quant, setQuant] = useState(amount)
    const   {totalCarrinho, setTotalCarrinho, token } = useContext(UserData)


    function excluir() {
        setHidden(false)
        setTimeout(() => {
            setHidden(true)
        }, 3000)
    }

    function atualizar(quantidade){

        console.log(id)
        const body = {id : id , amount : quantidade}
        const promise = api.putCarrinho(token, body, id)
        promise.then(res => console.log(res))
        promise.catch(err => console.log(err))
    }

   
    function decrease() {
        if (quant === 1) {
            alert("Limite minimo de compra");
            return
        }
        const newQuant = quant - 1
        setQuant(newQuant)
        const newTotalCarrinho = totalCarrinho - 1
        setTotalCarrinho(newTotalCarrinho)
        const newValor = valor - price
        setValor(newValor)

        atualizar(newQuant)
    }

    function increase() {
        const newQuant = quant + 1
        setQuant(newQuant)
        const newTotalCarrinho = totalCarrinho + 1
        setTotalCarrinho(newTotalCarrinho)
        const newValor = valor + price
        setValor(newValor)

        atualizar(newQuant)
    }

    return (
        <Div>
            <Titulo>
                <Imagem color={color}>
                    <img src={img}
                        alt={name} />
                </Imagem>



                <Texto>
                    <h1> {`Botão Personalizado do ${name}`}</h1>
                    <h2>{`Preço: R$${price},00`} </h2>
                </Texto>
            </Titulo>
            <Interacao>
                <RedCard hidden={hidden}>
                    <Card />
                    <p> {`${name} expulso do carrinho`} </p>
                    <AudioPlayer audioSrc={apito} hidden={hidden} />
                </RedCard>
                <Quantidade hidden={hidden}>
                    <Button onClick={decrease}>
                        <FaWindowMinimize style={{ cursor: 'pointer' }} />
                    </Button>
                    <Number> {quant} </Number>
                    <Button onClick={increase}>
                        <FaPlus style={{ cursor: 'pointer' }} />
                    </Button>
                </Quantidade>

                <FaTrashAlt onClick={() => excluir()} style={{ cursor: 'pointer' }}
                    size={25} />
            </Interacao>

        </Div>)
}



const Div = styled.div`
   
    background-color: #D9D9D9;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-bottom: 10px;
    margin-bottom: 15px;

`
const Titulo = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Imagem = styled.div`
    height: 100px;
    width: 100px;
    border-radius:50px;
    margin: 5px auto;
    border: 6px solid ${props => props.color};
    
   

    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }

`

const Texto = styled.div`
margin-right: 20px;
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
const Interacao = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

padding-right: 10px;
`

const Button = styled.div`
    width :40px;
    height :40px;
    background-color: #08246C;

    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom:5px;
    
    border: 1px solid #000000;  
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 31px;
`

const Quantidade = styled.div`

    width:200px;
    display: flex;
    justify-content: space-evenly;
    margin-right: 50px;
    margin-left: ${props => props.hidden ? "150px" : "0px"};
`
const Number = styled.div`
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
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;

`
const fadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const RedCard = styled.div`

    width: 100px;
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
const Card = styled.div`

    width: 20px;
    height: 25px;
    background-color:#F50707 ;

    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
`

