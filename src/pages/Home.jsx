import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";

export default function HomePage() {
  const [estadisticas, setEstadisticas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [nuevaEstadistica, setNuevaEstadistica] = useState({
    descripcion: "",
    valor: "",
  });

  useEffect(() => {
    axios.get("http://localhost:3001/api/estadisticas").then((response) => {
      setEstadisticas(response.data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevaEstadistica({ ...nuevaEstadistica, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/estadisticas", nuevaEstadistica)
      .then((response) => {
        setEstadisticas([...estadisticas, response.data]);
        setNuevaEstadistica({
          descripcion: "",
          valor: "",
        });
        setShowModal(false);
      });
  };

  return (
    <div className="homepage-container">
      <h1>Panel de Estadísticas</h1>
      <button onClick={() => setShowModal(true)}>Agregar Estadística</button>
      <table>
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {estadisticas.map((item, index) => (
            <tr key={index}>
              <td>{item.descripcion}</td>
              <td>{item.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <label>Descripción:</label>
              <input
                type="text"
                name="descripcion"
                value={nuevaEstadistica.descripcion}
                onChange={handleChange}
                required
              />
              <label>Valor:</label>
              <input
                type="number"
                name="valor"
                value={nuevaEstadistica.valor}
                onChange={handleChange}
                required
              />
              <button type="submit">Agregar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
