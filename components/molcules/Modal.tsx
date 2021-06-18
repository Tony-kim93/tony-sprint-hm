import React, { useEffect, useState } from 'react';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import LikeCard from '../molcules/LikeCard';
import * as S from '../../styles/globalStyles';
import * as API from '../../api/index';
import * as TYPE from '../../interface/index';

interface likeDataProps {
  like: [TYPE.likeProps];
  handleModal: any;
}

//이거 따로 어떻게주지? 타입? ㅋㅋ
export default function Modal({ handleModal, like }: likeDataProps) {
  console.log(typeof handleModal);
  const [datas, setDatas] = useState<any>([]);
  const findDataId = like.map((item: any) => {
    return item.image_id;
  });

  const getLikeData = (idArr: any) => {
    const result = Promise.all(
      idArr.map((id: any) => {
        return API.getLikedImg(`${id}`).then((res) => res.data);
      })
    );
    return result;
  };
  useEffect(() => {
    getLikeData(findDataId).then((data) => {
      setDatas(data);
    });
  }, []);

  return (
    <S.ModalContainer>
      <div className="modalContent">
        <Heading text="좋아요" />
        <S.GridLikeCard>
          {datas &&
            datas.map((data: any) => (
              <div key={data.id}>
                <LikeCard data={data} />
              </div>
            ))}
        </S.GridLikeCard>
        <Button name="EXIT" onClick={handleModal} type="exitBtn" />
      </div>
    </S.ModalContainer>
  );
}
