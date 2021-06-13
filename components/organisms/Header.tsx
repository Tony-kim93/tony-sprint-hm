import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderWrapper>
      <div>프로필</div>
      <h1>dog</h1>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: tomato;
  height: 100px;
`;
