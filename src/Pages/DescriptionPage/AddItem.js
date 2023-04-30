import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function AddItem({ showMessage, setShowMessage, setDisableButton }) {
    const navigate = useNavigate();

    return (
        <>
            {showMessage && (
                <Overlay>
                    <Message>Item adicionado ao carrinho <FaCheck/></Message>
                    <Button onClick={() => {setShowMessage(false); setDisableButton(false) }}>Ficar na tela</Button>
                    <Button onClick={() => navigate("/carrinho")}>Ir para o carrinho</Button>
                </Overlay>
            )}
        </>
    );
}


const Button = styled.button`
    border: 2px solid #ADD8E6;
    background-color: #87CEFA;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
`;

const Overlay = styled.div`
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
`;

const Message = styled.div`
    width: 350px;
    padding: 20px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    text-align: center;
    svg{
        color: green;
        margin-left: 10px;
        font-size: 20px;
    }
`;
