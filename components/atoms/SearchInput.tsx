import React from 'react';
import styled from 'styled-components';

const MainPageSearchInput = styled.input`
  margin-right: 50px;
  margin-top: 30px;
  width: 300px;
  height: 40px;
  padding: 8px 9px 10px 15px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
`;

export default function SearchInput({ handleChange }: any) {
  return <MainPageSearchInput onChange={handleChange} placeholder="search" />;
}
