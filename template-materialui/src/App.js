import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Rota para listar tarefas */}
          <Route path="/" element={<ListarTarefa />} />
          {/* Rota para a página de login */}
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
