import React, { useState } from "react";
import styles from "../Form/Form.module.css";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";

const Form = () => {
  const [caractere, setCaractere] = useState("");

  const escreveJunto = (event) => {
    setCaractere(event.target.value);
    console.log(caractere);
  };

  return (
    <form className={styles.contactForm}>
      <Input
        content="Nome: "
        htmlFor="nome"
        type="text"
        name="nome"
        id="nome"
      ></Input>
      <Input
        content="Email: "
        name="email"
        type="email"
        htmlFor="email"
      ></Input>
      <TextArea
        name="mensagem"
        id=""
        cols="30"
        rows="10"
        content="Mensagem:"
        value={caractere}
        onChange={escreveJunto}
      ></TextArea>
      <Button type="submit" content="Enviar" />
      <p>{caractere}</p>
    </form>
  );
};

export default Form;
