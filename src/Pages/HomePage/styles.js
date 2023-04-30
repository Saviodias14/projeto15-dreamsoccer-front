import styled from "styled-components"
import grama from "../../assets/grama.jpg"

export const Container = styled.div`
width: 100%;
min-height: 100vw;
/* background-color: green; 
background-image:
linear-gradient(to bottom, transparent 10%, rgba(0,0,0,.15) 10%, rgba(0,0,0,.15) 20%, transparent 20%, transparent 30%, rgba(0,0,0,.15) 30%, rgba(0,0,0,.15) 40%, transparent 40%, transparent 50%, rgba(0,0,0,.15) 50%, rgba(0,0,0,.15) 60%, transparent 60%, transparent 70%, rgba(0,0,0,.15) 70%, rgba(0,0,0,.15) 80%, transparent 80%, transparent 90%, rgba(0,0,0,.15) 90%, rgba(0,0,0,.15) 100%), 
linear-gradient(to right, transparent 10%, rgba(0,0,0,.15) 10%, rgba(0,0,0,.15) 20%, transparent 20%, transparent 30%, rgba(0,0,0,.15) 30%, rgba(0,0,0,.15) 40%, transparent 40%, transparent 50%, rgba(0,0,0,.15) 50%, rgba(0,0,0,.15) 60%, transparent 60%, transparent 70%, rgba(0,0,0,.15) 70%, rgba(0,0,0,.15) 80%, transparent 80%, transparent 90%, rgba(0,0,0,.15) 90%, rgba(0,0,0,.15) 100%); 
background-size: 50px 50px; 
position:relative; */
background-image: url(${grama});
background-attachment: fixed;
background-size: cover;
background-position: center;
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