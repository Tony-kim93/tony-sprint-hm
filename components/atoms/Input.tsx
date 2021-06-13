import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export default function Input({ type, placeholder, handleChange }: InputProps) {
  return (
    <input
      onChange={handleChange}
      type={type}
      placeholder={placeholder}></input>
  );
}
