import React from "react";
import styles from "../TextArea/TextArea.module.css";

const TextArea = (props) => {
  return (
    <div class={styles.textArea}>
      <label htmlFor={props.htmlFor}>{props.content}</label>
      <textarea
        name={props.name}
        id={props.htmlFor}
        cols={props.cols}
        rows={props.rows}
      ></textarea>
    </div>
  );
};

export default TextArea;
