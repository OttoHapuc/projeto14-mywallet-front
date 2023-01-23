import colors from "../../providers/themeColors";
import fonts from "../../providers/fonts";
import Back from "../../assets/css/base"

import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function SignUp() {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function signUp(event) {
        event.preventDefault();
    }
    return (
        <Back colors={colors} fonts={fonts}>
            <h1>MyWallet</h1>
            <form onSubmit={signUp}>
                <input type="text" placeholder="Nome" value={userName} onChange={e => setUserName(e.target.value)} />
                <input type="email" placeholder="E-mail" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirme a senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
        </Back>
    )
}