import styled from "styled-components"
import Header from "../../components/Header"
import { Input } from "../SignUp/styled"
import { useContext, useState } from "react"
import axios from "axios"
import api from "../../services/api"
import UserData from "../../context/UserData"
import { useNavigate } from "react-router-dom"

export default function Finalize() {
    const { token } = useContext(UserData)
    const navigate = useNavigate()
    const [CEP, setCEP] = useState("")
    const [road, setRoad] = useState("")
    const [number, setNumber] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [disabled, setDisabled] = useState(false)
    const cepRegex = /^\d{5}-\d{3}$/
    const body = { CEP: CEP.replace("-", ""), road, number: Number(number), city, state, country }

    function searchCEP(e) {
        const cepValue = e.target.value
        setCEP(cepValue)
        if (cepRegex.test(cepValue)) {
            setDisabled(true)
            axios.get(`https://viacep.com.br/ws/${cepValue.replace("-", "")}/json/`)
                .then((res) => {
                    setCity(res.data.localidade)
                    setCountry("Brasil")
                    setRoad(res.data.logradouro)
                    setState(res.data.uf)
                })
                .catch((err) => (err.response.data))
        } else if (cepRegex.test(CEP)) {
            setDisabled(false)
            setCity("")
            setCountry("")
            setRoad("")
            setState("")
        }
    }
    function FinalizarCompra(e) {
        e.preventDefault()
        const promisse = api.postShop(token, body)
        promisse.then(() =>
            api.deleteAll(token)
                .then((res) => {
                    alert(res.data)
                    navigate("/")
                })
                .catch((err)=>alert(err.response.data))
        )
        promisse.catch((err) => alert(err.response.data))
    }
    return (
        <>
            <Header isDescriptionPage="true" />
            <Container disabled={disabled}>
                <h1>Preencha os dados para finalizar a compra</h1>
                <form onSubmit={FinalizarCompra}>
                    <label htmlFor="CEP">CEP:</label>
                    <Input
                        id="CEP"
                        placeholder="CEP: 00000-000"
                        type="text"
                        name={"CEP"}
                        value={CEP}
                        onChange={searchCEP}
                    />
                    <label htmlFor="road">Rua:</label>
                    <Input
                        id="road"
                        placeholder="Nome da rua"
                        type="text"
                        name={"road"}
                        value={road}
                        disabled={disabled}
                        style={{ background: `${disabled ? "rgba(80,80,80,0.2" : ""}` }}
                        onChange={(e) => { setRoad(e.target.value) }}
                    />
                    <label htmlFor="number">Número:</label>
                    <Input
                        id="number"
                        placeholder="Número da casa"
                        type="text"
                        name={"number"}
                        value={number}
                        onChange={(e) => { setNumber(e.target.value) }}
                    />
                    <label htmlFor="city">Cidade:</label>
                    <Input
                        id="city"
                        placeholder="city"
                        type="text"
                        name={"city"}
                        value={city}
                        disabled={disabled}
                        style={{ background: `${disabled ? "rgba(80,80,80,0.2" : ""}` }}
                        onChange={(e) => { setCity(e.target.value) }}
                    />
                    <label htmlFor="state">Estado:</label>
                    <Input
                        id="state"
                        placeholder="Estado"
                        type="text"
                        name={"state"}
                        value={state}
                        disabled={disabled}
                        style={{ background: `${disabled ? "rgba(80,80,80,0.2" : ""}` }}
                        onChange={(e) => { setState(e.target.value) }}
                    />
                    <label htmlFor="country">País:</label>
                    <Input
                        id="country"
                        placeholder="País"
                        type="text"
                        name={"country"}
                        value={country} disabled={disabled}
                        style={{ background: `${disabled ? "rgba(80,80,80,0.2" : ""}` }}
                        onChange={(e) => { setCountry(e.target.value) }}
                    />
                    <Button type="submit"> Finalizar Compra</Button>
                </form>
            </Container>
        </>
    )
}

const Container = styled.div`
width: 500px;
height: max-content;
background-color:white;
padding: 50px 0;
border-radius: 5px;
border: 2px rgba(0, 0, 0, 0.5) solid;
margin: 150px auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 14px;
    margin-bottom:20px;
}
form{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}
label{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    margin:10px 10px;
}
`
const Button = styled.button`
background: #E3E1E1;
border: 2px solid #000000;
box-shadow: 0px 4px 4px rgba(76, 238, 238, 0.25);
border-radius: 70px;
padding:20px;
font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
display: flex;
justify-content: center;
align-items: center;
color: #000000;
margin-bottom:15px;
transition: transform 0.1s ease-in-out;
&:active {
  transform: translateY(2px);
}
`