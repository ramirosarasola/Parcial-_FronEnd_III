import React from 'react'
import { useState } from 'react';
import Card from './components/Card';

const Form = () => {

    const [user, setUser] = useState({name: "", obraSocial:"", email:"", medico:""})

    // const [show, setShow] = useState(false);

    const handleSubmit = function(e){
        e.preventDefault();
        // validacion()
        console.log(user)

    }

    // const validacion = () => {
    //     if(user.name.length > 8 && user.medico !== ''){
    //         setShow(true);            
    //     }
    // }

  return (
    <>
         <form onSubmit={handleSubmit}>
            <label >Nombre: </label>
            <input type="text" value={user.name} onChange={(event)=>{ setUser({...user, name: event.target.value }) }}/>
            <label >Obra Social: </label>
            <input type="text" value={user.obraSocial} onChange={(event)=>{ setUser({...user, obraSocial: event.target.value }) }}/>
            <label >Email: </label>
            <input type="email" value={user.email} onChange={(event)=>{ setUser({...user, email: event.target.value }) }}/>

            <select name="" id="" value={user.medico} onChange={(event)=>{ setUser({...user, medico: event.target.value }) }}>
            <option value="">Seleccione</option>
            <option value="Odontologo">Odontologo</option>
            <option value="Dentista">Dentista</option>
            <option value="Cardiologo">Cardiologo</option>
            </select>

            <button>Enviar</button>

        </form>

        <Card name={user.name} medico={user.medico}/>

    </>

  )
}

export default Form;
