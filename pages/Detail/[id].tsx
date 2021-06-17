import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DetailCard from '../../components/molcules/DetailCard';
import { GetServerSideProps } from 'next';
import Button from '../../components/atoms/Button';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Error from '../../pages/404';
import Img from '../../components/atoms/Img';
import axios from '../../libraries/axios/index';
import { getVotes } from '../../store/sagas/sagaAPI/sagaAPI';
import { useSelector } from 'react-redux';
import Card from '../../components/molcules/Card';
import * as S from '../../styles/globalStyles';
import styled from 'styled-components';

//type ItemType쓰면댐
export default function DetailPage({ item }: any) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [likeDogData, setLikeDogData] = useState<any>([]);
  const [voteId, setVoteId] = useState<number>(0);
  const { card } = useSelector((state: any) => state.mainPage);

  const DetailImgViewer = dynamic(() => import('react-viewer'), { ssr: false });
  const imageSrc = [{ src: item.url }];
  const router = useRouter();
  if (router.isFallback) {
    return <Error />;
  }
  const getDetailPageImgId = item.breeds[0].reference_image_id;
  const getArrIncludeImgId = likeDogData?.filter(
    (el: any) => el.image_id === getDetailPageImgId
  );
  const isValue = getArrIncludeImgId[0]?.value === 1;

  //API통신하는 부분을 전체적으로 고민(분리)
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

  useEffect(() => {
    getVotes('sub_id=TonyK').then((result) => {
      if (result.status === 200) {
        setLikeDogData(result.data);
        setVoteId(getArrIncludeImgId[0]?.id);
      }
    });
  }, [voteId]);
  return (
    <DetailWrapper>
      <h1>상세 페이지</h1>
      <DetailCard item={item} />
      <Link href="/">
        <a>
          <Button type="comeBackBtn" name="돌아가기" />
        </a>
      </Link>
      {/* <Button name="gg" onClick={() => router.back()} /> */}
      <Button
        type="viewerBtn"
        onClick={() => setIsVisible(!isVisible)}
        name="이미지"
      />
      <DetailImgViewer
        visible={isVisible}
        onClose={() => setIsVisible(!isVisible)}
        images={imageSrc}
      />
      {isValue ? (
        <Img
          //상수로 분리 => 좋지못한코드
          src="/assets/redheart.png"
          alt="redheart"
          onClick={sendUnLikeVote}
          width={15}
          height={15}
        />
      ) : (
        <Img
          src="/assets/heart.png"
          alt="heart"
          onClick={sendLikeVote}
          width={15}
          height={15}
        />
      )}
      <S.GridMainCard>
        {card?.map((item: any) => {
          return (
            <Link key={item.id} href={`/Detail/${item.image.id}`}>
              <a>
                <Card item={item} />
              </a>
            </Link>
          );
        })}
      </S.GridMainCard>
    </DetailWrapper>
  );
}

export async function getServerSideProps(context: any) {
  const test2 = Math.floor(Math.random() * 10);
  console.log(test2);
  console.log('ssp');
  const { id } = context.query;
  const res = await fetch(`https://api.thedogapi.com/v1/images/${id}`);
  const item = await res.json();
  return { props: { item } };
}

const DetailWrapper = styled.div`
  max-width: 850px;
  margin: 0 auto;
`;
