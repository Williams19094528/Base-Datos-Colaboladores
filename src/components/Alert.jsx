import React from "react";
import PropTypes from "prop-types"; // Importa PropTypes

const Alert = ({ mensaje }) => {
  return mensaje ? <div className="alert">{mensaje}</div> : null;
};

Alert.propTypes = {
  mensaje: PropTypes.string,
};

export default Alert;
