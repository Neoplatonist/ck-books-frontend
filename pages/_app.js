// import { SessionProvider } from 'next-auth/react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    // <SessionProvider session={pageProps.session} refetchInterval={0}>
    <Component {...pageProps} />
    // </SessionProvider>
  );
}

export default MyApp;
