import React, { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/actions';

export default function SortEngeine() {
  const [input, setInput] = useState<string>('');
  const dispatch = useDispatch();
  const sendTypeInput = ['jpg', 'png', 'gif'];
  const queryTypes = {
    mime: 'mime_types=',
    breed: 'breed_id='
  };
  const handleChange = (e: any) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const searchById = (e: any) => {
    e.preventDefault();
    if (sendTypeInput.includes(input)) {
      dispatch(actions.getSearchCard(`${queryTypes.mime}${input}`));
    } else {
      dispatch(actions.getSearchCard(`${queryTypes.breed}${input}`));
    }
  };

  return (
    <>
      <Input handleChange={handleChange} type="text" placeholder="aa" />
      <Button type="searchBtn" onClick={searchById} name="search" />
      <Button
        type="filterBtn"
        onClick={() => dispatch(actions.changeOrder('ASC'))}
        name="asc"
      />
      <Button
        type="filterBtn"
        onClick={() => dispatch(actions.changeOrder('DESC'))}
        name="desc"
      />
    </>
  );
}
