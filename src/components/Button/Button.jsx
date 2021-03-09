import React from "react";
import "../Button/Button.css";

const Button = () => {
  function meuClick() {
    console.log("Fui clicado!");
  }

  return (
    <button className="btn" type="submit" onClick={meuClick()}>
      Enviar
    </button>
  );
};

export default Button;
