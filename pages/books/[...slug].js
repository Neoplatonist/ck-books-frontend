import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Book({ slug }) {
  const pages = [1, 2, 3, 4, 5];
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const isArr = slug.length > 1;
  console.log(isArr);

  return (
    <div>
      {slug[0].replace(/-/g, ' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}

      <br />

      {
        slug.length > 1 ? (
          <Link href={`/books/${slug[0]}/${slug[1]}`} passHref>
            <a>Page {slug[1]}</a>
          </Link>
        ) : null
      }
    </div>
  );
}

export async function getStaticProps(context) {
  console.log(context.params);
  return {
    props: {
      slug: context.params.slug,
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: ['the-lord-of-the-rings', '1'] } },
      { params: { slug: ['the-lord-of-the-rings', '2'] } },
      { params: { slug: ['the-lord-of-the-rings', '3'] } },
      { params: { slug: ['the-hobbit', '1'] } },
      { params: { slug: ['the-hobbit', '2'] } },
      { params: { slug: ['the-hobbit', '3'] } },
      { params: { slug: ['the-hobbit', '4'] } },
      { params: { slug: ['the-hobbit', '5'] } },
      { params: { slug: ['the-catcher-in-the-rye', '1'] } },
      { params: { slug: ['the-great-gatsby', '1'] } },
    ],
    fallback: false,
  };
}

export default Book;
