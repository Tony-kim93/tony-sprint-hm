import React from 'react';
import SortEngeine from '../organisms/SortEngeine';
import CardGrid from '../organisms/CardGrid';
import Header from '../organisms/Header';

export default function MainPageTemplate() {
  return (
    <div>
      <Header />
      <SortEngeine />
      <CardGrid />
    </div>
  );
}
