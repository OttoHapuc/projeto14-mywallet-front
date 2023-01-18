import styled from "styled-components";
import colors from "../../providers/themeColors";
import fonts from "../../providers/fonts";

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
            <Link to="/login">Já tem uma conta? Entre agora!</Link>
        </Back>
    )
}

const Back = styled.main`
height: 97vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${porp => porp.colors.backColor};

h1{
    font-family: ${prop => prop.fonts.fontFamily.logo}
}
input{
    width: 326px;
    height: 58px;
    padding: 0 14px;
    border-radius: 5px;
    border: none;
    margin-bottom: 13px
}
button{
    width: 326px;
    height: 46px;    
    background-color: ${prop => prop.colors.buttonColor};
    border-radius: 5px;
    border: none;
}
`