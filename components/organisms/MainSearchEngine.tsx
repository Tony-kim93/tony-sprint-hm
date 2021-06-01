import React from 'react';
import MainSearchItem from '../molecules/MainSearchItem';
import AscButton from '../atoms/AscButton';
import DescButton from '../atoms/DescButton';

export default function MainSearchEngine() {
  return (
    <div>
      <MainSearchItem />
      <AscButton />
      <DescButton />
    </div>
  );
}
