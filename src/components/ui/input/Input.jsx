import React from "react";

const Input = ({ text, name, value, handleChange }) => {
  return (
    <input
      type="text"
      placeholder={text}
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
