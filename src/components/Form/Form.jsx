import React from "react";
import "../Form/Form.css";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";

const Form = (props) => {
  return (
    <form className="contact-form">
      <Input htmlFor="nome" type="text" name="nome" id="nome">
        Nome:
      </Input>
      <Input name="email" type="text" id="email">
        E-mail:
      </Input>
      <TextArea name="mensagem" id="" cols="30" rows="10">
        Mensagem:
      </TextArea>
      <Button />
    </form>
  );
};

export default Form;
