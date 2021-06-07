import React, { useState } from 'react';
import MainPage from '../components/templates/MainPage';
import styled from 'styled-components';
import * as actions from '../store/modules/RootActions';
import { wrapper } from '../store/store';
import { GetServerSideProps } from 'next';
import { END } from '@redux-saga/core';

const FullWrapper = styled.div`
  max-width: 850px;
  margin: 0 auto;
  text-align: center;
`;

const Home = () => {
  return (
    <FullWrapper>
      <title>TONY-Project</title>
      <h1>Dog</h1>
      <MainPage />
    </FullWrapper>
  );
};
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(async ({ store }) => {
    store.dispatch(actions.getMainCard('limit=50&order=ASC'));
    store.dispatch(END);
    await store.sagaTask?.toPromise();
  });

export default Home;
