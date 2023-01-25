import GlobalStyle from "./assets/css/GlobalStyled";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import UserContext from "./constext/valoresBase"

import Login from "./components/login/login";
import SignUp from "./components/signUp/singUp";
import Home from "./components/home/home";
import NovaEntrada from "./components/entradaSaida/novaEntrada";
import NovaSaida from "./components/entradaSaida/novaSaida";

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/nova-entrada" element={<NovaEntrada />} />
            <Route path="nova-saida" element={<NovaSaida />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
