//최종본 => staticPath, staticProps
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import * as S from '../../styles/globalStyles';
import React, { useState } from 'react';
import axios from '../../libraries/axios/index';
import Link from 'next/link';
import MainCard from '../../components/organisms/MainCard';
import Loading from '../../components/atoms/Loading';
import dynamic from 'next/dynamic';
import LikeBtn from '../../components/atoms/atomButton/LikeBtn';
import DetailSinglePage from '../../components/molecules/DetailSinglePage';

const PostDetailDog = ({ item }: any) => {
  const [visible, setVisible] = useState<boolean>(false);
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const isVisible = () => {
    setVisible(!visible);
  };
  const DetailImgViewer = dynamic(() => import('react-viewer'), { ssr: false });
  const imageSrc = [{ src: item.url }];

  return (
    <>
      <DetailDogsData>
        <h1>상세 강아지</h1>
        <DetailSinglePage item={item} />
        <S.MainEngineButton viewerBtn onClick={isVisible}>
          이미지
        </S.MainEngineButton>
        <DetailImgViewer
          visible={visible}
          onClose={isVisible}
          images={imageSrc}
        />
        <Link href="/">
          <S.MainEngineButton comeBackBtn>돌아가기</S.MainEngineButton>
        </Link>
        <MainCard />
      </DetailDogsData>
    </>
  );
};

export async function getStaticPaths() {
  const API_URL = 'https://api.thedogapi.com/v1/breeds';
  const res = await axios.get(API_URL);
  const data = res.data;
  return {
    paths: data.map((item: any) => ({
      params: {
        id: item.id.toString()
      }
    })),
    fallback: true
  };
}

export async function getStaticProps(context: any) {
  const id = context.params.id;
  const API_URL = `https://api.thedogapi.com/v1/images/${id}`;
  const res = await axios.get(API_URL);
  const data = res.data;
  console.log(data);

  return {
    props: {
      item: data
    }
  };
}
export default PostDetailDog;

const DetailDogsData = styled.div`
  max-width: 850px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
`;

const DetailDogImg = styled.img`
  border-radius: 20px;
`;

/**
 *
 * 첫번쨰 방법 => useSelecor로 다불러와서 id값 비교
 * 첫번쨰 방법 => useSelecor로 다불러와서 id값 비교
 * 첫번쨰 방법 => useSelecor로 다불러와서 id값 비교
 * 첫번쨰 방법 => useSelecor로 다불러와서 id값 비교
 * 첫번쨰 방법 => useSelecor로 다불러와서 id값 비교
 */
// import { useRouter } from 'next/dist/client/router';
// import Link from 'next/link';
// import { GetServerSideProps } from 'next';
// import Error404 from '../404';
// import { wrapper } from '../../store/store';
// import * as actions from '../../store/modules/RootActions';
// import { END } from '@redux-saga/core';
// import { useSelector } from 'react-redux';
// import styled from 'styled-components';
// import * as S from '../../styles/globalStyles';

// const PostDetailDog = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   if (router.isFallback) {
//     return <Error404 />;
//   }
//   const dogDataId: any = id;

//   const { mainCardData } = useSelector((state: any) => state.MainCard);
//   const dogInfo = mainCardData.MainCard;
//   const dogCard = dogInfo.card?.filter(
//     (el: any) => el?.id === Number(dogDataId)
//   );
//   console.log(dogCard);
//   return (
//     <>
//       <DetailDogsData>
//         <DetailDogImg
//           src={dogCard[0]?.image.url}
//           alt="detail dog"
//           width={300}
//           height={300}
//         />
//         <p>품종:{dogCard[0]?.breed_group}</p>
//         <p>이름:{dogCard[0]?.name}</p>
//         <p>역할:{dogCard[0]?.breed_group}</p>
//         <p>이름:{dogCard[0]?.life_span}</p>
//         <Link href="/">
//           <S.MainEngineButton comeBackBtn>돌아가기</S.MainEngineButton>
//         </Link>
//       </DetailDogsData>
//     </>
//   );
// };

// export const getServerSideProps: GetServerSideProps =
//   wrapper.getServerSideProps(async ({ store }) => {
//     store.dispatch(actions.getMainCard(''));
//     store.dispatch(END);
//     await store.sagaTask?.toPromise();
//   });
// export default PostDetailDog;

// const DetailDogsData = styled.div`
//   max-width: 850px;
//   margin: 0 auto;
//   margin-top: 100px;
//   text-align: center;
// `;

// const DetailDogImg = styled.img`
//   border-radius: 20px;
// `;

/**
 *
 *
 *
 *
 * 2번째 방법 그냥 유즈이펙트
 * 2번째 방법 그냥 유즈이펙트
 * 2번째 방법 그냥 유즈이펙트
 * 2번째 방법 그냥 유즈이펙트
 * 2번째 방법 그냥 유즈이펙트
 *
 */

// import { useRouter } from 'next/dist/client/router';
// import styled from 'styled-components';
// import * as S from '../../styles/globalStyles';
// import React, { useEffect, useState } from 'react';
// import axios from '../../libraries/axios/index';
// import Link from 'next/link';
// import Error404 from '../404';
// import { GetServerSideProps } from 'next';
// import { wrapper } from '../../store/store';
// import { END } from '@redux-saga/core';
// import * as actions from '../../store/modules/RootActions';
// import MainCard from '../../components/organisms/MainCard';

// const PostDetailDog = ({ dogData }: any) => {
//   console.log('===================');
//   console.log(dogData);
//   const [test, setTest] = useState<any>('');
//   const router = useRouter();
//   const { id } = router.query;
//   if (router.isFallback) {
//     return <Error404 />;
//   }

//   useEffect(() => {
//     if (id)
//       axios.get(`images/${id}`).then((res) => {
//         setTest(res.data);
//       });
//   }, [id]);

//   return (
//     <>
//       <DetailDogsData>
//         {test && (
//           <>
//             <DetailDogImg
//               src={test.url}
//               alt="detail dog"
//               width={300}
//               height={300}
//             />
//             <p>품종:{test.breeds[0].breed_group}</p>
//             <p>이름:{test.breeds[0].name}</p>
//             <p>역할:{test.breeds[0].bred_for}</p>
//             <p>인생:{test.breeds[0].life_span}</p>
//           </>
//         )}

//         <Link href="/">
//           <S.MainEngineButton comeBackBtn>돌아가기</S.MainEngineButton>
//         </Link>
//         <MainCard />
//       </DetailDogsData>
//     </>
//   );
// };

// export async function getServerSideProps(context: any) {
//   const { id } = context.query;
//   console.log(id);
//   const res = await fetch(`https://api.thedogapi.com/v1/images/${id}`);
//   const dogData = await res.json();

//   console.log(`ssr?????: ${dogData}`);
//   console.log(dogData);
//   return { props: { dogData: dogData } };
// }
// export default PostDetailDog;

// const DetailDogsData = styled.div`
//   max-width: 850px;
//   margin: 0 auto;
//   margin-top: 100px;
//   text-align: center;
// `;

// const DetailDogImg = styled.img`
//   border-radius: 20px;
// `;

/**
 * 
 * 
 * 3번쨰 방법 => getServerSideProps
 * 3번쨰 방법 => getServerSideProps 
 * 3번쨰 방법 => getServerSideProps
 * 3번쨰 방법 => getServerSideProps
 * 3번쨰 방법 => getServerSideProps

 */
// import { useRouter } from 'next/dist/client/router';
// import styled from 'styled-components';
// import * as S from '../../styles/globalStyles';
// import React, { useEffect, useState } from 'react';
// import axios from '../../libraries/axios/index';
// import Link from 'next/link';
// import Error404 from '../404';
// import { GetServerSideProps } from 'next';
// import { wrapper } from '../../store/store';
// import { END } from '@redux-saga/core';
// import * as actions from '../../store/modules/RootActions';
// import MainCard from '../../components/organisms/MainCard';

// const PostDetailDog = ({ dogData }: any) => {
//   const router = useRouter();
//   if (router.isFallback) {
//     return <Error404 />;
//   }

//   return (
//     <>
//       <DetailDogsData>
//         {dogData && (
//           <>
//             <DetailDogImg
//               src={dogData.url}
//               alt="detail dog"
//               width={300}
//               height={300}
//             />
//             <p>품종:{dogData.breeds[0].breed_group}</p>
//             <p>이름:{dogData.breeds[0].name}</p>
//             <p>역할:{dogData.breeds[0].bred_for}</p>
//             <p>인생:{dogData.breeds[0].life_span}</p>
//           </>
//         )}

//         <Link href="/">
//           <S.MainEngineButton comeBackBtn>돌아가기</S.MainEngineButton>
//         </Link>
//         <MainCard />
//       </DetailDogsData>
//     </>
//   );
// };

// export async function getServerSideProps(context: any) {
//   const { id } = context.query;
//   console.log(id);
//   const res = await fetch(`https://api.thedogapi.com/v1/images/${id}`);
//   const dogData = await res.json();

//   console.log(`ssr?????: ${dogData}`);
//   console.log(dogData);
//   return { props: { dogData: dogData } };
// }
// export default PostDetailDog;

// const DetailDogsData = styled.div`
//   max-width: 850px;
//   margin: 0 auto;
//   margin-top: 100px;
//   text-align: center;
// `;

// const DetailDogImg = styled.img`
//   border-radius: 20px;
// `;
