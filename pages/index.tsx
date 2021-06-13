import React, { useState } from 'react';
import styled from 'styled-components';
import * as actions from '../store/modules/actions';
import { wrapper } from '../store/store';
import { GetStaticProps } from 'next';
import { END } from '@redux-saga/core';
import MainPageTemplate from '../components/templates/MainPageTemplate';

const FullWrapper = styled.div`
  max-width: 850px;
  margin: 0 auto;
  text-align: center;
`;

const Home = () => {
  return (
    <FullWrapper>
      <title>TONY-Project</title>
      <MainPageTemplate />
    </FullWrapper>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async ({ store }) => {
    store.dispatch(actions.getMainCard('limit=50'));
    store.dispatch(END);
    await store.sagaTask?.toPromise();
  }
);

export default Home;
