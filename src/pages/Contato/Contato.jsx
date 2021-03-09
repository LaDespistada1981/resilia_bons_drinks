import React, { Component } from "react";
import "../Contato/Contato.css";
import "../Contato/Contato";
import Form from "../../components/Form/Form";
import imagemContato from "../../img/contact-pic.jpg";

export default class Contato extends Component {
  render() {
    return (
      <div className="Form-contato content">
        <h1 className="title-contato">Contato</h1>
        <img
          className="contact-pic"
          src={imagemContato}
          alt="imagem de teclas de uma máquina de escrever"
        />
        <Form />
      </div>
    );
  }
}
