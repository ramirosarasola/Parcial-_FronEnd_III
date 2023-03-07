import React from "react";
import { useState } from "react";
import Card from "./Card";
import './Form.css';

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    favoriteColor: "",
  });

  const [show, setShow] = useState(false);

  const handleSubmit = function (e) {
    e.preventDefault();
    validacion()
    console.log(user);
  };

  const validacion = () => {
    console.log(user.favoriteColor.length)
    console.log(user.name.length)
    let trimeName = user.name.trim()

    if (trimeName.length > 6 && user.favoriteColor.length > 2) {
      setShow(true);
      
    }else{
      alert('Por favor chequea que la información sea correcta');
    }
  };

  return (
    <>  

      <h1>Choose Your Favorite Color</h1>

        <form onSubmit={handleSubmit}>
          <label>Input your Complete Name: </label>
          <input
            type="text"
            value={user.name}
            onChange={(event) => {
              setUser({ ...user, name: event.target.value });
            }}
          />
          <label>Input your Favorite Color: </label>
          <input
            type="text"
            value={user.favoriteColor}
            onChange={(event) => {
              console.log(event.target.value)
              setUser({ ...user, favoriteColor: event.target.value });
            }}
          />
          <button>Send</button>
        </form>


      {show && (
        <Card name={user.name} favoriteColor={user.favoriteColor} />
      )}


    </>
  );
};

export default Form;
