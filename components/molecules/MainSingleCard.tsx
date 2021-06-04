import React from 'react';

export default function MainSingleCard({ name, breed, image }: any) {
  return (
    <div>
      <img
        key={image.id}
        src={image.url}
        alt="dog image"
        width={100}
        height={100}
      />
      <p>name:{name}</p>
      <p>breed:{breed}</p>
    </div>
  );
}
