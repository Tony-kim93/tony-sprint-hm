import React, { useState, useEffect, MouseEvent } from 'react';
import Img from '../atoms/Img';
import * as TYPE from '../../interface/index';

interface ToggleDataProps {
  src1: string;
  src2: string;
  toggle?: boolean;
  id?: string;
  likeArr?: TYPE.likeArrProps;
  sendEnroll?: any;
  sendCancel?: any;
}

export default function Toggle({
  src1,
  src2,
  sendEnroll,
  sendCancel,
  id,
  likeArr
}: ToggleDataProps) {
  const [toggle, setToggle] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number>();
  useEffect(() => {
    if (id) {
      if (toggle) {
        sendEnroll(id).then((res: number) => setDeleteId(res));
        return;
      }
      if (deleteId) sendCancel(deleteId);
    }
  }, [id, toggle]);

  useEffect(() => {
    if (likeArr?.length > 0) setToggle(true);
  }, [likeArr]);

  const handleToggle = (e: MouseEvent) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  return (
    <>
      <Img
        className="hoverImg"
        onClick={handleToggle}
        src={toggle ? src1 : src2}
        alt="test"
        width={15}
        height={15}
      />
    </>
  );
}
