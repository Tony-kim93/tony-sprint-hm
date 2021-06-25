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

export default function MainPageTemplate() {
  const [input, setInput] = useState<string>('');
  const dispatch = useDispatch();
  //범용 상수값, 타입으로하거나 enum으로 하거나 리팩토링
  const sendTypeInput = ['jpg', 'png', 'gif'];
  const queryTypes = {
    mime: 'mime_types=',
    breed: 'breed_id='
  };

  const router = useRouter();
  // useScrollRestoration(router);
  const { value } = useSelector((state: any) => state.order);
  const { card } = useSelector((state: any) => state.mainPage);

  const sendEnjoy = async (id: string) => {
    const result = await API.sendFavourites({ image_id: id, sub_id: 'test14' });
    if (result.status === 200) return result.data.id;
  };

  const sendCancelEnjoy = (enjoyId: number) => {
    console.log(typeof enjoyId);
    API.deleteFavourites(enjoyId);
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
        sendCancelEnjoy={sendCancelEnjoy}
        sendEnjoy={sendEnjoy}
      />
    </>
  );
}
