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
    const { token, setName, setToken, setEmail,name, totalCarrinho } = useContext(UserData)

    function logout(){
        const promise = api.logout(token);
        promise.then( () =>{
            setToken("");
            setName("");
            setEmail("");


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
                    <Number><p>{totalCarrinho}</p></Number>
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
    width: 100vw;
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
    position: fixed;
    top: 0;
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
        display: flex;
        justify-content: start;
    }
`

const Usuario = styled.div`
    background-color: #08246C;
    padding: 5px;
    width: 180px;
    position: fixed;
    z-index:1;
    right:0;
    top:70px;
    border-radius: 0 0 0 15px;
    border-bottom: 4px solid #040B30;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: ${props => props.cliqueUser ? "flex" : "none"};
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
    width: 16px;
    height: 16px;
    background: #F92C2C;
    border-radius: 100%;
    position: absolute;
    right: 20px;
    top: 15px;
    font-weight: 700;
    font-size: 12px;
    color: #FBF7F7;
    p{
        margin: 0 auto;
        padding: 1px 1px 0 0;
    }
`