import styled from "styled-components"
import { FaBars, FaCartPlus, FaUser } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function Header({ocult, setOcult}){
    const navigate = useNavigate()
    return(
        <TopBar>
            <div>
                <FaBars onClick={() => ocult ? setOcult(false) : setOcult(true)}
                    style={{ color: 'white', marginRight: '20px', cursor: 'pointer' }}
                    size={25}
                />
            </div>
            <h1>DREAMSOCCER</h1>
            <div>
                <FaUser onClick={() => navigate("/login")}
                    style={{ color: 'white', marginLeft: '20px', cursor: 'pointer' }}
                    size={25} />
                <FaCartPlus onClick={() => navigate("/carrinho")}
                    style={{ color: 'white', marginLeft: '20px', cursor: 'pointer' }}
                    size={25} strokeWidth={30} stroke="white" fill="none" />
            </div>
        </TopBar >
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
