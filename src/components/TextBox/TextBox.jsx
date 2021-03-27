import React from "react";
import styles from "../TextBox/TextBox.module.css";

const TextBox = (props) => {
  return <p className={styles.p}>{props.content}</p>;
};

export default TextBox;
