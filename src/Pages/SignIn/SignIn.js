import { Alert, Buttom, DataContainer, Entradas, Input, SignUpContainer, Titulo } from "../SignUp/styled"
import { ThreeDots } from "react-loader-spinner"
import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"


export default function SignIn() {

    const [disableButton, setDisableButton] = useState(false)
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" })
    const [senhaIncorreta, setSenhaIncorreta] = useState(false)
    const navigate = useNavigate()

    function handleForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    function signup(event) {
        event.preventDefault()
        const body = { ...form }
        setDisableButton(true)
        delete form.confirmPassword

        console.log(body)


        if (form.senha !== form.confirmPassword) setSenhaIncorreta(true)

        /* axios.post(`${process.env.REACT_APP_URI_URL}/cadastro`, body)
            .then(res => { console.log(res); navigate("/") })
            .catch((err) => { console.log(err.response.data); setDisableButton(false) }) */
    }

    return (

        <>
            <Alert senhaIncorreta={senhaIncorreta}>
                Ocorreu um erro ao cadastrar. Senha e Confirme sua Senha Divergem
                <Buttom onClick={() => setSenhaIncorreta(false)}> Ok </Buttom>
            </Alert>

            <form onSubmit={signup}>

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