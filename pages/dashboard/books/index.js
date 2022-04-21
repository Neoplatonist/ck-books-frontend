import Link from "next/link";

const Books = () => {
  return (
    <>
      <h1 className="w-full text-center mt-10 subpixel-antialiased">Books Read</h1>
      <h2 className="w-full text-center mt-10 subpixel-antialiased">Favorite Books Filter</h2>

      <div className="text-center mt-10 subpixel-antialiased text-2xl">
        <Link href="/dashboard/books/1"><a className=" hover:border">Book 1</a></Link>
        {' - '}
        <Link href="/library/book/1/page/1"><a className=" hover:border">Read</a></Link>
      </div>

      <div className="text-center mt-10 subpixel-antialiased text-2xl">
        <Link href="/dashboard/books/2"><a className=" hover:border">Book 2</a></Link>
        {' - '}
        <Link href="/library/book/2/page/2"><a className=" hover:border">Read</a></Link>
      </div>

      <div className="text-center mt-10 subpixel-antialiased text-2xl">
        <Link href="/dashboard/books/3"><a className=" hover:border">Book 3</a></Link>
        {' - '}
        <Link href="/library/book/3/page/1"><a className=" hover:border">Read</a></Link>
      </div>
    </>
  );
};

export default Books;
