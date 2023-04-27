import { FaRegArrowAltCircleRight, FaCheckSquare, FaRegArrowAltCircleDown } from "react-icons/fa";
import FilterList from "../../Constants/FilterList";
import { useState } from "react";
import styled from "styled-components";

export default function SideBarHome({ocult}) {
    const [filter, setFilter] = useState([...FilterList])
    let newFilter =[]
    FilterList.forEach((l)=>newFilter.push([...l.values]))
    const [selectedFilter, setSelectedFilter] = useState([...newFilter])
    return (
        <SideBar ocult={ocult}>
            <h1>Olá, fulano!</h1>
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
}
li{
    display: flex;
    flex-direction:column;
    margin-bottom: 20px;
}
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