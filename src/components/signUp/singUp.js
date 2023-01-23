import colors from "../../providers/themeColors";
import fonts from "../../providers/fonts";
import Back from "../../assets/css/base"

import { Link } from "react-router-dom";
export default function SignUp(){
    return(
        <Back colors={colors} fonts={fonts}>
            <h1>MyWallet</h1>
            <input type="text" placeholder="Nome"/>
            <input type="text" placeholder="E-mail"/>
            <input type="password" placeholder="Senha"/>
            <input type="password" placeholder="Confirme a senha"/>
            <button></button>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
        </Back>
    )
}