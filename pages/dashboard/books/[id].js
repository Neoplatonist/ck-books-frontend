import { useRouter } from 'next/router';

const BookID = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1 className="w-full text-center mt-10 subpixel-antialiased">Book #{id} Progress, Description, Favorited?</h1>
    </>
  );
};

export default BookID;
