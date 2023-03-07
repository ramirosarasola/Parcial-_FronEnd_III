import React from 'react'
import './Card.css'

const Card = (props) => {

  const style = {
    backgroundColor: props.favoriteColor,
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <div className='color'>
        <h4>Hola {props.name}</h4>
        <p>Sabemos que tu color favorito es:</p>
        <div className='colorDiv' style={style}><h4>{props.favoriteColor}</h4></div>
    </div>
  )
}

export default Card;
