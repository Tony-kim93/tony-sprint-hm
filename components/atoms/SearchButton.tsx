import React from 'react';
import styled from 'styled-components';

export default function SearchButton() {
  function test(): void {
    console.log('real?');
  }
  return <button onClick={test}>Search</button>;
}
