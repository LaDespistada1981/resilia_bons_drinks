import React from "react";
import "../Contato/Contato.css";
import imagem from "../../img/contact-pic.jpg";
import Form from "../../components/Form/Form";
import ImgBox from "../../components/ImgBox/ImgBox";

const Contato = (props) => {
  return (
    <div className="formContato content">
      <h1 className="titleContato">{props.titulo}</h1>
      <ImgBox
        imagem={imagem}
        alt="imagem de teclas de uma máquina de escrever"
      />
      <Form />
    </div>
  );
};

export default Contato;
