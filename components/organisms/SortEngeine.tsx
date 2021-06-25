import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

interface sortProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  searchById: React.MouseEventHandler<HTMLButtonElement>;
  handleOrderAsc: React.MouseEventHandler<HTMLButtonElement>;
  handleOrderDesc: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SortEngeine({
  handleChange,
  searchById,
  handleOrderAsc,
  handleOrderDesc
}: sortProps) {
  return (
    <>
      <Input handleChange={handleChange} type="text" placeholder="test" />
      <Button type="searchBtn" onClick={searchById} name="search" />
      <Button type="filterBtn" onClick={handleOrderAsc} name="asc" />
      <Button type="filterBtn" onClick={handleOrderDesc} name="desc" />
    </>
  );
}
