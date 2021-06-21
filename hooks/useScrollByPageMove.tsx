import { useEffect } from 'react';
import Router from 'next/router';

function saveScroll(scrollPosition: string) {
  const scroll = { x: window.scrollX, y: window.scrollY };
  sessionStorage.setItem(scrollPosition, JSON.stringify(scroll));
}

function restoreScroll(scrollPosition: string) {
  const scroll = JSON.parse(sessionStorage.getItem(scrollPosition) || '');
  if (scroll) {
    window.scrollTo(scroll.x, scroll.y);
  }
}

export default function useScrollRestoration(router: any) {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      restoreScroll(router.asPath);
      console.log(router.asPath);

      const onRouteChangeStart = () => {
        saveScroll(router.asPath);
      };
      //routeChangeStart => 경로가 변경되면 실행된다.
      Router.events.on('routeChangeStart', onRouteChangeStart);
      return () => {
        Router.events.off('routeChangeStart', onRouteChangeStart);
      };
    }
  }, [router]);
}
