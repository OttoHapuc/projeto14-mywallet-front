import colors from "../../providers/themeColors";
import fonts from "../../providers/fonts";
import Back from "../../assets/css/base"

import {Link} from "react-router-dom";
export default function Login(){
    return(
        <Back colors={colors} fonts={fonts}>
            <h1>MyWallet</h1>
            <input type="text" placeholder="E-mail" />
            <input type="password" placeholder="Senha"/>
            <button>Entrar</button>
            <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
        </Back>
    )
}

