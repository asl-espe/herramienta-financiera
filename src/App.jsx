import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculadora from "./pages/Calculadora";
import Inventario from "./pages/Inventario";
import Catalogo from "./pages/Catalogo";
import "./App.css";

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
