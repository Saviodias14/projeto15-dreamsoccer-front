import styled, { keyframes } from "styled-components"
import { FaBars, FaCartPlus, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import SideBarHome from "./SideBarHome";
import UserData from "../../context/UserData";
import {Logout} from "../../services/logout";

export default function HomePage() {
    const navigate = useNavigate()
    const [ocult, setOcult] = useState(true)
    const [cliqueUser, setCliqueUser] = useState(false)
    const exit = Logout()

    const {name} = useContext(UserData)
    
    return (
        <>
            <TopBar>
                <div>
                    <FaBars onClick={() => ocult ? setOcult(false) : setOcult(true)}
                        style={{ color: 'white', marginRight: '20px', cursor: 'pointer' }}
                        size={25}
                    />
                </div>
                <h1>DREAMSOCCER</h1>
                <div>
                    <FaUser onClick={() => { cliqueUser === true ? setCliqueUser(false) : setCliqueUser(true) }}
                        style={{ color: 'white', marginLeft: '20px', cursor: 'pointer' }}
                        size={25} />
                    <FaCartPlus onClick={() => navigate("/carrinho")}
                        style={{ color: 'white', marginLeft: '20px', cursor: 'pointer' }}
                        size={25} strokeWidth={30} stroke="white" fill="none" />
                </div>
            </TopBar >
            <Usuario cliqueUser={cliqueUser}>
                {name? <Text> Olá, {name} </Text> : <Link to={"/login"}> Faça Login!</Link>}
                <FaSignOutAlt onClick={exit}
                    style={{ color: 'white', marginLeft: '20px', cursor: 'pointer' }}
                    size={25}   />
            </Usuario>
            <Container>
                <SideBarHome ocult={ocult} />
                <Products />
            </Container>
        </>
    )
}

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: green; 
background-image:
linear-gradient(to bottom, transparent 10%, rgba(0,0,0,.15) 10%, rgba(0,0,0,.15) 20%, transparent 20%, transparent 30%, rgba(0,0,0,.15) 30%, rgba(0,0,0,.15) 40%, transparent 40%, transparent 50%, rgba(0,0,0,.15) 50%, rgba(0,0,0,.15) 60%, transparent 60%, transparent 70%, rgba(0,0,0,.15) 70%, rgba(0,0,0,.15) 80%, transparent 80%, transparent 90%, rgba(0,0,0,.15) 90%, rgba(0,0,0,.15) 100%), 
linear-gradient(to right, transparent 10%, rgba(0,0,0,.15) 10%, rgba(0,0,0,.15) 20%, transparent 20%, transparent 30%, rgba(0,0,0,.15) 30%, rgba(0,0,0,.15) 40%, transparent 40%, transparent 50%, rgba(0,0,0,.15) 50%, rgba(0,0,0,.15) 60%, transparent 60%, transparent 70%, rgba(0,0,0,.15) 70%, rgba(0,0,0,.15) 80%, transparent 80%, transparent 90%, rgba(0,0,0,.15) 90%, rgba(0,0,0,.15) 100%); 
background-size: 50px 50px; 
position:relative;
`

const TopBar = styled.div`
background: #08246C;
border-bottom: 2px solid #040B30;
box-sizing:border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
height:70px;
z-index: 20;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 25px;
h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    color: #F8F0F0;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.75);
}
div{
    width:100px;
    display: flex;
    justify-content: start;
}
`
const Products = styled.div`

`
const Usuario = styled.div`
    background-color: #08246C;
    width:150px;
    height: 50px;
    position: absolute;
    z-index:1;
    right:0;
    top:70px;

    border-bottom: 4px solid #040B30;
    box-sizing:border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    justify-content: center;
    align-items: center;

    animation: ${props => props.cliqueUser ? slideIn : slideOut} 0.5s ease-in-out forwards; 
    
    a{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 47px;
        color: #F8F0F0;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.75);
    }

    
`
const slideIn = keyframes`

    0% {
        top: 20px;
    }
    100% {
        top: 70px;
    }

`;

const slideOut = keyframes`
  0% {
    top: 70px;
  }
  100% {
    top: -100%;
  }
`;

const Text = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 47px;
    color: #F8F0F0;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.75);
`