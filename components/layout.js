import Meta from '@/components/meta';
import Footer from '@/components/footer';

export default function Layout({ children }) {
  return (
    <>
      <Meta />

      {children}

      <Footer />
    </>
  );
}
