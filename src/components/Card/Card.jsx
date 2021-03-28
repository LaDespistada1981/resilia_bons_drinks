import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.div}>
      <img className={styles.img} src={props.img} alt="drink randomico" />
      <h5 className={styles.nome}>{props.nome}</h5>
    </div>
  );
};

export default Card;
