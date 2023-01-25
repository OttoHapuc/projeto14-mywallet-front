import colors from "../../providers/themeColors";
import fonts from "../../providers/fonts";
import Back from "../../assets/css/base";

import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../constext/valoresBase";
import axios from "axios";
export default function Home() {

    const { user } = useContext(UserContext);

    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate()
    const [balance, setBalance] = useState([]);
    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/home`, { headers: { user: user.name } })
            .then(res => {
                setBalance(res.data);
            })
            .catch(err => { console.log(err); console.log("vem daqui") });
    }, [])
    let cont = 0;
    return (
        <Back colors={colors} fonts={fonts}>
            <div className="header">
                <div className="titt">
                    <h2>Olá, {user.name}</h2>
                    <ion-icon name="exit-outline" onClick={()=>navigate("/")}></ion-icon>
                </div>
            </div>
            <div className="content" th={balance.length}>
                <div>
                    {balance.length > 0 ?
                        balance.map((valor, i) => {
                            if (valor.type === "entrada") {
                                cont += Number(valor.value)
                            } else { cont -= Number(valor.value) }
                            return (
                                <li key={i}>
                                    <p style={{ color: "black" }}><p style={{ color: "black" }}>{valor.data}</p>{valor.description}</p>
                                    <p style={valor.type === "entrada" ? { color: "#03AC00" } : { color: "#C70000" }}>{valor.value}</p>
                                </li>)
                        }) : <p style={{ color: "#868686" }}>Não há entradas ou saidas</p>
                    }
                </div>
                {balance.length > 0 && <div className="saldo"><p style={{ color: "black" }}>Saldo</p><p style={cont > 0 ? { color: "#03AC00" } : { color: "#C70000" }}>R$ {cont}</p></div>}
            </div>
            <div className="buttons">
                <button onClick={() => navigate("/nova-entrada")}><p><ion-icon name="add-circle-outline"></ion-icon></p><br/><br/><p>Nova entrada</p></button>
                <button onClick={() => navigate("/nova-saida")}><p><ion-icon name="remove-circle-outline"></ion-icon></p><br/><br/><p>Nova saida</p></button>
            </div>
        </Back>
    )
}
