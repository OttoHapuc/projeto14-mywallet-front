import styled from "styled-components";

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
}

`

export default Back;