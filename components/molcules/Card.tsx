import React from 'react';
import Img from '../atoms/Img';
import Paragraph from '../atoms/Paragraph';

interface CardProps {
  url: string;
  breedGroup?: string;
  name?: string;
  width: number;
  height: number;
}

export default function Card({
  url,
  breedGroup,
  name,
  width,
  height
}: CardProps) {
  return (
    <>
      <Img src={url} alt="test" width={width} height={height} />
      {breedGroup && <Paragraph text={`breed:${breedGroup}`} />}
      {name && <Paragraph text={`name:${name}`} />}
    </>
  );
}
