import React from 'react';
import SortEngeine from '../organisms/SortEngeine';
import CardGrid from '../organisms/CardGrid';
import Header from '../organisms/Header';
import * as API from '../../api/index';
import { useInfinity } from '../../hooks/useInfinity';
import { useSelector } from 'react-redux';
import useScrollRestoration from '../../hooks/useScrollByPageMove';
import { useRouter } from 'next/router';

export default function MainPageTemplate() {
  const router = useRouter();
  useScrollRestoration(router);
  const { value } = useSelector((state: any) => state.order);
  const { card } = useSelector((state: any) => state.mainPage);
  const sendEnjoy = async (id: string) => {
    const result = await API.sendFavourites({ image_id: id, sub_id: 'test14' });
    if (result.status === 200) return result.data.id;
  };

  const sendCancelEnjoy = (enjoyId: string) => {
    API.deleteFavourites(enjoyId);
  };

  return (
    <>
      <Header />
      <SortEngeine />
      <CardGrid
        card={card}
        value={value}
        useInfinity={useInfinity}
        sendCancelEnjoy={sendCancelEnjoy}
        sendEnjoy={sendEnjoy}
      />
    </>
  );
}
