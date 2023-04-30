import styled from "styled-components"
import Header from "../../components/Header"
import background from "../../assets/background-carrinho.jpg"
import Item from "../../components/Item"
import { useContext, useEffect } from "react"
import UserData from "../../context/UserData"
import api from "../../services/api";
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CarrinhoPage() {

    const { token, totalCarrinho, setTotalCarrinho, dadosCarrinho, setDadosCarrinho } = useContext(UserData)
    const [valor, setValor] = useState(0)
    const [hidden, setHidden] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const promise = api.getCarrinho(token)
        promise.then(res => { setDadosCarrinho(res.data) })
        promise.catch(err => console.log(err))
    }, [token])

    useEffect(() => {
        let quantidade = 0
        let preco = 0;
        dadosCarrinho.forEach(item => {
            quantidade = quantidade + item.amount
            preco = preco + item.amount * item.price
        })
        setTotalCarrinho(quantidade)
        setValor(preco)
    }, [setTotalCarrinho, dadosCarrinho])

    function send() {
        navigate("/")
    }

    function view(){
        setHidden(false)
    }

    console.log(dadosCarrinho)

    return (
        <>
            <Header isDescriptionPage="true" />
            <ContainerCarrinho>
                <Div>
                    {dadosCarrinho.map((item) => <Item key={item._id}
                        id={item._id}
                        name={item.name}
                        amount={item.amount}
                        color={item.color}
                        price={item.price}
                        img={item.img}
                        total={totalCarrinho}
                        setTotal={setTotalCarrinho}
                        valor={valor}
                        setValor={setValor}
                    />)}

                </Div>

                <Div2>
                    <Titulo >
                        {`Subtotal (${totalCarrinho} itens): R$${valor},00`}
                    </Titulo>
                    <Button onClick={view}>
                        Fechar pedido
                    </Button>

                </Div2>
                <Div3 hidden={hidden}>
                </Div3>
                <Div4 hidden={hidden}>
                    {dadosCarrinho.map((item) => <div>
                        <p> {`${item.amount}x Botão Personalizado do ${item.name}`}
                        </p>
                        <span> {`Preço R$${item.price},00`}</span>
                    </div>)}
                    <h1> {`Total: R$${valor},00`} </h1>

                    <Button2 onClick={send}>
                        Confirmar Pedido
                    </Button2>
                </Div4>
            </ContainerCarrinho>
        </>
    )
}

const ContainerCarrinho = styled.div`
    width: 100vw;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: space-between;
    padding: 80px 12vw;
    font-size: 17px;
    background: url(${background});
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`

const Div = styled.div`
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

const Div2 = styled.div`
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

const Div3 = styled.div`
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

const Div4 = styled.div`
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

    padding-top: 10px;
    padding-left:10px;
    padding-right:10px;


      div {
        margin-bottom:10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      span{
        margin-left: 100px;
      }

      h1{
        text-align: right;
      }
`
const Titulo = styled.div`

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 14px;
color: #000000;

display: flex;
justify-content: center;

`

const Button = styled.button`
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

const Button2 = styled.button`
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

