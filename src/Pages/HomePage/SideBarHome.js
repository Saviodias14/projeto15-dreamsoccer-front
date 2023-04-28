import { FaRegArrowAltCircleRight, FaCheckSquare, FaRegArrowAltCircleDown } from "react-icons/fa";
import { FilterList, FiltersQuery } from "../../constants/FilterList";
import { Buttom } from "../SignUp/styled";
import { useContext, useState } from "react";
import styled from "styled-components";
import UserData from "../../context/UserData";
import { Link } from "react-router-dom";

export default function SideBarHome({ ocult, setParam }) {
    const [filter, setFilter] = useState([...FilterList])
    let newFilter = []
    FilterList.forEach((l) => newFilter.push([...l.values]))
    const [selectedFilter, setSelectedFilter] = useState([...newFilter])
    const { name } = useContext(UserData)

    function FilterSearch() {
        let word = "?"
        selectedFilter[0].filter((v, i) => v ? "" : word += `nacionality=${FiltersQuery[0][i]}&`)
        selectedFilter[1].filter((v, i) => v ? "" : word += `position=${FiltersQuery[1][i]}&`)
        selectedFilter[2].filter((v, i) => v ? "" : word += `type=${FiltersQuery[2][i]}&`)
        selectedFilter[3].filter((v, i) => v ? "" : word += `category=${FiltersQuery[3][i]}&`)
        setParam(word.slice(0, -1))
    }

    return (
        <SideBar ocult={ocult}>
            <h1>{name ? <Text> Olá, {name} </Text> : <Link to={"/login"}> Comprar? <br /> Faça Login!</Link>} </h1>
            <ul>{FilterList.map((l, i) =>
                <Filter show={filter[i]}>
                    <div>{filter[i] ?
                        <FaRegArrowAltCircleRight onClick={() => {
                            const aux = [...filter]
                            aux[i] = false
                            setFilter(aux)
                        }} size={20}
                            style={{ marginRight: '7px', cursor: 'pointer' }} />
                        : <FaRegArrowAltCircleDown onClick={() => {
                            const aux = [...filter]
                            aux[i] = true
                            setFilter(aux)
                        }} size={20}
                            style={{ marginRight: '7px', cursor: 'pointer' }} />}
                        <h2>{l.filter}</h2>
                    </div>
                    <ul>
                        {l.values.map((v, j) =>
                            <div>
                                <FaCheckSquare onClick={() => {
                                    const aux = [...selectedFilter]
                                    aux[i][j] = !aux[i][j]
                                    setSelectedFilter(aux)
                                }} size={15} style={{ marginRight: '5px', marginLeft: '10px', color: `${selectedFilter[i][j] ? 'white' : 'green'}` }} />
                                <p>{v}</p>
                            </div>
                        )}
                    </ul>
                </Filter>
            )}
            </ul>
            <div>
                <Buttom onClick={() => {
                    setParam("")
                    setSelectedFilter([...newFilter])
                }} style={{ width: '70px' }}>Limpar</Buttom>
                <Buttom onClick={FilterSearch} style={{ width: '70px' }}>Buscar</Buttom>
            </div>
        </SideBar>
    )
}

const SideBar = styled.div`
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
    position: absolute;
    left:0;
    top:0;
    color:white;
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 16px;
        display: flex;
        margin-top:20px;
        margin-bottom:40px;
        margin-left: 20px;
        text-align: center;
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


const Text = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 47px;
    color: #F8F0F0;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.75);
`

const Filter = styled.li`
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