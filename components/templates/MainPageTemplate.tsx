import React, { useState, MouseEvent } from 'react';
import SortEngeine from '../organisms/SortEngeine';
import CardGrid from '../organisms/CardGrid';
import Header from '../organisms/Header';
import * as API from '../../api/index';
import { useInfinity } from '../../hooks/useInfinity';
import { useSelector, useDispatch } from 'react-redux';
import useScrollRestoration from '../../hooks/useScrollByPageMove';
import { useRouter } from 'next/router';
import * as actions from '../../store/modules/actions';
import * as TYPE from '../../interface/index';

export default function MainPageTemplate() {
  const [input, setInput] = useState<string>('');
  const dispatch = useDispatch();
  const sendTypeInput = ['jpg', 'png', 'gif'];
  const queryTypes = {
    mime: 'mime_types=',
    breed: 'breed_id='
  };

  const router = useRouter();
  // useScrollRestoration(router);
  const { value } = useSelector((state: TYPE.stateProps) => state.order);
  const { card } = useSelector((state: TYPE.stateProps) => state.mainPage);

  const handleEnroll = async (id: string) => {
    await API.sendFavourites({
      image_id: id,
      sub_id: 'test14'
    })
      .then((res) => {
        if (res.status === 200) return res.data.id;
      })
      .catch((error) => console.log(error));
  };

  const handleCancel = (enjoyId: number) => {
    API.deleteFavourites(enjoyId).catch((error) => console.log(error));
  };

  //sort
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const searchById = (e: MouseEvent) => {
    e.preventDefault();
    if (sendTypeInput.includes(input)) {
      dispatch(actions.getSearchCard(`${queryTypes.mime}${input}`));
    } else {
      dispatch(actions.getSearchCard(`${queryTypes.breed}${input}`));
    }
  };

  const handleOrderAsc = () => {
    dispatch(actions.changeOrder('ASC'));
  };

  const handleOrderDesc = () => {
    dispatch(actions.changeOrder('DESC'));
  };
  return (
    <>
      <Header />
      <SortEngeine
        handleChange={handleChange}
        searchById={searchById}
        handleOrderAsc={handleOrderAsc}
        handleOrderDesc={handleOrderDesc}
      />
      <CardGrid
        card={card}
        value={value}
        useInfinity={useInfinity}
        handleEnroll={handleEnroll}
        handleCancel={handleCancel}
      />
    </>
  );
}
