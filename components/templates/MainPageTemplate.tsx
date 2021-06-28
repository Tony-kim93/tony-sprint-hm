import React, { useCallback, useState, MouseEvent } from 'react';
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

  const handleEnroll = useCallback(async (id: string) => {
    try {
      const result = await API.sendFavourites({
        image_id: id,
        sub_id: 'test15'
      });
      if (result.status === 200) return result.data.id;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleCancel = useCallback(async (enjoyId: number) => {
    API.deleteFavourites(enjoyId).catch((error) => console.log(error));
  }, []);

  const handleChange = useCallback(
    (e) => {
      setInput(e.target.value);
      console.log(input);
    },
    [input]
  );

  const searchById = useCallback(() => {
    if (sendTypeInput.includes(input)) {
      dispatch(actions.getSearchCard(`${queryTypes.mime}${input}`));
    } else {
      dispatch(actions.getSearchCard(`${queryTypes.breed}${input}`));
    }
  }, [input]);

  const handleOrderAsc = useCallback(() => {
    dispatch(actions.changeOrder('ASC'));
  }, []);

  const handleOrderDesc = useCallback(() => {
    dispatch(actions.changeOrder('DESC'));
  }, []);

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
