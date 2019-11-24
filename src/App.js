import React, { useState, Fragment } from "react";
import Form from "./Form";

const App = () => {
  //1. En App, creo el state de una cita, donde el estado inicial es un array vacío. Hago un console.log(appointment) y confirmo
  const [list, setList] = useState([]);

  return (
    <Fragment>
      <h1>Phone directory</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column" />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
