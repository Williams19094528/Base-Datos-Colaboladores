import React, { useState } from "react";
import { v4 as generateUniqueId } from "uuid"; // Cambia el nombre de la función a generateUniqueId

const Formulario = ({ agregarColaborador }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Genera un nuevo ID único para el colaborador
    const id = generateUniqueId(); // Cambia el nombre de la función aquí

    // Validar que los campos no estén vacíos
    if (!nombre || !correo || !edad || !cargo || !telefono) {
      // Si hay campos vacíos, mostrar mensaje de error
      alert("Por favor completa todos los campos");
      return;
    }

    // Agregar el colaborador con el nuevo ID
    agregarColaborador({ id, nombre, correo, edad, cargo, telefono });

    // Limpiar los campos después de agregar el colaborador
    setNombre("");
    setCorreo("");
    setEdad("");
    setCargo("");
    setTelefono("");
  };

  return (
    <div className="formulario-container">
      {" "}
      {/* Contenedor para centrar el formulario */}
      <form onSubmit={handleSubmit} className="formulario">
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Correo:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div>
          <label>Edad:</label>
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div>
          <label>Cargo:</label>
          <input
            type="text"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <button type="submit">Agregar Colaborador</button>
      </form>
    </div>
  );
};

export default Formulario;
