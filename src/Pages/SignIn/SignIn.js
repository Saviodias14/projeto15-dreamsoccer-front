import { Alert, Buttom, DataContainer, Entradas, Input, SignUpContainer, Titulo } from "../SignUp/styled"
import { ThreeDots } from "react-loader-spinner"
import { useContext, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import UserData from "../../context/UserData"


export default function SignIn() {


    const [disableButton, setDisableButton] = useState(false)
    const [form, setForm] = useState({ email: "", password: "" })
    const [senhaIncorreta, setSenhaIncorreta] = useState(false)
    const navigate = useNavigate()

    const {setToken, setName} = useContext(UserData)

    /* useEffect(() => {
        if (!token || !name) return navigate("/")
    }, [token, name, navigate])
 */
    function handleForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    function signin(event) {
        event.preventDefault()
        const body = { ...form }
        setDisableButton(true)

        console.log(body)

        axios.post(`${process.env.REACT_APP_API_URL}login`, body)
            .then(res => { console.log(res); 
                            setToken(res.data.token)
                            setName(res.data.userName)
                            localStorage.setItem("token", res.data.token)
                            localStorage.setItem("userName", res.data.userName)
                            navigate("/") })
            .catch((err) => { console.log(err.response.data); setDisableButton(false); setSenhaIncorreta(true) })
    }

    return (

        <>
            <Alert senhaIncorreta={senhaIncorreta}>
                Ocorreu um erro ao cadastrar. Senha e Confirme sua Senha Divergem
                <Buttom onClick={() => setSenhaIncorreta(false)}> Ok </Buttom>
            </Alert>

            <form onSubmit={signin}>

                <SignUpContainer>

                    <DataContainer>
                        <Titulo>
                        BEM VINDO AO DREAMSOCCER
                        </Titulo>


                        <Entradas>

                            <Input placeholder="Email"
                                type="email"
                                name={"email"}
                                value={form.email}
                                disabled={disableButton}
                                onChange={handleForm}
                                required />

                            <Input placeholder="Senha"
                                type="password"
                                name={"password"}
                                value={form.password}
                                disabled={disableButton}
                                onChange={handleForm}
                                required />

                        </Entradas>

                        <Buttom type="submit">
                            {disableButton ? <ThreeDots color="#08246C" height={80} width={80} timeout={3000} />
                                : "Entrar"}
                        </Buttom>

                        <Link to={"/cadastro"}>
                        Não possui Login? Cadastre-se
                        </Link>

                    </DataContainer>


                </SignUpContainer >
            </form>


        </>


    )
}