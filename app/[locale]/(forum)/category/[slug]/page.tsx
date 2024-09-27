import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import clsx from 'clsx';
import { getTranslations } from 'next-intl/server';

import Categories from '@/components/common/categories';

import { prisma } from '@/lib/prisma';

import { Link } from '@/i18n/routing';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await prisma.category.findUnique({
    where: {
      slug: params.slug,
    },
    select: {
      name: true,
    },
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
    where: {
      slug: params.slug,
    },
    include: {
      sub_categories: true,
      tags: true,
      topics: {
        where: {
          status: 'PUBLISHED',
        },
        include: {
          tag: true,
        },
      },
    },
  });

  if (!category) {
    return notFound();
  }

  return (
    <div className="maxScreenSize py-4">
      <h1 className="text-lg mb-4 font-bold">{category.name}</h1>
      {category.sub_categories.length !== 0 && (
        <div className="border rounded-md overflow-hidden mb-4">
          <h3 className="text-base font-semibold p-2 bg-gray-100 border-b">Subcategories</h3>
          <Categories parentCategory={category.id} />
        </div>
      )}
      <div className="flex flex-row flex-nowrap mb-4">
        <Link href={`/category/${category.slug}/new-topic`} className="ml-auto" aria-label={t('category.newTopicButton.description')}>
          {t('category.newTopicButton.text')}
        </Link>
      </div>
      <div className="border rounded-md overflow-hidden divide-y divide-solid">
        <div>
          <h3 className={clsx('text-base font-semibold p-2 bg-gray-100', { 'border-b': false })}>Pinned topics</h3>
          <div className="flex flex-col divide-y divide-solid"></div>
        </div>
        <div>
          <h3 className={clsx('text-base font-semibold p-2 bg-gray-100', { 'border-b': category.topics.length !== 0 })}>Topics</h3>
          <div className="flex flex-col divide-y divide-solid">
            {category.topics.map((topic) => (
              <Link key={topic.id} href={`/topic/${topic.id}/${topic.slug}`} className="text-sm p-2 flex items-center gap-2">
                {topic.tag && <span className="border bg-gray-100 rounded text-xs px-1 py-0.5">{topic.tag.name}</span>} {topic.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
