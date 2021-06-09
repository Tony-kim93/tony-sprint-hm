import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LikeBtn from '../atoms/atomButton/LikeBtn';
import MainSingleCard from '../molecules/MainSingleCard';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/RootActions';
import * as S from '../../styles/globalStyles';

export default function MainCard() {
  const { isLoading, mainCardData, order } = useSelector(
    (state: any) => state.MainCard
  );
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
            actions.getMainCard(
              `breeds?limit=50&page=${pageSet}&order=${order}`
            )
          );
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, [order]);

  // Refactoring대상 => 같은 의존성배열
  useEffect(() => {
    dispatch(actions.getMainCardOrder(`breeds?limit=50&order=${order}`));
  }, [order]);

  const MainPageDogData = mainCardData.MainCard;

  return (
    <S.GridMainCard>
      {MainPageDogData.card?.map((item: any) => {
        return (
          <div key={item.id}>
            {item.breeds ? (
              <>
                <Link href="/post/${item.id}" as={`/post/${item.id}`}>
                  <a>
                    <MainSingleCard item={item} />
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/post/${item.image.id}"
                  as={`/post/${item.image.id}`}>
                  <a>
                    <MainSingleCard item={item} />
                  </a>
                </Link>
              </>
            )}
          </div>
        );
      })}
    </S.GridMainCard>
  );
}
