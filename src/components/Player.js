import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Player({ _id,imagem, name, price,type }) {

    const [color, setColor] = useState("")

    useEffect(()=>{
        if(type === "Legendary"){
            setColor("#DAA520")
        } else if (type === "Silver"){
            setColor("#C0C0C0")
        } else {
            setColor("#A0522D")
        }
    }, [type])

    return (
        <Link to={`/descricao/${_id}`}>
            <PlayerContainer color={color}>
                <Imagem imagem={imagem}>  
                    < img src={imagem} alt={name} />
                </Imagem>

                <Text>
                   <h1> {`Botão personalizado do ${name}`}  </h1> 
                   <h2> R$ {price},00  </h2> 
                </Text>
            </PlayerContainer>
        </Link>
    )
}

const PlayerContainer = styled.div`
width: 170px;
height: 240px;
border: 6px solid ${props => props.color};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 33px; 
background-color: #EDE6C1;
`

const Imagem = styled.div`
    height: 100px;
    width: 100px;
    border-radius:50px;
    margin: 5px auto;
    border: 1px solid #D1B316;

    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        height:100px;
        object-fit: cover;
    }

`

const Text = styled.div`

width: 140px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
line-height: 18px;
margin: 15px auto;

text-decoration: none;
text-align: center;
color:#000;

h1{
    font-size: 15px;
}

h2{
    margin-top: 10px;
    font-size: 20px;
    color: DarkSlateGray;
}
`