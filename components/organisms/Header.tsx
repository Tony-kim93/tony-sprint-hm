import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Heading from '../atoms/Heading';

export default function Header() {
  return (
    <HeaderWrapper>
      <Link href="/Profile">
        <a>
          <Heading text="Profile" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Heading text="Dog" />
        </a>
      </Link>
      <Link href="/Register">
        <a>
          <Heading text="Register" />
        </a>
      </Link>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
`;
