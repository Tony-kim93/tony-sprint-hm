import React, { useEffect, useState } from 'react';
import Card from '../molcules/Card';
import * as S from '../../styles/globalStyles';
import * as actions from '../../store/modules/actions';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import DetailCard from '../molcules/DetailCard';

export interface ItemType {
  bred_for: string;
  breed_group: string;
  height: { imperial: string; metric: string };
  id: number;
  image: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
  life_span: string;
  name: string;
  origin: string;
  reference_image_id: string;
  temperament: string;
  weight: { imperial: string; metric: string };
}

export default function CardGrid() {
  const { value } = useSelector((state: any) => state.order);
  const { card } = useSelector((state: any) => state.mainPage);
  const dispatch = useDispatch();
  let pageSet = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 1
      ) {
        pageSet++;
        if (pageSet < 4)
          dispatch(
            actions.getMainCard(`limit=50&page=${pageSet}&order=${value}`)
          );
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [value]);

  useEffect(() => {
    dispatch(actions.getMainCardOrder(`limit=50&order=${value}`));
  }, [value]);

  return (
    <S.GridMainCard>
      {card.length > 1 ? (
        card.map((item: ItemType) => (
          <Link key={item.id} href={`/Detail/${item.image.id}`}>
            <a>
              <Card item={item} />
            </a>
          </Link>
        ))
      ) : (
        <DetailCard item={card[0]} />
      )}
    </S.GridMainCard>
  );
}
