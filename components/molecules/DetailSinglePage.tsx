import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LikeBtn from '../atoms/atomButton/LikeBtn';
import axios from '../../libraries/axios/index';

export default function DetailSinglePage({ item }: any) {
  const [likeDogData, setLikeDogData] = useState<any>([]);
  const [voteId, setVoteId] = useState<number>(0);
  const getDetailPageImgId = item.breeds[0].reference_image_id;
  const getArrIncludeImgId = likeDogData?.filter(
    (el: any) => el.image_id === getDetailPageImgId
  );
  const isValue = getArrIncludeImgId[0]?.value === 1;
  const sendLikeVote = () => {
    axios
      .post('/votes', {
        image_id: item.breeds[0].reference_image_id,
        sub_id: 'TonyK',
        value: 1
      })
      .then((result) => {
        if (result.status === 200) {
          setVoteId(result.data.id);
        }
      });
  };
  const sendUnLikeVote = () => {
    axios.delete(`votes/${voteId}`).then((result) => {
      if (result.status === 200) {
        setVoteId(result.data.id);
      }
    });
  };

  //리팩토링 => api단 분리 => 폴더 스트럭쳐 생각해서
  const API = 'votes?sub_id=TonyK';
  useEffect(() => {
    axios.get(API).then((result) => {
      if (result.status === 200) {
        setLikeDogData(result.data);
        setVoteId(getArrIncludeImgId[0]?.id);
      }
    });
  }, [voteId]);
  return (
    <>
      <DetailDogImg src={item.url} alt="detail dog" width={300} height={300} />
      <p>품종:{item.breeds[0].breed_group}</p>
      <p>이름:{item.breeds[0].name}</p>
      <p>역할:{item.breeds[0].bred_for}</p>
      <p>인생:{item.breeds[0].life_span}</p>
      <LikeBtn
        isValue={isValue}
        sendLikeVote={sendLikeVote}
        sendUnLikeVote={sendUnLikeVote}
      />
    </>
  );
}
const DetailDogImg = styled.img`
  border-radius: 20px;
`;
