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
                <Products />
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

`