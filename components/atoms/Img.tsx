import React from 'react';

interface ImgProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  onClick?: any;
}
export default function Img({ src, alt, width, height, onClick }: ImgProps) {
  return (
    <img src={src} alt={alt} onClick={onClick} width={width} height={height} />
  );
}
