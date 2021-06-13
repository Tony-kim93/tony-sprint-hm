import React from 'react';

export default function MainSingleCard({ item }: any) {
  return (
    <>
      {item.breeds ? (
        <>
          <img
            key={item.id}
            src={item.url}
            alt="dog image"
            width={100}
            height={100}
          />
          {item.breeds ? (
            <>
              <p>name:{item.breeds[0]?.name}</p>
              <p>breed:{item.breeds[0]?.breed_group}</p>
              <p>url:{item.url}</p>
            </>
          ) : (
            <p>data is not defined</p>
          )}
        </>
      ) : (
        <>
          <img
            key={item.image.id}
            src={item.image.url}
            alt="dog image"
            width={100}
            height={100}
          />
          <p>name:{item.name}</p>
          <p>breed:{item.breed_group}</p>
        </>
      )}
    </>
  );
}
