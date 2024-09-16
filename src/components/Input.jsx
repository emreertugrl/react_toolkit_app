import React from "react";
const Input = ({ value, type, id, name, onChange, placeholder }) => {
  return (
    <input
      className="h-10 w-full border rounded-md outline-none my-2 p-2"
      placeholder={placeholder}
      value={value}
      type={type}
      id={id}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
