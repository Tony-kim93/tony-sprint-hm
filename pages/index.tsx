import React, { useEffect, useState } from 'react';
import MainSearchEngine from '../components/organisms/MainSearchEngine';
import * as actions from '../store/modules/RootActions';
import MainPage from '../components/templates/MainPage';

export default function Home() {
  return (
    <div>
      <title>TONY</title>
      <h1>DOG PROJECT</h1>
      <MainPage />
    </div>
  );
}
