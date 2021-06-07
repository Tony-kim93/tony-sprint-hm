import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import Error404 from '../404';
import { wrapper } from '../../store/store';
import * as actions from '../../store/modules/RootActions';
import { END } from '@redux-saga/core';
import { useSelector } from 'react-redux';

const PostDetailDog = () => {
  const router = useRouter();
  const { id } = router.query;
  if (router.isFallback) {
    return <Error404 />;
  }
  const dogDataId: any = id;
  const { mainCardData, order } = useSelector((state: any) => state.MainCard);
  const dogInfo = mainCardData.MainCard.card[dogDataId];
  return (
    <div>
      <img src={dogInfo.image.url} alt="detail dog" width={100} height={100} />
      <p>품종:{dogInfo.breed_group}</p>
      <p>이름:{dogInfo.name}</p>
      <Link href="/">
        <div>돌아가기</div>
      </Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(async ({ store }) => {
    store.dispatch(actions.getMainCard(''));
    store.dispatch(END);
    await store.sagaTask?.toPromise();
  });
export default PostDetailDog;
