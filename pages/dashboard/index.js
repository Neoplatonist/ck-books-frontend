import Head from "next/head";
import Link from "next/link";

export default function Dashboard() {
  const book = [
    {
      title: "The Lord of the Rings",
    },
    {
      title: "The Hobbit",
    },
    {
      title: "The Catcher in the Rye",
    },
    {
      title: "The Great Gatsby",
    }
  ];

  return (
    <div style={{ minHeight: "90vh" }}>
      <Head>
        <title>Kappa Books | Dashboard</title>
      </Head>

      <div>
        <div>
          <h1 className="text-center mt-10 subpixel-antialiased">Dashboard</h1>
        </div>
      </div>

      <div className="text-center mt-10 subpixel-antialiased text-2xl">
        <Link href="/dashboard/stats"><a className="hover:border">My Performance</a></Link>
      </div>

      <div className="text-center mt-10 subpixel-antialiased text-2xl">
        <Link href="/dashboard/books"><a className="hover:border">My Books List</a></Link>
      </div>

      <div className="text-center mt-10 subpixel-antialiased text-2xl">
        <Link href="/dashboard/word-list"><a className="hover:border">My Word List</a></Link>
      </div>

      <div className="text-center mt-10 subpixel-antialiased text-2xl">
        <Link href="/library"><a className="hover:border">Books Library</a></Link>
      </div>

      <div>
        <div
          style={{ height: "50vh" }}
          className="w-full mt-10 flex flex-col items-center"
        >
          {/* {book.map((book) => (
            <div key={book.title}>
              <Link href={`/books/${book.title.replace(/ /g, '-').toLowerCase()}/1`} passHref>
                <button>{book.title}</button>
              </Link>
            </div>
          ))} */}
          {/* <button>+ Select your first book</button> */}
        </div>
      </div>
    </div>
  );
}
