import styled from "styled-components"
import Header from "../../components/Header"
import { Input } from "../SignUp/styled"
import { useState } from "react"

export default function Finalize() {
    const [CEP, setCEP] = useState()
    const [road, setRoad] = useState()
    const [number, setNumber] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [country, setCountry] = useState()
    const cepRegex = /^\d{5}-\d{3}$/

    function searchCEP(e) {
        const cepValue = e.target.value
        setCEP(cepValue)
        if (cepRegex.test(cepValue)) {
            console.log("CEP válido")
        }
    }
    return (
        <>
            <Header isDescriptionPage="true" />
            <Container>
                <h1>Preencha os dados para finalizar a compra</h1>
                <form>
                    <Input
                        placeholder="CEP: 00000-000"
                        type="text"
                        name={"CEP"}
                        value={CEP}
                        onChange={searchCEP}
                    />
                    <Input
                        placeholder="Nome da rua"
                        type="text"
                        name={"road"}
                        value={road}
                    //onChange={searchCEP}
                    />
                    <Input
                        placeholder="Número da casa"
                        type="number"
                        name={"number"}
                        value={number}
                    //onChange={searchCEP}
                    />
                    <Input
                        placeholder="city"
                        type="text"
                        name={"city"}
                        value={city}
                    //onChange={searchCEP}
                    />
                    <Input
                        placeholder="Estado"
                        type="text"
                        name={"state"}
                        value={state}
                    //onChange={searchCEP}
                    />
                    <Input
                        placeholder="País"
                        type="text"
                        name={"country"}
                        value={country}
                        onChange={searchCEP}
                    />
                    <Button > Finalizar Compra</Button>
                </form>
            </Container>
        </>
    )
}

const Container = styled.div`
width: 500px;
height: max-content;
background-color:white;
padding: 50px 30px;
border-radius: 5px;
border: 2px rgba(0, 0, 0, 0.5) solid;
margin: 150px auto;
h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 14px;
}
`
const Button = styled.button`
background: #E3E1E1;
border: 2px solid #000000;
box-shadow: 0px 4px 4px rgba(76, 238, 238, 0.25);
border-radius: 70px;
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