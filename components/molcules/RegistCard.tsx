import React, { useEffect, useState } from 'react';
import Img from '../atoms/Img';
import Button from '../atoms/Button';
import * as S from '../../styles/globalStyles';
import axios from '../../libraries/axios/index';
import * as TYPE from '../../interface/index';

interface registDataProps {
  regist: [TYPE.registProps];
  handleModal: any;
}

export default function RegistCard({ regist, handleModal }: registDataProps) {
  console.log(regist);
  return (
    <S.ModalContainer>
      <div className="modalContent">
        <S.GridLikeCard>
          {regist.map((item: any) => (
            <div key={item.id}>
              <Img src={item.url} alt="test" width={100} height={100} />
              <Button
                name="delete"
                onClick={() =>
                  axios
                    .delete(`/images/${item.id}`)
                    .then((res) => console.log(res))
                }
              />
            </div>
          ))}
        </S.GridLikeCard>
        <Button name="EXIT" type="exitBtn" onClick={handleModal} />
      </div>
    </S.ModalContainer>
  );
}
