import { Alert, Buttom, DataContainer, Entradas, Input, SignUpContainer, Titulo } from "./styled"
import { ThreeDots } from "react-loader-spinner"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../../services/api"

export default function SignUp() {

    const [disableButton, setDisableButton] = useState(false)
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" })
    const [senhaIncorreta, setSenhaIncorreta] = useState(false)
    const navigate = useNavigate()

    /* const {token, name} = useContext(UserData) */
    /* useEffect(() => {
        if (!token || !name) return navigate("/")
    }, [token, name, navigate]) */
    
    function handleForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    function signup(event) {
        event.preventDefault()
        setDisableButton(true)

        if (form.password !== form.confirmPassword) {
            setSenhaIncorreta(true) 
            setDisableButton(false)
            return;
        }

        delete form.confirmPassword
        const body = { ...form }

        const promise = api.signUp(body);
        promise.then( res =>{
            navigate("/login");
        })
        promise.catch((err) =>{
            setDisableButton(false)
        });
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
                            DREAMSOCCER
                        </Titulo>

                        <Entradas>
                            <Input 
                                placeholder="Nome"
                                type="text"
                                name={"name"}
                                value={form.name}
                                disabled={disableButton}
                                onChange={handleForm}
                                required 
                            />

                            <Input 
                                placeholder="Email"
                                type="email"
                                name={"email"}
                                value={form.email}
                                disabled={disableButton}
                                onChange={handleForm}
                                required 
                            />

                            <Input 
                                placeholder="Senha"
                                type="password"
                                name={"password"}
                                value={form.password}
                                disabled={disableButton}
                                onChange={handleForm}
                                required 
                            />

                            <Input 
                                placeholder="Confirme sua Senha"
                                type="password"
                                name={"confirmPassword"}
                                value={form.confirmPassword}
                                disabled={disableButton}
                                onChange={handleForm}
                                senhaIncorreta={senhaIncorreta}
                            />
                        </Entradas>

                        <Buttom type="submit">
                            {disableButton ? <ThreeDots color="#08246C" height={80} width={80} timeout={3000} />
                                : "Cadastrar"}
                        </Buttom>

                        <Link to={"/login"}>
                            Possui Cadastro? Faça Login
                        </Link>

                    </DataContainer>
                </SignUpContainer >
            </form>
        </>
    )
}
