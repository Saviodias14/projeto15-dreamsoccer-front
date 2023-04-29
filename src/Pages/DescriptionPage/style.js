import styled from "styled-components"
import colors from "../../constants/colors"
import background from "../../assets/background.jpg"

export const Main = styled.main`
    width: 100vw;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: space-between;
    padding: 80px 12vw;
    font-size: 17px;
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
            border: 8px solid ${(props) => props.type ? colors[props.type] : "#FFF"};
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

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 580px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    padding: 15px;
    margin-left: 15px;
    font-size: 18px;
    position: relative;
    h1 {
        font-size: 35px;
        text-align: center;
        font-weight: 700;
        padding-bottom: 10px;
    }
    h2 {
        margin: 40px 0 20px 0;
        span {
            padding-left: 20px;
            font-weight: bold;
        }
    }
    select{
        border-radius: 5px;
    }
    button{
        width: 200px;
        height: 40px;
        border-radius: 10px;
        margin: 60px auto;
        font-size: 18px;
        background-color: #08246C;
        box-shadow: 4px 4px 4px #888;
        color: #fff;
        border: 0px;
        cursor: pointer;
        :hover{
            background-color: #143fab;
        }
    }
`

export const Piece = styled.div`
    display: flex;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    align-items: center;
    background-color: #FFF;
    background: radial-gradient(farthest-corner at center, #ffffff, ${(props) => props.color && props.color});
    border: 6px solid ${(props) => props.color && props.color};
    box-shadow: -5px 5px 10px black;
    position: relative;
    margin: 0 auto;
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
        color: #FFF;
        bottom: 25px;
        right: 40px;
    }
    
`