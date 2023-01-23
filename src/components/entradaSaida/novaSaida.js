import Back from "../../assets/css/base";
import colors from "../../providers/themeColors";
import fonts from "../../providers/fonts";

export default function NovaSaida() {
    return (
        <Back colors={colors} fonts={fonts}>
            <div className="header">
                <h2>Olá, Fulano</h2>
            </div>
            <input type="number" placeholder="Valor" />
            <input type="text" placeholder="Descrição" />
            <button>Salvar saida</button>
        </Back>
    )
}