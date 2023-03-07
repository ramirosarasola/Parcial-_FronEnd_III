import React from 'react'

const Card = ({name, medico}) => {

    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

  return (
    <div>
        <h4>Informacion del Turno</h4>
        <p>El usuario {name} tiene turno con: {medico}</p>
        <p>Fecha: {`${day+12}/${month+1}/${year}`}</p>
    </div>
  )
}

export default Card;
