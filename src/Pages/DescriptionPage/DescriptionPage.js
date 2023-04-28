import styled from "styled-components";
import Header from "../../components/Header";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import background from "../../assets/background.jpg"

export default function DescriptionPage(){
    const {id} = useParams();

    const promise = api.getPlayerById(id);
    promise.then((response) => {
        console.log(response);
    });
    promise.catch( (error) =>{
        console.log(error)
    });

    return(
        <>
            <Header />
            <Main>
                <div>
                    <img src="https://cms.somosfanaticos.com/__export/1642604230910/sites/fanaticos/img/2022/01/19/imago-gavi-121121-2.jpg_1159711837.jpg" alt="test"/>
                    <div>
                        <h2>Informações pessoais:</h2>
                        <ul>
                            <li>Posição: M </li>
                            <li>Idade: 18</li>
                            <li>Data de Nasc.: 24/08/2005</li>
                        </ul>
                    </div>
                </div>
                <Div>
                    <h1>Gavi</h1>

                    <Piece>
                        <img src="https://cms.somosfanaticos.com/__export/1642604230910/sites/fanaticos/img/2022/01/19/imago-gavi-121121-2.jpg_1159711837.jpg" alt="test"/>
                        <p>10</p>
                    </Piece>
                    <p>Tipo: Lendária</p>
                    <h2>Valor: R$ 20.99 </h2>
                </Div>
            </Main>    
        </>
    )
}


const Main = styled.main`
    width: 100vw;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: space-between;
    padding: 80px 12vw;
    font-size: 14px;
    background: url(${background});
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    div:first-child{
        img{
            width: 250px;
            height: 400px;
            object-fit: cover;
            border: 8px solid #b87333;
            border-radius: 20px;
            box-shadow: 4px 4px 4px #888;
        }
        div{
            width: 250px;
            margin-top: 20px;
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.4);
            padding: 15px;
        }
        h2{
            padding-bottom: 20px;
            font-weight: 700;
            color: rgba(0, 0, 0, 0.8);
            font-size: 20px;
        }
        li{
            padding-left: 10px;
            line-height: 20px;
        }
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    height: 550px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    padding: 15px;
    margin-left: 15px;
    h1{
        font-size: 35px;
        text-align: center;
        font-weight: 700;
        padding-bottom: 10px;
    }
`

const Piece = styled.div`
    display: flex;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    align-items: center;
    background-color: #FFF;
    background: radial-gradient(farthest-corner at center, #ffffff, #b87333);
    border: 6px solid #b87333;
    position: relative;
    img{
        width: 180px;
        height: 180px;
        opacity: 0.8;
        border-radius: 50%;
        object-fit: cover;
    }
    p{
        position: absolute;
        z-index: 2;
        font-size: 25px;
        color: #FFF;
        bottom: 25px;
        right: 40px;
    }
    
`
