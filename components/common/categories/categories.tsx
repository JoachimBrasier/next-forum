import { prisma } from '@/lib/prisma';

import { Link } from '@/i18n/routing';

import s from './categories.module.css';

type Props = {
  parentCategory?: string;
  section?: string;
};

export default async function Categories({ parentCategory, section }: Props) {
  const categories = await prisma.category.findMany({
    where: {
      parent_category_id: parentCategory ?? null,
      ...(!!section ? { section_id: section } : {}),
    },
    include: {
      _count: {
        select: { sub_categories: true, topics: true },
      },
    },
  });

  return (
    <div className={s.root}>
      {categories.map((category) => (
        <div key={category.id} className={s.item}>
          <div>
            <Link href={`/category/${category.slug}`} className={s.title}>
              {category.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
