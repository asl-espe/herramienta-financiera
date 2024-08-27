import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Calculadora from "./pages/Calculadora";
import Catalogo from "./pages/Catalogo";
import Home from "./pages/Home";
import Inventario from "./pages/Inventario";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/calculadora" element={<Calculadora />}></Route>
          <Route path="/inventario" element={<Inventario />}></Route>
          <Route path="/catalogo" element={<Catalogo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
