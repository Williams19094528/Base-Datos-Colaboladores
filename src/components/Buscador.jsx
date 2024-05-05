import React, { useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes para definir los tipos de las props

const Buscador = ({ colaboradores, setFiltroColaboradores }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleBusqueda = (e) => {
    const valorBusqueda = e.target.value;
    setBusqueda(valorBusqueda);

    const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
      return Object.values(colaborador).some((value) =>
        value.toLowerCase().includes(valorBusqueda.toLowerCase())
      );
    });

    setFiltroColaboradores(colaboradoresFiltrados);
  };

  return (
    <div>
      <h2>Buscar Colaboradores</h2>
      <input
        type="text"
        value={busqueda}
        onChange={handleBusqueda}
        placeholder="Buscar..."
      />
    </div>
  );
};

Buscador.propTypes = {
  colaboradores: PropTypes.array.isRequired,
  setFiltroColaboradores: PropTypes.func.isRequired,
};

export default Buscador;
