import { AppProps } from 'next/app';
import '../styles/globals.scss';
import * as gtag from '../lib/gtag';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className='app'>
      <main className='wrapper'>
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default MyApp;
