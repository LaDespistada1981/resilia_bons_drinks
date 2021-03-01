import React, { Component } from "react";
import "../Contato/Contato.css";
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
            <div className="item-form">
              <button className="btn-contact" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
