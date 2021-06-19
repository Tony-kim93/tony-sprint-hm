import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '../../components/atoms/Button';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Error from '../../pages/404';
import * as API from '../../api/index';
import { useSelector } from 'react-redux';
import Card from '../../components/molcules/Card';
import * as S from '../../styles/globalStyles';
import styled from 'styled-components';
import Toggle from '../../components/molcules/Toggle';

//type ItemType쓰면댐
export default function DetailPage({ item }: any) {
  const [likeArr, setLikeArr] = useState<any>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { card } = useSelector((state: any) => state.mainPage);
  const DetailImgViewer = dynamic(() => import('react-viewer'), { ssr: false });
  const imageSrc = [{ src: item.url }];
  const router = useRouter();
  if (router.isFallback) {
    return <Error />;
  }
  const sendLikeVote = async () => {
    const result = await API.sendLikeVotes({
      image_id: item.breeds[0].reference_image_id,
      sub_id: 'eric',
      value: 1
    });
    if (result.status === 200) return result.data.id;
  };
  const sendUnLikeVote = (voteId: any) => {
    API.deleteVotes(`${voteId}`);
  };

  // //image id값 받아오기
  useEffect(() => {
    API.getVotes('eric').then((result) => {
      if (result.status === 200) {
        setLikeArr(result.data.filter((el: any) => el.image_id === item.id));
      }
    });
  }, []);
  return (
    <DetailWrapper>
      <h1>상세 페이지</h1>
      <Card
        url={item.url}
        breedGroup={item.breeds[0].breed_group}
        name={item.breeds[0].name}
        width={350}
        height={350}
      />
      <Link href="/">
        <a>
          <Button type="comeBackBtn" name="돌아가기" />
        </a>
      </Link>
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
      <Toggle
        src1="/assets/redheart.png"
        src2="/assets/heart.png"
        sendEnroll={sendLikeVote}
        sendCancel={sendUnLikeVote}
        id={item.breeds[0].reference_image_id}
        likeArr={likeArr}
      />
      <S.GridMainCard>
        {card?.map((item: any) => {
          return (
            <Link key={item.id} href={`/Detail/${item.image.id}`}>
              <a>
                <Card
                  url={item.image.url}
                  breedGroup={item.breed_group}
                  name={item.name}
                  width={100}
                  height={100}
                />
              </a>
            </Link>
          );
        })}
      </S.GridMainCard>
    </DetailWrapper>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const res = await fetch(`https://api.thedogapi.com/v1/images/${id}`);
  const item = await res.json();
  return { props: { item } };
}

const DetailWrapper = styled.div`
  max-width: 850px;
  margin: 0 auto;
`;
