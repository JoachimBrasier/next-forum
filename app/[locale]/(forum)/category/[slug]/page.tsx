import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getTranslations } from 'next-intl/server';

import Categories from '@/components/common/categories';

import { prisma } from '@/lib/prisma';

import { Link } from '@/i18n/routing';

import TopicItem from './_components/topic-item';

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
          user: true,
          _count: {
            select: {
              comments: true,
            },
          },
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
          <h3 className="text-base font-semibold p-2 bg-gray-100 border-b">{t('category.subCategories')}</h3>
          <Categories parentCategory={category.id} />
        </div>
      )}
      <div className="flex flex-row flex-nowrap mb-4">
        <Link
          href={`/category/${category.slug}/new-topic`}
          className="ml-auto py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          aria-label={t('category.newTopicButton.description')}
        >
          {t('category.newTopicButton.text')}
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg overflow-hidden dark:border-neutral-700">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-50 dark:bg-neutral-700">
                  <tr>
                    <th scope="col" className="w-full p-3 text-start text-sm font-medium text-gray-500 dark:text-neutral-500">
                      {t('category.topicTable.columns.topic')}
                    </th>
                    <th scope="col" align="center" className="p-3 text-center text-sm font-medium text-gray-500 dark:text-neutral-500" />
                    <th scope="col" align="center" className="p-3 text-center text-sm font-medium text-gray-500 dark:text-neutral-500">
                      {t('category.topicTable.columns.comments')}
                    </th>
                    <th scope="col" align="center" className="p-3 text-center text-sm font-medium text-gray-500 dark:text-neutral-500">
                      {t('category.topicTable.columns.views')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {category.topics.map((topic) => (
                    <TopicItem key={topic.id} {...{ topic }} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
