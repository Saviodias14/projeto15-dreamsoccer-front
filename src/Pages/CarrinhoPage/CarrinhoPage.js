import Header from "../../components/Header"
import Item from "./Item"
import { useContext, useEffect } from "react"
import UserData from "../../context/UserData"
import api from "../../services/api";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Button2, Button3, ContainerCarrinho, Div, Div2, Div3, Div4, Titulo } from "./style";

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
            quantidade = quantidade + Number(item.amount)
            preco = preco + item.amount * item.price
        })
        setTotalCarrinho(quantidade)
        setValor(preco)
    }, [setTotalCarrinho, dadosCarrinho])

    function send() {
        navigate("/")
    }

    function reload() {
        const promise = api.getCarrinho(token)
        promise.then(res => { setDadosCarrinho(res.data) })
        promise.catch(err => console.log(err))
    }

    function view() {
        reload();
        if (hidden === true) setHidden(false)
        else setHidden(true)
    }

    return (
        <>
            <Header isDescriptionPage="true" />
            <ContainerCarrinho>
                <Div>
                    {dadosCarrinho.map((item) => <Item key={item._id}
                        id={item._id}
                        name={item.name}
                        amount={Number(item.amount)}
                        color={item.color}
                        price={item.price}
                        img={item.img}
                        total={totalCarrinho}
                        setTotal={setTotalCarrinho}
                        valor={valor}
                        setValor={setValor}
                        reload={reload}
                    />)}

                </Div>

                <Div2>
                    <Titulo>
                        {`Subtotal (${totalCarrinho} itens): R$${valor},00`}
                    </Titulo>
                    <Button onClick={view}>
                        Fechar pedido
                    </Button>

                </Div2>
                <Div3 hidden={hidden}>
                </Div3>
                <Div4 hidden={hidden}>
                    {dadosCarrinho.map((item) =>
                    <div key={item._id}>
                        <p> {`${item.amount}x Botão Personalizado do ${item.name}`}</p>
                        <span> {`Preço R$${item.price},00`}</span>
                    </div>
                    )}
                    <h1> {`Total: R$${valor},00`} </h1>

                    <Button2 onClick={send}>
                        Confirmar Pedido
                    </Button2>
                    <Button3 onClick={view}>
                        Voltar
                    </Button3>
                </Div4>
            </ContainerCarrinho>
        </>
    )
}
