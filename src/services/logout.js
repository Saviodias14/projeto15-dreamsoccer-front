
import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import UserData from "../context/UserData"


export function Logout() {

    const { token, setName, setToken } = useContext(UserData)
    const navigate = useNavigate()

    const config = { headers: { Authorization: `Bearer ${token}` } }

    return () => {
        axios.post(`${process.env.REACT_APP_URI_URL}/logout`, {}, config)
            .then(() => {
                setToken("")
                setName("")
                localStorage.clear()
                navigate("/")
            }
            )
            .catch((err) => console.log(err.response.data))
    }

}