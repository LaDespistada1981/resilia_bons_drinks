import React from "react";
import styles from "./Card.module.css";
import TextBox from "../TextBox/TextBox";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={props.imagem} />
      <h4 className={styles.nome}>{props.nome}</h4>
      <TextBox />
    </div>
  );
};

export default Card;
