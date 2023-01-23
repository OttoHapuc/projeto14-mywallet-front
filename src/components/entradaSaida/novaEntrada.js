import Back from "../../assets/css/base";
import colors from "../../providers/themeColors";
import fonts from "../../providers/fonts";

import { useState } from "react";
import axios from "axios";
export default function NovaEntrada() {

    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")

    function saveInput(event) {
        event.preventDefault();
    }
    return (
        <Back colors={colors} fonts={fonts}>
            <div className="header">
                <h2>Olá, Fulano</h2>
            </div>
            <form onSubmit={saveInput}>
                <input type="number" placeholder="Valor" value={value} onChange={e => setValue(e.target.value)}/>
                <input type="text" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
                <button type="submit">Salvar entrada</button>
            </form>
        </Back>
    )
}