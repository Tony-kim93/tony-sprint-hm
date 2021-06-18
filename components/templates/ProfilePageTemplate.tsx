import React, { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import * as S from '../../styles/globalStyles';
import * as API from '../../api/index';
import Modal from '../molcules/Modal';
import EnjoyCard from '../molcules/EnjoyCard';
import RegistCard from '../molcules/RegistCard';

export default function ProfilePageTemplate() {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isRegist, setIsRegist] = useState<boolean>(false);
  const [like, setLike] = useState<any>([]);
  const [enjoy, setEnjoy] = useState<any>([]);
  const [regist, setRegist] = useState<any>([]);
  const query = {
    limit: 10,
    sub_id: '1234'
  };

  useEffect(() => {
    API.getVotes('TonyK').then((result) => {
      if (result.status === 200) {
        setLike(result.data);
      }
    });
  }, []);

  useEffect(() => {
    API.getFavourites('test4').then((result) => {
      if (result.status === 200) {
        setEnjoy(result.data);
      }
    });
  }, []);

  useEffect(() => {
    API.getLikedAllImg(`limit=${query.limit}&sub_id=${query.sub_id}`).then(
      (result) => {
        if (result.status === 200) {
          setRegist(result.data);
        }
      }
    );
  }, []);

  const handleModal = () => {
    setIsModal(!isModal);
  };
  const handleEnjoy = () => {
    setIsVisible(!isVisible);
  };
  const handleRegist = () => {
    setIsRegist(!isRegist);
  };

  return (
    <S.ProfileWrapper>
      <Button name="like" type="likeBtn" onClick={handleModal} />
      <Button name="enjoy" type="likeBtn" onClick={handleEnjoy} />
      <Button name="regist" type="likeBtn" onClick={handleRegist} />
      {isModal && <Modal like={like} handleModal={handleModal} />}
      {isVisible && <EnjoyCard enjoy={enjoy} />}
      {isRegist && <RegistCard regist={regist} handleModal={handleRegist} />}
    </S.ProfileWrapper>
  );
}
