import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import { useSelector } from 'react-redux';
import LikeCard from '../molcules/LikeCard';
import * as S from '../../styles/globalStyles';
import axios from '../../libraries/axios/index';

export default function Modal({ handleModal, like }: any) {
  const [datas, setDatas] = useState<any>([]);

  const findDataId = like.map((item: any) => {
    return item.image_id;
  });

  const getLikeData = (idArr: any) => {
    const result = Promise.all(
      idArr.map((id: any) => {
        return axios.get(`/images/${id}`).then((res) => res.data);
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
    <ModalContainer>
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
    </ModalContainer>
  );
}

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000080;
  z-index: 100000;

  .modalContent {
    background-color: #fff;
    position: absolute;
    width: 900px;
    margin: 0 auto;
    height: 900px;
    border-radius: 10px;
    text-align: center;
  }
`;
