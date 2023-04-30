import { useContext, useEffect, useState } from "react";
import SideBarHome from "./SideBarHome";
import Header from "../../components/Header";
import api from "../../services/api";
import { Container, Products } from "./styles";
import Player from "../../components/Player";
import UserData from "../../context/UserData";

export default function HomePage() {
    const [ocult, setOcult] = useState(true)
    const [playersList, setPlayersList] = useState()
    const [param, setParam] = useState("")

    const {token, dadosCarrinho ,setDadosCarrinho, setTotalCarrinho} = useContext(UserData)

    useEffect(() => {
        const promise = api.getPlayers(param);
        promise.then(res => { console.log(res.data); setPlayersList(res.data) })
        promise.catch(err => console.log(err.response.data));

        const promiseCarrinho = api.getCarrinho(token)
        promiseCarrinho.then(res => { setDadosCarrinho(res.data);  })
        promiseCarrinho.catch(err => console.log(err))

}, [param, setDadosCarrinho, token])


useEffect(()=>{
    let quantidade = 0
    dadosCarrinho.forEach(item => {quantidade = quantidade + item.amount})
    setTotalCarrinho(quantidade)
},[setTotalCarrinho,dadosCarrinho])


if (!playersList) {
    return (
        <>
            <Header ocult={ocult} setOcult={setOcult}/>
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
                            type={p.type} />

                    </li>
                    )}
                </ul>
            </Products>
        </Container>
    </>
)
}
