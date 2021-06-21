import React, { useState, useEffect } from 'react';
import Img from '../atoms/Img';
import * as TYPE from '../../interface/index';

interface ToggleDataProps {
  src1: string;
  src2: string;
  toggle?: boolean;
  sendEnroll?: any;
  sendCancel?: any;
  id?: string;
  likeArr?: TYPE.likeArrProps;
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
  const [deleteId, setDeleteId] = useState<any>(undefined);
  useEffect(() => {
    if (id) {
      if (toggle) {
        sendEnroll(id).then((res: any) => setDeleteId(res));
        return;
      }
      if (deleteId) sendCancel(deleteId);
    }
  }, [id, toggle]);

  useEffect(() => {
    if (likeArr?.length > 0) setToggle(true);
  }, [likeArr]);

  const onClick = (e: any) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  return (
    <>
      <Img
        className="hoverImg"
        onClick={onClick}
        src={toggle ? src1 : src2}
        alt="test"
        width={15}
        height={15}
      />
    </>
  );
}
