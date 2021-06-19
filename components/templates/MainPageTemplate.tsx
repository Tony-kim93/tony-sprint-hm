import React from 'react';
import SortEngeine from '../organisms/SortEngeine';
import CardGrid from '../organisms/CardGrid';
import Header from '../organisms/Header';
import * as API from '../../api/index';
import { useInfinity } from '../../hooks/useInfinity';

export default function MainPageTemplate() {
  const sendEnjoy = async (id: any) => {
    const result = await API.sendFavourites({ image_id: id, sub_id: 'test14' });
    if (result.status === 200) return result.data.id;
  };

  const sendCancelEnjoy = (enjoyId: any) => {
    API.deleteFavourites(enjoyId).then((res) => console.log(res));
  };

  return (
    <>
      <Header />
      <SortEngeine />
      <CardGrid
        useInfinity={useInfinity}
        sendCancelEnjoy={sendCancelEnjoy}
        sendEnjoy={sendEnjoy}
      />
    </>
  );
}
