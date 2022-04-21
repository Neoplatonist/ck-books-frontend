import Link from 'next/link';
import { useRouter } from 'next/router';

const Book = () => {
  const router = useRouter();
  const { book } = router.query;

  return (
    <>
      <h1 className="text-center mt-10 subpixel-antialiased">Book: {book}</h1>

      <h3 className="text-center mt-10 subpixel-antialiased">Cover Photo</h3>
      <h3 className="text-center mt-10 subpixel-antialiased">Description</h3>

      <div className="text-center mt-10 subpixel-antialiased text-xl">
        <Link href={`${book}/page/1`} passHref>
          <a className="hover:border">Read</a>
        </Link>
      </div>
    </>
  );
};

export default Book;
