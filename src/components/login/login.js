import colors from "../../providers/themeColors";
import fonts from "../../providers/fonts";
import Back from "../../assets/css/base"

import {Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Login(){

    const[userEmail, setUserEmail] = useState("");
	const[password, setPassword] = useState("");

    function login(event){
        event.preventDefault();
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

