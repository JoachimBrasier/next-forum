import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Prisma } from '@prisma/client';

import { prisma } from '@/lib/prisma';

import Header from './_components/header';

type Props = {
  params: {
    id: string;
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = await prisma.topic.findUnique({
    where: {
      id: params.id,
      slug: params.slug,
      status: 'PUBLISHED',
    },
    select: {
      title: true,
    },
  });

  if (!topic) {
    return notFound();
  }

  return {
    title: topic?.title,
  };
}

export default async function Category({ params }: Props) {
  const topic: Prisma.TopicGetPayload<{ include: { tag: true; user: true } }> | null = await prisma.$transaction(async (tx) => {
    // Increments views by 1 when page load on server only
    await prisma.topic.update({
      where: {
        id: params.id,
        slug: params.slug,
        status: 'PUBLISHED',
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    // Find topic item with tag and author
    return await prisma.topic.findUnique({
      where: {
        id: params.id,
        slug: params.slug,
        status: 'PUBLISHED',
      },
      include: {
        tag: true,
        user: true,
      },
    });
  });

  if (!topic) {
    return notFound();
  }

  return (
    <div className="maxScreenSize py-4">
      <Header {...{ topic }} />
      <div className="border border-gray-200 dark:border-neutral-700 rounded-xl overflow-hidden">
        <div className="p-4" dangerouslySetInnerHTML={{ __html: topic.content }} />
      </div>
    </div>
  );
}
