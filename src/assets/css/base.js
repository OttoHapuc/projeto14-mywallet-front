import styled from "styled-components";

const Back = styled.main`
height: 97vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${porp => porp.colors.backColor};

form{
    display: flex;
    flex-direction: column;
}
.header{
    width: 100%;
    padding: 8px 24px ;
    ion-icon{
        font-size: 26px;
        color: white;
    }
}

h1{
    margin: 15px;
    font-size: 32px;
    color: white;
    font-family: ${prop => prop.fonts.fontFamily.logo}
}
p,a,Link, button, input{
    color: white;
    text-decoration:none;
    font-family: ${prop => prop.fonts.fontFamily.commonsText};
    font-size: 20px;
}
input{
    color:black;
    width: 326px;
    height: 58px;
    padding: 0 14px;
    border-radius: 5px;
    border: none;
    margin-bottom: 13px
}
button{
    margin-top: 15px;
    width: 326px;
    height: 46px;    
    background-color: ${prop => prop.colors.buttonColor};
    border-radius: 5px;
    border: none;
    font-weight: bold;
}
.titt{
    display: flex;
    justify-content: space-between;
}

h2{
    color:white;
    font-size: 26px;
    font-family: ${prop => prop.fonts.fontFamily.titles};
}
.content{
    width: 326px;
    height: 446px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    border-radius: 5px;
    padding: 14px;

    p{
        display: flex;
    }
    .saldo {
        display: flex;
        justify-content: space-between;
    }
    li{
        display: flex;
        justify-content: space-between;
    }
    p > p{
        margin-right: 10px;
    }
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