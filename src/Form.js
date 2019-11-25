import React, { Fragment, useState } from "react";
import { valueToNode } from "@babel/types";

const Form = () => {
  const [person, setPerson] = useState({
    fullname: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleInputChange = e => {
    const { name, value } = e.target;

    setPerson((person[name] = value));

    console.log(person);
  };

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

        <button type="submit" className="button-primary u-full-width">
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
