import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('%c 해야만 한다', `color: peru; font-size: 40px;`);
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
