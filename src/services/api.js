import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

//Funções para fazer as requisições. Retorna uma promise
function getPlayerById(id){
    const promise = axios.get(`${BASE_URL}/description/${id}`);
    return promise;
}

//Coloca o nome da função nesse objeto para exportar
const api = {
    getPlayerById,
}

export default api;