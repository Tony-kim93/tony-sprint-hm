import React, { useEffect, useState } from 'react';
import Paragraph from '../../components/atoms/Paragraph';
import Button from '../../components/atoms/Button';
import Modal from '../../components/molcules/Modal';
import Heading from '../../components/atoms/Heading';
import axios from '../../libraries/axios/index';
import EnjoyCard from '../../components/molcules/EnjoyCard';
import RegistCard from '../../components/molcules/RegistCard';
import * as S from '../../styles/globalStyles';

export default function Profile() {
  const [userAgent, setUserAgent] = useState<string>('');
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isRegist, setIsRegist] = useState<boolean>(false);
  const [like, setLike] = useState<object>({});
  const [enjoy, setEnjoy] = useState<object>({});
  const [regist, setRegist] = useState<object>({});
  useEffect(() => {
    if (process.browser) {
      setUserAgent(navigator.userAgent);
    }
  }, []);

  //[리팩토링대상] => 이거 렌더링 3번일어남 온클릭으로 로딩해서 프롭으로 넘기게 바꾸자
  useEffect(() => {
    axios.get('votes?sub_id=TonyK').then((result) => {
      if (result.status === 200) {
        setLike(result.data);
      }
    });
  }, []);

  useEffect(() => {
    axios.get('/favourites?sub_id=test3').then((result) => {
      if (result.status === 200) {
        setEnjoy(result.data);
      }
    });
  }, []);

  useEffect(() => {
    axios.get(`/images?sub_id=1234`).then((result) => {
      if (result.status === 200) {
        setRegist(result.data);
      }
    });
  }, []);

  // useEffect(() => {
  //   fetch('https://ipinfo.io/json')
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }, []);

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
      <Heading text="Profile" />
      <Paragraph text={`userAgent: ${userAgent}`} />
      <Button name="like" type="likeBtn" onClick={handleModal} />
      <Button name="enjoy" type="likeBtn" onClick={handleEnjoy} />
      <Button name="regist" type="likeBtn" onClick={handleRegist} />
      {isModal && <Modal like={like} handleModal={handleModal} />}
      {isVisible && <EnjoyCard enjoy={enjoy} />}
      {isRegist && <RegistCard regist={regist} />}
    </S.ProfileWrapper>
  );
}
