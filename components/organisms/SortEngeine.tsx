import React, { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/actions';

export default function SortEngeine() {
  const [input, setInput] = useState<string>('');
  const dispatch = useDispatch();
  const sendTypeInput = ['jpg', 'png', 'gif'];
  const handleChange = (e: any) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const searchById = (e: any) => {
    e.preventDefault();
    if (sendTypeInput.includes(input)) {
      dispatch(actions.getSearchCard(`/search?mime_types=${input}`));
    } else {
      dispatch(actions.getSearchCard(`/search?breed_id=${input}`));
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
