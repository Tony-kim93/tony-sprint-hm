import React from 'react';
import SearchButton from '../atoms/atomButton/SearchButton';
import SearchInput from '../atoms/SearchInput';

export default function MainSearchItem() {
  return (
    <form>
      <SearchInput />
      <SearchButton />
    </form>
  );
}
