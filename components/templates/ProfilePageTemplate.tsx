import React, { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import * as S from '../../styles/globalStyles';
import * as API from '../../api/index';
import Modal from '../molcules/Modal';
import Img from '../atoms/Img';
import * as TYPE from '../../interface/index';
import { error } from 'console';

export default function ProfilePageTemplate() {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isRegist, setIsRegist] = useState<boolean>(false);
  const [like, setLike] = useState<TYPE.likeArrProps[]>([]);
  const [enjoy, setEnjoy] = useState<TYPE.enjoyProps[]>([]);
  const [regist, setRegist] = useState<TYPE.registProps[]>([]);
  const [datas, setDatas] = useState<TYPE.itemProps[]>([]);
  const findDataId = like.map((item: TYPE.likeArrProps) => {
    return item.image_id;
  });
  const query = {
    limit: 10,
    sub_id: '1234'
  };

  const getLikeData = (idArr: string[]) => {
    const result = Promise.all(
      idArr.map((id: any) => {
        return API.getLikedImg(`${id}`).then((res) => res.data);
      })
    );
    return result;
  };

  useEffect(() => {
    getLikeData(findDataId).then((data) => setDatas(data));
  }, [like]);

  const handleLikeData = () => {
    setIsModal(!isModal);
    API.getVotes('eric').then((result) => {
      if (result.status === 200) {
        setLike(result.data);
      }
    });
  };

  //즐겨찾기한 목록 가져오기
  const handleEnjoyData = () => {
    setIsVisible(!isVisible);
    API.getFavourites('test14')
      .then((result) => {
        if (result.status === 200) {
          setEnjoy(result.data);
        }
      })
      .catch((error) => console.log(error));
  };

  //내가 등록한 목록 가져오기
  const handleRegistData = () => {
    setIsRegist(true);
    API.getLikedAllImg(`limit=${query.limit}&sub_id=${query.sub_id}`)
      .then((result) => {
        if (result.status === 200) {
          setRegist(result.data);
        }
      })
      .catch((error) => console.log(error));
  };

  //내가 등록한거 삭제기능
  const deleteUploadImg = (imgId: string) => {
    API.deleteUploadImg(imgId)
      .then((result) => {
        if (result.status === 204) {
          handleRegistData();
        }
      })
      .catch((error) => console.log(error));
  };

  const handleModal = () => {
    setIsModal(!isModal);
  };

  const handleRegist = () => {
    setIsRegist(!isRegist);
  };
  return (
    <S.ProfileWrapper>
      <Button name="like" type="likeBtn" onClick={handleLikeData} />
      <Button name="enjoy" type="likeBtn" onClick={handleEnjoyData} />
      <Button name="regist" type="likeBtn" onClick={handleRegistData} />
      {isModal && (
        <Modal
          type="like"
          datas={datas}
          title="like"
          handleModal={handleModal}
        />
      )}
      {isRegist && (
        <Modal
          type="regist"
          title="regist"
          datas={regist}
          handleModal={handleRegist}
          deleteUploadImg={deleteUploadImg}
        />
      )}
      {isVisible && (
        <S.GridLikeCard>
          {enjoy &&
            enjoy.map((item: any) => (
              <div key={item.id}>
                <Img src={item.image.url} alt="test" width={100} height={100} />
              </div>
            ))}
        </S.GridLikeCard>
      )}
    </S.ProfileWrapper>
  );
}
