import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/Home";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import UserData from "./context/UserData";
import { useState } from "react";

function App() {
 
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [name, setName] = useState(localStorage.getItem("userName"))
 
  return (

    <UserData.Provider value = {{token, setToken, name, setName}} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={< SignUp />} />
          <Route path="/Login" element={< SignIn />} />
        </Routes>
      </BrowserRouter>
    </UserData.Provider>
  );
}

export default App;
