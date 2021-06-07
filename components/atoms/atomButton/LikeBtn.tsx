import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function likeBtn() {
  const [like, setLike] = useState<boolean>(false);
  const handleLike = () => {
    setLike(!like);
  };

  return (
    <>
      {like ? (
        <Image
          onClick={handleLike}
          src="/redheart.png"
          alt="test"
          width={15}
          height={15}
        />
      ) : (
        <Image
          onClick={handleLike}
          src="/heart.png"
          alt="test2"
          width={15}
          height={15}
        />
      )}
    </>
  );
}
