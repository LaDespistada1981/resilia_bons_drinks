import React from "react";
import "../Contato/Contato.css";
import imagemContato from "../../img/contact-pic.jpg";
import Form from "../../components/Form/Form";

const Contato = (props) => {
  return (
    <div className="Form-contato content">
      <h1 className="title-contato">{props.titulo}</h1>
      <img
        className="contact-pic"
        src={imagemContato}
        alt="imagem de teclas de uma máquina de escrever"
      />
      <Form />
    </div>
  );
};

export default Contato;
