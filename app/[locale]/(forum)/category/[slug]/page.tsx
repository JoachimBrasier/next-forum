import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getTranslations } from 'next-intl/server';

import { Categories } from '@/components/common';
import { Button } from '@/components/ui';

import { prisma } from '@/lib/prisma';

import { Link } from '@/i18n/routing';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await prisma.category.findUnique({
    where: { slug: params.slug },
    select: { name: true },
  });

  if (!category) {
    return notFound();
  }

  return {
    title: category?.name,
  };
}

export default async function Category({ params }: Props) {
  const t = await getTranslations('Forum');
  const category = await prisma.category.findUnique({
    where: { slug: params.slug },
    include: { sub_categories: true, topics: true },
  });

  if (!category) {
    return notFound();
  }

  return (
    <div className="maxScreenSize py-4">
      <h1 className="text-lg mb-4 font-bold">{category.name}</h1>
      {category.sub_categories.length !== 0 && (
        <div className="border rounded-md mb-4">
          <h3 className="text-base font-semibold p-2 bg-gray-100">Subcategories</h3>
          <Categories parentCategory={category.id} />
        </div>
      )}
      <div className="flex flex-row flex-nowrap mb-4">
        <Button
          link
          href={`/category/${category.slug}/new-topic`}
          variant="primary"
          className="ml-auto"
          aria-label={t('category.newTopicButton.description')}
        >
          {t('category.newTopicButton.text')}
        </Button>
      </div>
      <div className="border rounded-md overflow-hidden divide-y divide-solid">
        <h3 className="text-base font-semibold p-2 bg-gray-100">Pinned topics</h3>
        <h3 className="text-base font-semibold p-2 bg-gray-100">Topics</h3>
        <div className="flex flex-col divide-y divide-solid">
          {category.topics.map((topic) => (
            <Link key={topic.id} href={`/topic/${topic.slug}`} className="text-sm p-2">
              {topic.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
