import React, { useEffect, useState } from "react";
import styles from "../Button/Button.module.css";

const Button = (props) => {
  const type = props.type;
  const content = props.content;

  const [disabled, setDisabled] = useState(false);

  const desabilitar = () => {
    console.log("Cliquei no botão!");
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 3000);
  };

  useEffect(() => {
    console.log(`A propriedade disabled está ${disabled}`);
  }, [disabled]);

  return (
    <button
      className={styles.btn}
      type={type}
      disabled={disabled}
      onClick={props.onClick}
    >
      {props.children}
      {content}
    </button>
  );
};

export default Button;
