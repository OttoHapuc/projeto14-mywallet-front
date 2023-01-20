import styled from "styled-components";
import colors from "../../providers/themeColors";
import fonts from "../../providers/fonts";

export default function Home() {
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
                <button></button>
                <button></button>
            </div>
        </Back>
    )
}

const Back = styled.main`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${porp => porp.colors.backColor};

h2{
    font-family: ${prop => prop.fonts.fontFamily.logo}
}
.content{
    width: 326px;
    height: 446px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    border-radius: 5px;
}
.buttons{
    display: flex;
    flex-direction: row;
}
button{
    width: 155px;
    height: 114px;    
    background-color: ${prop => prop.colors.buttonColor};
    border-radius: 5px;
    border: none;
    margin: 7px;

    display: flex;
    flex-direction: column;
}
`