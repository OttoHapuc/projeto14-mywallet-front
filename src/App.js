import GlobalStyle from "./providers/GlobalStyled";
import Login from "./components/login/login"
import { Routes, Route, BrowserRouter } from "react-router-dom";

import SignUp from "./components/signUp/singUp";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">

      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
