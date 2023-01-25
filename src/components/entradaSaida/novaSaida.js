import Back from "../../assets/css/base";
import colors from "../../providers/themeColors";
import fonts from "../../providers/fonts";

import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import UserContext from "../../constext/valoresBase";
import axios from "axios";
export default function NovaSaida() {

    const {user} = useContext(UserContext);
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const isOutput = "saida";

    async function saveOutput(event) {
        event.preventDefault();
        const obj = {
            value,
            description,
            type: isOutput
        };
        await axios.post(`${REACT_APP_API_URL}/nova-entrada-saida`,obj,{headers:{user:user.name}})
        .then(res => {
            console.log(res);
            navigate("/home")
        })
        .catch(err => {console.log(err)});
    }
    return (
        <Back colors={colors} fonts={fonts}>
            <div className="header">
                <h2>Olá, Fulano</h2>
            </div>
            <form onSubmit={saveOutput}>
                <input type="number" placeholder="Valor" value={value} onChange={e => setValue(e.target.value)} />
                <input type="text" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
                <button type="submit">Salvar saida</button>
            </form>
        </Back>
    )
}
