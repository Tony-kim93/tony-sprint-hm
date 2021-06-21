import React from 'react';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import Card from '../molcules/Card';
import * as S from '../../styles/globalStyles';

interface likeDataProps {
  handleModal: any;
  title: string;
  datas: any;
  type: string;
  deleteUploadImg?: any;
}

export default function Modal({
  datas,
  handleModal,
  title,
  type,
  deleteUploadImg
}: likeDataProps) {
  return (
    <S.ModalContainer>
      <div className="modalContent">
        <Heading text={title} />
        <S.GridLikeCard>
          {datas?.map((data: any) => (
            <div key={data.id}>
              <Card
                url={data.url}
                breedGroup={data.breeds[0]?.breed_group}
                name={data.breeds[0]?.name}
                width={100}
                height={100}
              />
              {type === 'regist' && (
                <Button
                  onClick={() => deleteUploadImg(data.id)}
                  name="delete"
                />
              )}
            </div>
          ))}
        </S.GridLikeCard>
        <Button name="EXIT" onClick={handleModal} type="exitBtn" />
      </div>
    </S.ModalContainer>
  );
}
