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
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import Error404 from '../404';
import { wrapper } from '../../store/store';
import * as actions from '../../store/modules/RootActions';
import { END } from '@redux-saga/core';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import * as S from '../../styles/globalStyles';

const PostDetailDog = () => {
  const router = useRouter();
  const { id } = router.query;
  if (router.isFallback) {
    return <Error404 />;
  }
  const { mainCardData } = useSelector((state: any) => state.MainCard);
  const dogInfo = mainCardData.MainCard;
  const dogCard = dogInfo.card?.filter((el: any) => el?.id === Number(id));

  return (
    <>
      <DetailDogsData>
        <DetailDogImg
          src={dogCard[0]?.image.url}
          alt="detail dog"
          width={300}
          height={300}
        />
        <p>품종:{dogCard[0]?.breed_group}</p>
        <p>이름:{dogCard[0]?.name}</p>
        <p>역할:{dogCard[0]?.breed_group}</p>
        <p>이름:{dogCard[0]?.life_span}</p>
        <Link href="/">
          <S.MainEngineButton comeBackBtn>돌아가기</S.MainEngineButton>
        </Link>
      </DetailDogsData>
    </>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(async ({ store }) => {
    store.dispatch(actions.getMainCard(''));
    store.dispatch(END);
    await store.sagaTask?.toPromise();
  });
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
