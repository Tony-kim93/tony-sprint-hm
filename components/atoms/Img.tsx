import React from 'react';
import * as S from '../../styles/globalStyles';

interface ImgProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  onClick?: React.MouseEventHandler<HTMLImageElement> | undefined;
  className?: string;
}
export default function Img({
  src,
  alt,
  width,
  height,
  onClick,
  className
}: ImgProps) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onClick={onClick}
      width={width}
      height={height}
    />
  );
}
