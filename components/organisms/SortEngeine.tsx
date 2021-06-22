import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

interface sortProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  searchById: React.MouseEventHandler<HTMLButtonElement> | undefined;
  test: React.MouseEventHandler<HTMLButtonElement> | undefined;
  test2: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function SortEngeine({
  handleChange,
  searchById,
  test,
  test2
}: sortProps) {
  return (
    <>
      <Input handleChange={handleChange} type="text" placeholder="aa" />
      <Button type="searchBtn" onClick={searchById} name="search" />
      <Button type="filterBtn" onClick={test} name="asc" />
      <Button type="filterBtn" onClick={test2} name="desc" />
    </>
  );
}
