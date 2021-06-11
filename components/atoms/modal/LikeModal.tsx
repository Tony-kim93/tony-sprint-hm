import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from '../../../libraries/axios/index';

export default function LikeModal({ handleModal }: any) {
  const API = 'votes?sub_id=TonyK';
  useEffect(() => {
    axios.get(API).then((result) => {
      if (result.status === 200) {
        console.log(result);
        // setLikeDogData(result.data);
      }
    });
  }, []);
  return (
    <ModalContainer>
      <div className="modalContent">
        <div>aaa</div>
        <button onClick={handleModal}>X</button>
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
