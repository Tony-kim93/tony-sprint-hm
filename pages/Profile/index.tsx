import React, { useEffect, useState } from 'react';
import Paragraph from '../../components/atoms/Paragraph';
import Button from '../../components/atoms/Button';
import Modal from '../../components/molcules/Modal';
import Heading from '../../components/atoms/Heading';
import axios from '../../libraries/axios/index';
import * as S from '../../styles/globalStyles';

export default function Profile() {
  const [userAgent, setUserAgent] = useState<string>('');
  const [isModal, setIsModal] = useState<boolean>(false);
  const [like, setLike] = useState<object>({});
  useEffect(() => {
    if (process.browser) {
      setUserAgent(navigator.userAgent);
    }
  }, []);

  useEffect(() => {
    axios.get('votes?sub_id=TonyK').then((result) => {
      if (result.status === 200) {
        setLike(result.data);
      }
    });
  }, []);

  const handleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <S.ProfileWrapper>
      <Heading text="Profile" />
      <Paragraph text={`userAgent: ${userAgent}`} />
      <Button name="좋아요" type="likeBtn" onClick={handleModal} />
      <Button name="즐겨찾기" type="likeBtn" />
      {isModal && <Modal like={like} handleModal={handleModal} />}
    </S.ProfileWrapper>
  );
}
