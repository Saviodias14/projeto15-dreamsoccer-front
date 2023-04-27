import styled from "styled-components"
import { useState } from "react";
import SideBarHome from "./SideBarHome";
import Header from "../../components/Header";

export default function HomePage() {
    const [ocult, setOcult] = useState(true)
    return (
        <>
            <Header ocult={ocult} setOcult={setOcult}/>
            <Container>
                <SideBarHome ocult={ocult}/>
                <Products ocult={ocult}>
                    <ul>
                        <li>
                            <div></div>
                            <h1>Botão personalizado do Neymar</h1>
                            <p>R$ 20,00</p>
                        </li>
                        <li>
                            <div></div>
                            <h1>Botão personalizado do Neymar</h1>
                            <p>R$ 20,00</p>
                        </li>
                        <li>
                            <div></div>
                            <h1>Botão personalizado do Neymar</h1>
                            <p>R$ 20,00</p>
                        </li>
                        <li>
                            <div></div>
                            <h1>Botão personalizado do Neymar</h1>
                            <p>R$ 20,00</p>
                        </li>
                        <li>
                            <div></div>
                            <h1>Botão personalizado do Neymar</h1>
                            <p>R$ 20,00</p>
                        </li>
                        <li>
                            <div></div>
                            <h1>Botão personalizado do Neymar</h1>
                            <p>R$ 20,00</p>
                        </li>
                        <li>
                            <div></div>
                            <h1>Botão personalizado do Neymar</h1>
                            <p>R$ 20,00</p>
                        </li>
                        <li>
                            <div></div>
                            <h1>Botão personalizado do Neymar</h1>
                            <p>R$ 20,00</p>
                        </li>
                        <li>
                            <div></div>
                            <h1>Botão personalizado do Neymar</h1>
                            <p>R$ 20,00</p>
                        </li>
                    </ul>
                </Products>
            </Container>
        </>
    )
}

const Container = styled.div`
width: 100%;
min-height: 100vw;
background-color: green; 
background-image:
linear-gradient(to bottom, transparent 10%, rgba(0,0,0,.15) 10%, rgba(0,0,0,.15) 20%, transparent 20%, transparent 30%, rgba(0,0,0,.15) 30%, rgba(0,0,0,.15) 40%, transparent 40%, transparent 50%, rgba(0,0,0,.15) 50%, rgba(0,0,0,.15) 60%, transparent 60%, transparent 70%, rgba(0,0,0,.15) 70%, rgba(0,0,0,.15) 80%, transparent 80%, transparent 90%, rgba(0,0,0,.15) 90%, rgba(0,0,0,.15) 100%), 
linear-gradient(to right, transparent 10%, rgba(0,0,0,.15) 10%, rgba(0,0,0,.15) 20%, transparent 20%, transparent 30%, rgba(0,0,0,.15) 30%, rgba(0,0,0,.15) 40%, transparent 40%, transparent 50%, rgba(0,0,0,.15) 50%, rgba(0,0,0,.15) 60%, transparent 60%, transparent 70%, rgba(0,0,0,.15) 70%, rgba(0,0,0,.15) 80%, transparent 80%, transparent 90%, rgba(0,0,0,.15) 90%, rgba(0,0,0,.15) 100%); 
background-size: 50px 50px; 
position:relative;
`

const Products = styled.div`
display:flex;
flex-wrap: wrap;
align-items: flex-start;
justify-content: flex-start;
ul{
    display:flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    
    padding-left:${(props)=> props.ocult? "20px":"190px"};
}
li{
    width: 170px;
    height: 230px;
    box-sizing:border-box;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-evenly;
    margin: 50px 70px 20px 50px ;
    background: #EDE6C1;
    border: 4px solid #D1B316;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 33px;
}
div{
    background-color: red;
    height: 100px;
    width: 100px;
    border-radius:50px;
}
h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    margin-left: 15px;
}
p{
    color: #00ff09;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    margin-left: 15px;
}
`
