import { useEffect, useState } from "react";
import SideBarHome from "./SideBarHome";
import Header from "../../components/Header";
import api from "../../services/api";
import {Link} from "react-router-dom"
import axios from "axios"
import { Container, Products } from "./styles";

export default function HomePage() {
    const [ocult, setOcult] = useState(true)
    const [playersList, setPlayersList] = useState()
    const [param, setParam] = useState("")

    useEffect(() => {
        const promise = api.getPlayers(param);
        promise.then(res => setPlayersList(res.data))
        promise.catch(err => console.log(err.response.data));
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
                                <li key={p._id}>
                                    <div><img src={p.img} alt={p.name}/></div>
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
