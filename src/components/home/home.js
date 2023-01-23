import colors from "../../providers/themeColors";
import fonts from "../../providers/fonts";
import Back from "../../assets/css/base"

import { useEffect } from "react";
export default function Home({user}) {

    useEffect(()=>{
        
    },[])
    return (
        <Back colors={colors} fonts={fonts}>
            <div className="header">
                <div className="buttons">
                    <h2>Olá, Fulano</h2>
                    <h2>icone de saida</h2>
                </div>
            </div>
            <div className="content"></div>
            <div className="buttons">
                <button>+ nova entrada</button>
                <button>- nova saída</button>
            </div>
        </Back>
    )
}
