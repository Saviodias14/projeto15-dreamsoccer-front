import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import colors from "../../constants/colors";
import ColorPicker from "./ColorPicker";
import { Div, Main, Piece } from "./style";
import { useContext } from "react";
import UserData from "../../context/UserData";
import AddItem from "./AddItem";
import { ThreeDots } from "react-loader-spinner";

export default function DescriptionPage(){
    const [player, setPlayer] = useState("");
    const [color, setColor] = useState("#b87333");
    const [amount, setAmount] = useState(1);
    const {id} = useParams();
    const { token } = useContext(UserData);
    const [showMessage, setShowMessage] = useState(false);
    const [disableButton, setDisableButton] = useState(false)

    useEffect(() => {
        const promise = api.getPlayerById(id);
        promise.then( response => { 
            setPlayer(response.data);
            setColor(colors[response.data.type]);
        });
        promise.catch( (error) => console.log(error.response.data) );
    }, [])

    function addPlayer(){
        setDisableButton(true);
        if(token){
            const body = {amount, color, number: player.number }
            const promise = api.addItem(id, token, body);
            promise.then( () => {
                setShowMessage(true);
            })
            promise.catch((error) => {
                setDisableButton(false); 
                console.log(error.response.data);
            });
        } else {
            setDisableButton(false);
            alert("Por favor, faça login para adicionar o item ao carrinho!");
        }
    }

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
                        <select name="quantity" value={amount} onChange={(e) => setAmount(e.target.value)}>
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
                    <button onClick={addPlayer}>
                        {disableButton ? <ThreeDots color="#08246C" height={80} width={80} timeout={3000} />
                                : "Adicionar ao carrinho"}
                    </button>
                    <AddItem showMessage={showMessage} setShowMessage={setShowMessage} setDisableButton={setDisableButton} />
                </Div>
            </Main>
        </>
    )
}
