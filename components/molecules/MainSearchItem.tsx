import React from 'react';
import SearchButton from '../atoms/SearchButton';
import SearchInput from '../atoms/SearchInput';

export default function MainSearchItem() {
  return (
    <div>
      <SearchInput />
      <SearchButton />
    </div>
  );
}
