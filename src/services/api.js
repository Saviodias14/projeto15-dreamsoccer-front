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

function getCarrinho(token){
    const config = createConfig(token);
    const promise = axios.get(`${BASE_URL}/cart`, config);
    return promise;
}

function putCarrinho(token,body,id){
    const config = createConfig(token);
    const promise = axios.put(`${BASE_URL}/cart`, body, config);
    return promise;
}

function deleteCarrinho(token, body){
    const config = createConfig(token);
    console.log(config)
    const promise = axios.delete(`${BASE_URL}/cart`, body, config);
    return promise;
}
function addItem(id, token, body){
    const config = createConfig(token);
    const promise = axios.post(`${BASE_URL}/cart/${id}`, body, config);
    return promise;
}

const api = {
    login,
    signUp,
    logout,
    getPlayers,
    getPlayerById,
    getCarrinho,
    putCarrinho,
    deleteCarrinho,
    addItem,
}

export default api;