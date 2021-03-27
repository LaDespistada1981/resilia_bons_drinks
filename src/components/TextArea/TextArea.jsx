import React from "react";
import "../TextArea/TextArea.css";

const TextArea = (props) => {
  return (
    <>
      <label htmlFor={props.htmlFor}>{props.content}</label>
      <textarea
        name={props.name}
        id={props.htmlFor}
        cols={props.cols}
        rows={props.rows}
      ></textarea>
    </>
  );
};

export default TextArea;
