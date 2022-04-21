import Link from "next/link";

// Utils
import { getAllCategories } from '@/libs/api';

export default function CategoryNav({ allCategories }) {
  return (
    <nav className="category-nav">
      <ul>
        {allCategories.map(category => (
          <li key={category.id}>
            <Link href={`/category/${category.slug}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export async function getStaticProps() {
  const allCategories = (await getAllCategories()) || [];

  return {
    props: { allCategories },
  };
}
