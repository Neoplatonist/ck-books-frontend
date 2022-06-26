import Head from 'next/head';
import Meta from '@/components/landingPage/meta';
// import Footer from '@/components/footer';

export default function LandingPageLayout({ children }) {
  return (
    <>
      <Meta />

      <Head>
        <title>Books | Cuppa Kappa</title>
        <meta name="description" content="Learn english with creativity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  );
}
