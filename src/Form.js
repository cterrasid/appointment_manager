import React, { Fragment, useState } from "react";

//ESTE COMPONENTE RECOJE LOS DATOS DEL FORMULARIO
const Form = () => {
  const [person, setPerson] = useState({
    fullname: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setPerson({
      //Tomo una copia de lo que tenga en el objeto con el spread operator
      ...person,
      //Localizo el name de mi e.target y lo relaciono con lo que tengo en el objeto. Si son iguales, se agrega el value que pongo en el input
      [name]: value,
    });
  };

  const handleButtonClick=e=>{
    e.preventDefault();
    //Pasar la cita al componente App que contiene el state

    //Reiniciar el state, o sea, reinicia el formulario
  }

  return (
    <Fragment>
      <h2>Save Person</h2>
      <form>
        <label>Fullname</label>
        <input
          type="text"
          name="fullname"
          className="u-full-width"
          placeholder="Name of the person"
          onChange={handleInputChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          className="u-full-width"
          placeholder="Email of the person"
          onChange={handleInputChange}
        />

        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          type="tel"
          className="u-full-width"
          name="phone"
          onChange={handleInputChange}
        />

        <label htmlFor="comments">Comments</label>
        <textarea
          id="comments"
          className="u-full-width"
          name="comments"
          onChange={handleInputChange}
        />

        <button type="submit" className="button-primary u-full-width" onSubmit={handleButtonClick}>
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
