import React from 'react';
import MainSearchItem from '../molecules/MainSearchItem';
import AscButton from '../atoms/atomButton/AscButton';
import DescButton from '../atoms/atomButton/DescButton';

export default function MainSearchEngine() {
  return (
    <div>
      <MainSearchItem />
      <AscButton />
      <DescButton />
    </div>
  );
}
