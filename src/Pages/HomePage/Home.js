import { useEffect, useState } from "react";
import SideBarHome from "./SideBarHome";
import Header from "../../components/Header";
import {Link} from "react-router-dom"
import axios from "axios"
import { Container, Products } from "./styles";

export default function HomePage() {
    const [ocult, setOcult] = useState(true)
    const [playersList, setPlayersList] = useState()
    const [param, setParam] = useState("")
    const url = `${process.env.REACT_APP_API_URL}/players${param}`
    console.log(url)

    useEffect(() => {
        axios.get(url)
            .then(res => setPlayersList(res.data))
            .catch(err => alert(err.response.data))
    }, [param])
    if (!playersList) {
        return (
            <>
                <Header ocult={ocult} setOcult={setOcult} />
                <Container>
                    <SideBarHome ocult={ocult} setParam={setParam} param={param} />
                    <Products ocult={ocult}>
                    </Products>
                </Container>
            </>
        )
    }

    return (
        <>
            <Header ocult={ocult} setOcult={setOcult} />
            <Container>
                <SideBarHome ocult={ocult} setParam={setParam} param={param} />
                <Products ocult={ocult}>
                    <ul>
                        {playersList.map((p) =>
                            <Link to={`/descricao/${p._id}`}>
                                <li>
                                    <div><img src={p.img} /></div>
                                    <h1>Botão personalizado do {p.name}</h1>
                                    <p>R$ {p.price},00</p>
                                </li>
                            </Link>
                        )}
                    </ul>
                </Products>
            </Container>
        </>
    )
}