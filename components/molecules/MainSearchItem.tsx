import React, { useEffect, useState } from 'react';
import SearchButton from '../atoms/atomButton/SearchButton';
import SearchInput from '../atoms/SearchInput';
import axios from '../../libraries/axios/index';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/RootActions';

export default function MainSearchItem() {
  const [input, setInput] = useState<any>(null);
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const sendTypeInput = ['jpg', 'png', 'gif'];

  const searchById = (e: any) => {
    e.preventDefault();
    if (sendTypeInput.includes(input)) {
      dispatch(actions.getSearchCard(`images/search?mime_types=${input}`));
    } else {
      dispatch(actions.getSearchCard(`images/search?breed_id=${input}`));
    }
  };

  return (
    <form onSubmit={searchById}>
      <SearchInput handleChange={handleChange} />
      <SearchButton searchById={searchById} />
    </form>
  );
}
