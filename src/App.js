import GlobalStyle from "./assets/css/GlobalStyled";
import Login from "./components/login/login"
import { Routes, Route, BrowserRouter } from "react-router-dom";

import SignUp from "./components/signUp/singUp";
import Home from "./components/home/home";
import NovaEntrada from "./components/entradaSaida/novaEntrada";
import NovaSaida from "./components/entradaSaida/novaSaida";

function App() {
  return (
    <div className="App">

      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nova-entrada" element={<NovaEntrada />} />
          <Route path="/nova-saida" element={<NovaSaida />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
