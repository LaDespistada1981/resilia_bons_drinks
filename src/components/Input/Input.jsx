import React from "react";

const Input = ({ htmlFor, type, name, content }) => {
  return (
    <>
      <label htmlFor={htmlFor}>{content}</label>
      <input type={type} id={htmlFor} name={name} />
    </>
  );
};

export default Input;
