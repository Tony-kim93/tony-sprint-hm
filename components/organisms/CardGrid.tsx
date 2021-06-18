import React, { useEffect, useState } from 'react';
import Card from '../molcules/Card';
import * as S from '../../styles/globalStyles';
import * as actions from '../../store/modules/actions';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import DetailCard from '../molcules/DetailCard';
import * as TYPE from '../../interface/index';

export default function CardGrid() {
  const { value } = useSelector((state: any) => state.order);
  const { card } = useSelector((state: any) => state.mainPage);
  const dispatch = useDispatch();
  let pageSet = 0;

  //useEffect를 훅스로 완전히 분리하기
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 1
      ) {
        pageSet++;
        if (pageSet < 4)
          dispatch(
            //api분리
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
    //api분리

    dispatch(actions.getMainCardOrder(`limit=50&order=${value}`));
  }, [value]);

  //카드리스트, cards를 map을 하고 안에  내용을 item이 아닌 card로
  //마이그레이션
  //응집도, 결합도
  return (
    <S.GridMainCard>
      {card.length > 1 ? (
        card.map((item: TYPE.ItemType) => (
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
