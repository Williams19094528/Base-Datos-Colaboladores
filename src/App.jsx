import React, { useState } from "react";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Alert from "./components/Alert";
import Buscador from "./components/Buscador";
import { BaseColaboradores } from "./BaseColaboradores";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState(null);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
    setAlerta("Colaborador agregado exitosamente");

    setTimeout(() => {
      setAlerta(null);
    }, 3000);
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(nuevosColaboradores);
  };

  const filtrarColaboradores = (filtro) => {};

  return (
    <div className="App">
      <Buscador
        colaboradores={colaboradores}
        setFiltroColaboradores={filtrarColaboradores}
      />
      <Listado
        colaboradores={colaboradores}
        eliminarColaborador={eliminarColaborador}
      />
      <Formulario agregarColaborador={agregarColaborador} />
      <Alert mensaje={alerta} />
    </div>
  );
}

export default App;
