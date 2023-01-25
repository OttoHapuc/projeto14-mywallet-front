import colors from "../../providers/themeColors";
import fonts from "../../providers/fonts";
import Back from "../../assets/css/base"

import {Link, useNavigate} from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../../constext/valoresBase";
import axios from "axios";
export default function Login(){

    const {setUser} = useContext(UserContext);
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const[userEmail, setUserEmail] = useState("");
	const[password, setPassword] = useState("");

    async function login(event){
        event.preventDefault();
        await axios.post(`${REACT_APP_API_URL}`,{
            email: userEmail,
            password: password
        })
            .then((element) => {
                setUser(element.data);
                navigate("/home")
            })
            .catch ((error) => { alert("erro 401 " + error.response.data) });
    }
    return(
        <Back colors={colors} fonts={fonts}>
            <h1>MyWallet</h1>
            <form onSubmit={login}>
            <input type="email" placeholder="E-mail" value={userEmail} onChange={e => setUserEmail(e.target.value)}/>
            <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
            <button type="submit">Entrar</button>
            </form>
            <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
        </Back>
    )
}

