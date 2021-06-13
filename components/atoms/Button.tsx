import React from 'react';

interface ButtonProps {
  name: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Button({ name, onClick }: ButtonProps) {
  return <button onClick={onClick}>{name}</button>;
}
