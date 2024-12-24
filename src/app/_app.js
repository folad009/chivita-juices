import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Chivita Juices</title>
        <meta name="description" content="We provide quality fruit juices for healthy living." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;