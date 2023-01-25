import colors from "../../providers/themeColors";
import fonts from "../../providers/fonts";
import Back from "../../assets/css/base";

import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../constext/valoresBase";
import axios from "axios";
export default function Home() {

    const {user} = useContext(UserContext);

    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate()
    const [balance, setBalance] = useState([]);
    useEffect(() => {
        axios.get(`http://${REACT_APP_API_URL}/home`, {headers:{user:user.name}})
            .then(res => {
                setBalance(res.data);
                console.log(res.data)
            })
            .catch(err => { console.log(err); console.log("vem daqui") });
    }, [])
    return (
        <Back colors={colors} fonts={fonts}>
            <div className="header">
                <div className="buttons">
                    <h2>Olá, {user.name}</h2>
                    <h2>icone de saida</h2>
                </div>
            </div>
            <div className="content">
                {balance.length > 0 ?
                    balance.map((valor, i) => (
                        <li key={i}>
                            <p><p>{valor.data}</p>{valor.description}</p>
                            <p>{valor.value}</p>
                        </li>)) : <p>Não há entradas ou saidas</p>
                }
            </div>
            <div className="buttons">
                <button onClick={()=> navigate("/nova-entrada") }>+ nova entrada</button>
                <button onClick={()=> navigate("/nova-saida") }>- nova saída</button>
            </div>
        </Back>
    )
}
