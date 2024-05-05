import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

const Listado = ({ colaboradores, eliminarColaborador }) => {
  const handleEliminarColaborador = (id) => {
    eliminarColaborador(id);
  };

  return (
    <div className="text-center">
      <h1>Listado de Colaboradores</h1>
      <Table className="table-dark" striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Acciones</th> {/* Nueva columna para el botón de eliminación */}
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.id}</td>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td>
                <button
                  onClick={() => handleEliminarColaborador(colaborador.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

Listado.propTypes = {
  colaboradores: PropTypes.array.isRequired,
  eliminarColaborador: PropTypes.func.isRequired,
};

export default Listado;
