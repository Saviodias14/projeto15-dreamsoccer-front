import { Button, Card, Div, Imagem, Interacao, Number, Quantidade, RedCard, Texto, Titulo } from "./itemStyle"
import { FaTrashAlt, FaWindowMinimize, FaPlus } from "react-icons/fa"
import { useContext, useState } from "react"
import apito from "../../assets/audio/apito.mp3"
import AudioPlayer from "./AudioPlayer"
import UserData from "../../context/UserData"
import api from "../../services/api"

export default function Item({ id, name, amount, color, price, img, valor, setValor, reload }) {
    const [hidden, setHidden] = useState(true)
    const [quant, setQuant] = useState(amount)
    const {totalCarrinho, setTotalCarrinho, token } = useContext(UserData)

    function excluir() {
        setHidden(false)
        const body = {id}
        const promise = api.deleteCarrinho(token, body);
        promise.then( (response) => {
            console.log(response)
        });
        promise.catch( error => console.log(error))
        setTimeout(() => {
            setHidden(true)
            reload();
        }, 3000)
    }

    function atualizar(quantidade){
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
