import React from "react";
import "../Input/Input.css";

const Input = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.children}</label>

      <input type={props.type} nome={props.name} id={props.id} />
    </>
  );
};

export default Input;
