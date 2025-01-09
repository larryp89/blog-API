import { useState } from "react";

function FormInput({ text, type, handleChange, name, value }) {
  return (
    <input
      type={type}
      placeholder={text}
      onChange={handleChange}
      name={name}
      value={value}
    />
  );
}

export default FormInput;
