import React from "react";
import styles from "../ImgBox/ImgBox.module.css";

const ImgBox = (props) => {
  return (
    <img
      className={styles.imgBox}
      src={props.imagem}
      alt={props.descricaoImg}
    />
  );
};

export default ImgBox;
