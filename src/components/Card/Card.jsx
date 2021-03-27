import React from "react";
import styles from "../Card/Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.img} className={styles.img} alt="Imagem de um drink" />
      <h3>{props.titulo}</h3>
    </div>
  );
};

export default Card;
