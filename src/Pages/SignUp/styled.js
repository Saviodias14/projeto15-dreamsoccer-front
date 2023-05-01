import styled from "styled-components";

export const SignUpContainer = styled.div`
    background-color: #08246C;
    width: 100%;
    height: 100%;
    display: flex;

    position: relative;

    a{font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        /* identical to box height */

        display: flex;
        align-items: center;
        text-align: center;
        text-decoration-line: underline;

        color: #28B0EA;

    }
`

export const DataContainer = styled.div`
   
    height: 100vh;
    width: 600px;
    margin: 100px auto;

    display: flex; 
    flex-direction: column;
    align-items: center;
   

`

export const Titulo = styled.div`
    
    margin: 50px auto;
    width: 388px;

    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 45px;
    display: flex;
    justify-content: center;
    text-align: center;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(96, 230, 205, 0.25);

`

export const Entradas = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    
`

export const Input = styled.input`

    width: 322px;
    height: 59px;

    border: 2px solid #000000;
    box-shadow: 0px 4px 4px rgba(76, 238, 238, 0.25);
    border-radius: 70px;

    margin-bottom: 16px ;
    padding: 10px;

    ::placeholder{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 45px;
        display: flex;
        align-items: center;
        
        color: #CDC5C5;
    }

    

`
export const Buttom = styled.button`
    width: 131px;
    height: 41px;
    background: #E3E1E1;
    border: 2px solid #000000;
    box-shadow: 0px 4px 4px rgba(76, 238, 238, 0.25);
    border-radius: 70px;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
   
    color: #000000;

    margin-bottom:15px;
    transition: transform 0.1s ease-in-out;
&:active {
  transform: translateY(2px);
}
`
export const Alert = styled.div`

    width: 210px;
    height: 200px;
    background-color: blue;

    display: ${props => props.senhaIncorreta ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;

    z-index: 1;

    position: absolute;

    top:35vh;
    left:35vw; 

    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 45px;
    text-align: center;
    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(96, 230, 205, 0.25);
 
    animation-name: aumentar;
    animation-duration: 2s;
    animation-fill-mode: forwards;

        @keyframes aumentar {
    from {
        transform: scale(0.1);
    }
    to {
        transform: scale(1);
      }
    } 

`
