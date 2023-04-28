import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/Home";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import DescriptionPage from "./Pages/DescriptionPage/DescriptionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cadastro" element={< SignUp/>}/>
        <Route path="/Login" element={< SignIn/>}/>
        <Route path="/descricao/:id" element={ <DescriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
