import styled from "styled-components";
import colors from "../../providers/themeColors";
import fonts from "../../providers/fonts";

export default function Home() {
    return (
        <Back colors={colors} fonts={fonts}>
            <div className="header">
                <h2>Olá, Fulano</h2>
                <h2>icone de saida</h2>
            </div>
            <div className="content"></div>
            <div className="buttons">
                <button></button>
                <button></button>
            </div>
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

h2{
    font-family: ${prop => prop.fonts.fontFamily.logo}
}

button{
    width: 326px;
    height: 46px;    
    background-color: ${prop => prop.colors.buttonColor};
    border-radius: 5px;
    border: none;
}
`