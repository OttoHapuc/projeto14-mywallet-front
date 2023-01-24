import GlobalStyle from "./assets/css/GlobalStyled";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

import Login from "./components/login/login";
import SignUp from "./components/signUp/singUp";
import Home from "./components/home/home";
import NovaEntrada from "./components/entradaSaida/novaEntrada";
import NovaSaida from "./components/entradaSaida/novaSaida";

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">

      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUser={setUser}/>} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/home" element={<Home user={user}/>} />
          <Route path="/nova-entrada" element={<NovaEntrada user={user}/>} />
          <Route path="/nova-saida" element={<NovaSaida user={user}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
