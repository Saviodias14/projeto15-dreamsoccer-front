import styled from "styled-components"
import { FaBars, FaCartPlus, FaUser } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HomePage() {
    const navigate = useNavigate()
    const [ocult, setOcult] = useState(true)
    return (
        <Container>
            <TopBar>
                <div>
                    <FaBars onClick={()=>ocult?setOcult(false):setOcult(true)} style={{ color: 'white', marginRight: '20px' }} size={25} />
                </div>
                <h1>DREAMSOCCER</h1>
                <div>
                    <FaUser onClick={()=>navigate("/login")} style={{ color: 'white', marginLeft: '20px' }} size={25} />
                    <FaCartPlus onClick={()=>navigate("/carrinho")} style={{ color: 'white', marginLeft: '20px' }} size={25} strokeWidth={30} stroke="white" fill="none" />
                </div>
            </TopBar >
            <SideBar ocult={ocult}>

            </SideBar>
            <Products />
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 500px;
background-color: green; 
background-image:
linear-gradient(to bottom, transparent 10%, rgba(0,0,0,.15) 10%, rgba(0,0,0,.15) 20%, transparent 20%, transparent 30%, rgba(0,0,0,.15) 30%, rgba(0,0,0,.15) 40%, transparent 40%, transparent 50%, rgba(0,0,0,.15) 50%, rgba(0,0,0,.15) 60%, transparent 60%, transparent 70%, rgba(0,0,0,.15) 70%, rgba(0,0,0,.15) 80%, transparent 80%, transparent 90%, rgba(0,0,0,.15) 90%, rgba(0,0,0,.15) 100%), 
linear-gradient(to right, transparent 10%, rgba(0,0,0,.15) 10%, rgba(0,0,0,.15) 20%, transparent 20%, transparent 30%, rgba(0,0,0,.15) 30%, rgba(0,0,0,.15) 40%, transparent 40%, transparent 50%, rgba(0,0,0,.15) 50%, rgba(0,0,0,.15) 60%, transparent 60%, transparent 70%, rgba(0,0,0,.15) 70%, rgba(0,0,0,.15) 80%, transparent 80%, transparent 90%, rgba(0,0,0,.15) 90%, rgba(0,0,0,.15) 100%); 
background-size: 50px 50px; 
`

const TopBar = styled.div`
background: #08246C;
border-bottom: 2px solid #040B30;
box-sizing:border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
height:45px;
z-index: 20;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 15px;
h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
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

const SideBar = styled.div`
display: ${(props)=>props.ocult?"none":"flex"};
width:110px;
height: 100%;
background: #08246C;
border-right: 2px solid #040B30;
box-sizing:border-box;
position: fixed;
left:0;
top:43px;
`

const Products = styled.div`

`