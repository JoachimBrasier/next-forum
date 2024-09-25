import { prisma } from '@/lib/prisma';

import { Link } from '@/i18n/routing';

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
    <div className="divide-y divide-solid">
      {categories.map((category) => (
        <div key={category.id} className="px-4 py-2">
          <div>
            <Link href={`/category/${category.slug}`} className="inline-block cursor-pointer text-sm hover:underline">
              {category.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
