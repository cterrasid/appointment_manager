import React, { Fragment } from "react";

const Form = () => {
  return (
    <Fragment>
      <h2>Save Person</h2>
      <form>
        <label>Fullname</label>
        <input
          type="text"
          name="person"
          className="u-full-width"
          placeholder="Name of the person"
        />

        <label>Email</label>
        <input
          type="mail"
          name="owner"
          className="u-full-width"
          placeholder="Email of the person"
        />

        <label htmlFor="phone">Phone number</label>
        <input id="phone" type="tel" className="u-full-width" name="phone" />

        <label htmlFor="comments">Comments</label>
        <textarea id="comments" className="u-full-width" name="comments" />

        <button type="submit" className="button-primary u-full-width">
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
