import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

function createConfig(token){
    return { headers: { Authorization: `Bearer ${token}` } };
}

function getPlayerById(id){
    const promise = axios.get(`${BASE_URL}/players/${id}`);
    return promise;
}

function login(body){
    const promise = axios.post(`${BASE_URL}/login`, body);
    return promise;
}

function signUp(body){
    const promise = axios.post(`${BASE_URL}/cadastro`, body);
    return promise;
}

function logout(token){
    const config = createConfig(token);
    const promise = axios.post(`${BASE_URL}/logout`,{}, config);
    return promise;
}

function getPlayers(param){
    const promise = axios.get(`${BASE_URL}/players${param}`);
    return promise;
}

const api = {
    login,
    signUp,
    logout,
    getPlayers,
    getPlayerById,
}

export default api;