import React from 'react';
import SortEngeine from '../organisms/SortEngeine';
import CardGrid from '../organisms/CardGrid';
import Header from '../organisms/Header';

export default function MainPageTemplate() {
  return (
    <>
      <Header />
      <SortEngeine />
      <CardGrid />
    </>
  );
}
