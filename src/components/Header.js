import styled , { keyframes }from "styled-components"
import { FaBars, FaShoppingCart, FaUser, FaSignOutAlt, FaHome } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import UserData from "../context/UserData";
import api from "../services/api";

export default function Header({ ocult, setOcult, isDescriptionPage}) {
    const navigate = useNavigate()
    const [cliqueUser, setCliqueUser] = useState(false)
    const { token, setName, setToken, name, totalCarrinho } = useContext(UserData)

    function logout(){
        const promise = api.logout(token);
        promise.then( () =>{
            setToken("");
            setName("");
            localStorage.clear();
            navigate("/");
            window.location.reload()
        });
        promise.catch((err) => console.log(err.response.data));
    }
   
    return (
        <>
            <TopBar>
                {!isDescriptionPage ? 
                <div>
                    <FaBars onClick={() => ocult ? setOcult(false) : setOcult(true)}
                        style={{ color: 'white', marginRight: '20px', cursor: 'pointer' }}
                        size={25} />
                </div> : 
                <div>
                <FaHome onClick={() => navigate("/")}
                    style={{ color: 'white', marginRight: '20px', cursor: 'pointer' }}
                    size={25} />
                </div>
                }
                <h1>DREAMSOCCER</h1>
                <div>
                    <FaUser onClick={() => { cliqueUser === true ? setCliqueUser(false) : setCliqueUser(true)}}
                        style={{ color: 'white', marginLeft: '20px', cursor: 'pointer' }}
                        size={25} />
                    <FaShoppingCart onClick={() => navigate("/carrinho")}
                        style={{ color: 'white', marginLeft: '20px', cursor: 'pointer' }}
                        size={25}  />
                    <Number> {totalCarrinho} </Number>
                </div>
            </TopBar >
            <Usuario cliqueUser={cliqueUser}>
                {name ? <Text> Olá, {name} </Text> : <Link to={"/login"}> Faça Login!</Link>}
                <FaSignOutAlt onClick={logout}
                    style={{ color: 'white', marginLeft: '20px', cursor: 'pointer' }}
                    size={25} />
            </Usuario>
        </>
    )
}



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
        font-weight: 900;
        font-size: 40px;
        line-height: 47px;
        color: #F8F0F0;
        text-shadow: 2px 6px 6px rgba(0, 0, 0, 0.9);
    }
    div{
        /* width:100px; */
        display: flex;
        justify-content: start;
    }
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

    display: ${props => props.cliqueUser ? "flex" : "none"} ;
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
        top: 50px;
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
        top: 60px;
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

const Number = styled.div`

width: 15px;
height: 15px;

background: #F92C2C;
border-radius: 102px;

position: absolute;

display: flex;
align-items: center;
justify-content: center;

right: 20px;
top: 15px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 14px;
/* identical to box height */
padding-left: 3px;


color: #FBF7F7;
`