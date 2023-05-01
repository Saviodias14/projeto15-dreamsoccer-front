import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/Home";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import DescriptionPage from "./Pages/DescriptionPage/DescriptionPage";
import UserData from "./context/UserData";
import { useState } from "react";
import CarrinhoPage from "./Pages/CarrinhoPage/CarrinhoPage";
import Finalize from "./Pages/FinalizePage/Finalize";

function App() {

  const [token, setToken] = useState(localStorage.getItem("token"))
  const [name, setName] = useState(localStorage.getItem("userName"))
  const [totalCarrinho, setTotalCarrinho] = useState(0)
  const [dadosCarrinho, setDadosCarrinho] = useState([])
  const [idPlayer, setIdPlayer] = useState("")

  return (

    <UserData.Provider value={{
      token, setToken,
      name, setName,
      totalCarrinho, setTotalCarrinho,
      dadosCarrinho, setDadosCarrinho,
      idPlayer, setIdPlayer
    }} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={< SignUp />} />
          <Route path="/Login" element={< SignIn />} />
          <Route path="/descricao/:id" element={<DescriptionPage />} />
          <Route path="/carrinho" element={<CarrinhoPage />} />
          <Route path="/finalizar" element={<Finalize />} />
        </Routes>

      </BrowserRouter>
    </UserData.Provider>
  );
}

export default App;
