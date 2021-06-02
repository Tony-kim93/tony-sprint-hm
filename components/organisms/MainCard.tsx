import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/RootActions';
import LikeSvg from '../atoms/atomButton/LikeSvg';
import Image from 'next/image';
import Loading from '../atoms/Loading';

export default function MainCard() {
  const dispatch = useDispatch();
  const getStoreData = useSelector((state: any) => state);
  useEffect(() => {
    dispatch(actions.getMainCard(actions));
  }, []);

  const CardData = getStoreData.MainCard.mainCardData.card.data;

  return (
    <div>
      {/* {getStoreData.MainCard.isLoading ? (
        <Loading />
      ) : (
        CardData?.map((item: any) => {
          return (
            <div>
              <img
                key={item.id}
                src={item.image.url}
                alt="dog image test"
                width={100}
                height={100}
              />
              <p>name:{item.name}</p>
              <p>breed:{item.breed_group}</p>
            </div>
          );
        })
      )} */}
      {CardData?.map((item: any) => {
        return (
          <div>
            <img
              key={item.id}
              src={item.image.url}
              alt="dog image test"
              width={100}
              height={100}
            />
            <p>name:{item.name}</p>
            <p>breed:{item.breed_group}</p>
          </div>
        );
      })}
    </div>
  );
}
