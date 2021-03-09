import React from "react";
import "../Form/Form.css";
import Button from "../Button/Button";

const Form = () => {
  return (
    <div className="form">
      <form className="contact-form">
        <div className="item-form">
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" id="" />
        </div>
        <div className="item-form">
          <label htmlFor="email">E-mail: </label>
          <input type="email" name="email" id="" />
        </div>
        <div className="item-form">
          <label htmlFor="message">Mensagem: </label>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
        </div>
      </form>
      <Button />
    </div>
  );
};

export default Form;
