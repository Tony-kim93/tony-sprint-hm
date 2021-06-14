import React from 'react';
import styled from 'styled-components';

interface InputProps {
  type: string;
  placeholder: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export default function Input({ type, placeholder, handleChange }: InputProps) {
  return (
    <MainPageSearchInput
      onChange={handleChange}
      type={type}
      placeholder={placeholder}></MainPageSearchInput>
  );
}

const MainPageSearchInput = styled.input`
  margin-right: 50px;
  margin-top: 30px;
  width: 300px;
  height: 40px;
  padding: 8px 9px 10px 15px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
`;
