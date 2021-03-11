import React from "react";
import "../TextArea/TextArea.css";

const TextArea = (props) => {
  return (
    <>
      <label htmlFor="{props.name}">{props.children}</label>
      <textarea
        name={props.name}
        id={props.id}
        cols={props.cols}
        rows={props.rows}
      ></textarea>
    </>
  );
};

export default TextArea;
