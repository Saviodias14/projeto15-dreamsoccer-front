import { useEffect, useState } from "react";
import SideBarHome from "./SideBarHome";
import Header from "../../components/Header";
import api from "../../services/api";
import { Container, Products } from "./styles";
import Player from "../../components/Player";

export default function HomePage() {
    const [ocult, setOcult] = useState(true)
    const [playersList, setPlayersList] = useState()
    const [param, setParam] = useState("")

    useEffect(() => {
        const promise = api.getPlayers(param);
        promise.then(res => { console.log(res.data); setPlayersList(res.data) })
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
                        {playersList.map((p) => <li>
                            <Player key={p._id}
                                    _id={p._id}
                                    imagem={p.img}
                                    name={p.name}
                                    price={p.price}
                                    type={p.type}/>
                                    
                        </li>
                        )}
                    </ul>
                </Products>
            </Container>
        </>
    )
}
