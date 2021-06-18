import React from 'react';
import Img from '../atoms/Img';

interface ToggleDataProps {
  src1: string;
  src2: string;
  toggle: boolean;
  sendEnroll: React.MouseEventHandler<HTMLImageElement> | undefined;
  sendCancel: React.MouseEventHandler<HTMLImageElement> | undefined;
}

export default function Toggle({
  src1,
  src2,
  toggle,
  sendEnroll,
  sendCancel
}: ToggleDataProps) {
  console.log();
  return (
    <>
      {toggle ? (
        <Img
          className="hoverImg"
          onClick={sendCancel}
          src={src1}
          alt="test"
          width={15}
          height={15}
        />
      ) : (
        <Img
          className="hoverImg"
          onClick={sendEnroll}
          src={src2}
          alt="test"
          width={15}
          height={15}
        />
      )}
    </>
  );
}
