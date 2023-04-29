import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import colors from "../../constants/colors";
import ColorPicker from "./ColorPicker";
import { Div, Main, Piece } from "./style";

export default function DescriptionPage(){
    const [player, setPlayer] = useState("");
    const [color, setColor] = useState("#b87333");
    const [quant, setQuant] = useState(1);
    const {id} = useParams();

    useEffect(() => {
        const promise = api.getPlayerById(id);
        promise.then( response => { 
            setPlayer(response.data);
            setColor(colors[response.data.type]);
        });
        promise.catch( (error) => console.log(error.response.data) );
    }, [])

    return(
        <>
            <Header isDescriptionPage="true" />
            <Main type={player.type}>
                <div>
                    <img src={player.img} alt={player.name}/>
                    <div>
                        <h2>Informações pessoais:</h2>
                        <ul>
                            <li>Posição: {player.position} </li>
                            <li>Idade: {player.age}</li>
                            <li>Data de Nasc.: {player.bday}</li>
                            <li>Tipo: {player.type}</li>
                        </ul>
                    </div>
                </div>
                <Div>
                    <h1>{player.name}</h1>
                    <Piece color={color}>
                        <img src={player.img} alt={player.name}/>
                    </Piece>
                    <div>
                        <h2>
                            Comprar
                            <span>R${player.price},00</span>
                        </h2>
                        <label>Quantidade: </label>
                        <select name="quantity" value={quant} onChange={(e) => setQuant(e.target.value)}>
                            <option value="1">1 </option>
                            <option value="2">2 </option>
                            <option value="3">3 </option>
                            <option value="4">4 </option>
                            <option value="5">5 </option>
                            <option value="6">6 </option>
                            <option value="7">7 </option>
                            <option value="8">8 </option>
                            <option value="9">9 </option>
                            <option value="10">10 </option>
                        </select>
                        <ColorPicker color={color} setColor={setColor}/>
                    </div>
                    <button>Adicionar ao carrinho</button>
                </Div>
            </Main>
        </>
    )
}
