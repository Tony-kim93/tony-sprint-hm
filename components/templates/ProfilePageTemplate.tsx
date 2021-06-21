import React, { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import * as S from '../../styles/globalStyles';
import * as API from '../../api/index';
import Modal from '../molcules/Modal';
import Img from '../atoms/Img';
import { resourceLimits } from 'worker_threads';

export default function ProfilePageTemplate() {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isRegist, setIsRegist] = useState<boolean>(false);
  const [like, setLike] = useState<any>([]);
  const [enjoy, setEnjoy] = useState<any>([]);
  const [regist, setRegist] = useState<any>([]);
  const [datas, setDatas] = useState<any>([]);
  const findDataId = like.map((item: any) => {
    return item.image_id;
  });
  const query = {
    limit: 10,
    sub_id: '1234'
  };

  const getLikeData = (idArr: any) => {
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

  useEffect(() => {
    API.getVotes('eric').then((result) => {
      if (result.status === 200) {
        setLike(result.data);
      }
    });
  }, []);

  useEffect(() => {
    API.getFavourites('test14').then((result) => {
      if (result.status === 200) {
        setEnjoy(result.data);
      }
    });
  }, []);

  //등록 받아오기
  useEffect(() => {
    API.getLikedAllImg(`limit=${query.limit}&sub_id=${query.sub_id}`).then(
      (result) => {
        if (result.status === 200) {
          setRegist(result.data);
        }
      }
    );
  }, []);

  //내가 등록한거 삭제기능
  const deleteUploadImg = (imgId: any) => {
    API.deleteUploadImg(imgId).then((result) => {
      if (result.status === 204) {
        API.getLikedAllImg(`limit=${query.limit}&sub_id=${query.sub_id}`).then(
          (result) => setRegist(result.data)
        );
      }
    });
  };

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
