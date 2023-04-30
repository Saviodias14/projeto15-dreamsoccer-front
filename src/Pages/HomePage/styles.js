import styled from "styled-components"
import grama from "../../assets/grama.jpg"

export const Container = styled.div`
    width: 100%;
    min-height: 100vw;
    background-image: url(${grama});
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    margin-top: 70px;
`

export const Products = styled.div`
    display:flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    ul{
        display:flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding-left:${(props) => props.ocult ? "20px" : "190px"};
    }
    li{
        box-sizing:border-box;
        display: flex;
        flex-direction:column;
        align-items: flex-start;
        justify-content: space-evenly;
        margin: 50px 70px 20px 50px ;
    }
    a{
        text-decoration:none;
    } 
`

export const SideBar = styled.div`
    display: ${(props) => (props.ocult ? "none" : "flex")};
    width:170px;
    min-height: 100%;
    flex-direction:column;
    align-items:flex-start;
    justify-content: flex-start;
    padding-left:20px;
    background: #08246C;
    border-right: 2px solid #040B30;
    box-sizing:border-box;
    position: fixed;
    left:0;
    top:70px;
    color:white;
    h1{
        font-weight: 700;
        font-size: 20px;
        display: flex;
        text-align: center;
        margin: 0 auto;
        margin-top:20px;
        margin-bottom:40px;
    }
    li{
        display: flex;
        flex-direction:column;
        margin-bottom: 20px;
    }

    a{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;
        display: flex;
        margin-top:20px;
        margin-bottom:40px;
    }
    li{
        display: flex;
        flex-direction:column;
        margin-bottom: 20px;
    }
    div{
        display: flex;
    }
`

export const Text = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 47px;
    color: #F8F0F0;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.75);
`

export const Filter = styled.li`
    display: flex;
    flex-direction:column;
    margin-bottom: 20px;
    ul{
        display:${(props) => props.show ? 'none' : 'flex'};
        flex-direction:column;
    }
    div{
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
    }
    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
    }
`
