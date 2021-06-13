import React, { useEffect, useState } from 'react';
import LikeModal from '../components/atoms/modal/LikeModal';

export default function UserProfile() {
  const [userAgent, setUserAgent] = useState<string>('');
  const [isModal, setIsModal] = useState<boolean>(false);
  useEffect(() => {
    if (process.browser) {
      setUserAgent(navigator.userAgent);
    }
  }, []);

  const handleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <h1>CHECK MY PROFILE</h1>
      <p>user-agent:{userAgent}</p>
      <button onClick={handleModal}>LIKE</button>
      {isModal && <LikeModal handleModal={handleModal} />}
      <button>ENJOY</button>
    </>
  );
}
