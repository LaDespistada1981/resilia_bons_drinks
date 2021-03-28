import React from "react";
import styles from "../TextArea/TextArea.module.css";

const TextArea = ({ htmlFor, content, name, cols, rows }) => {
  return (
    <div class={styles.textArea}>
      <label htmlFor={htmlFor}>{content}</label>
      <textarea name={name} id={htmlFor} cols={cols} rows={rows}></textarea>
    </div>
  );
};

export default TextArea;
