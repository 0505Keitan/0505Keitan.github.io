import { AppProps } from 'next/app';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='app'>
      <main className='wrapper'>
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default MyApp;
