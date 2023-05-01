import { FaRegArrowAltCircleRight, FaCheckSquare, FaRegArrowAltCircleDown } from "react-icons/fa";
import { FilterList, FiltersQuery } from "../../constants/FilterList";
import { Buttom } from "../SignUp/styled";
import { useContext, useState } from "react";
import UserData from "../../context/UserData";
import { Link } from "react-router-dom";
import { Filter, SideBar, Text } from "./styles";

export default function SideBarHome({ ocult, setParam }) {
    const [filter, setFilter] = useState([...FilterList])
    let newFilter = []
    FilterList.forEach((l) => newFilter.push([...l.values]))
    const [selectedFilter, setSelectedFilter] = useState([...newFilter])
    const { name } = useContext(UserData)

    function FilterSearch() {
        let word = "?"
        selectedFilter[0].filter((v, i) => v ? "" : word += `nationality=${FiltersQuery[0][i]}&`)
        selectedFilter[1].filter((v, i) => v ? "" : word += `position=${FiltersQuery[1][i]}&`)
        selectedFilter[2].filter((v, i) => v ? "" : word += `type=${FiltersQuery[2][i]}&`)
        selectedFilter[3].filter((v, i) => v ? "" : word += `category=${FiltersQuery[3][i]}&`)
        console.log(word.slice(0, -1))
        setParam(word.slice(0, -1))
    }

    return (
        <SideBar ocult={ocult}>
            <h1>{name ? <Text> Olá, {name} </Text> : <Link to={"/login"}> <Text> Comprar? <br /> Faça Login! </Text></Link>} </h1>
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
                }} style={{ width: '70px', fontSize: "18px" }}>Limpar</Buttom>
                <Buttom onClick={FilterSearch} style={{ width: '70px', fontSize: "18px" }}>Buscar</Buttom>
            </div>
        </SideBar>
    )
}
