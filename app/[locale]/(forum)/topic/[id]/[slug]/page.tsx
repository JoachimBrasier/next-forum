import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { prisma } from '@/lib/prisma';

type Props = {
  params: {
    id: string;
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = await prisma.topic.findUnique({
    where: { id: params.id, slug: params.slug },
    select: { title: true },
  });

  if (!topic) {
    return notFound();
  }

  return {
    title: topic?.title,
  };
}

export default async function Category({ params }: Props) {
  const topic = await prisma.topic.findUnique({
    where: { id: params.id, slug: params.slug },
    include: { comments: true, user: true },
  });

  if (!topic) {
    return notFound();
  }

  return (
    <div className="maxScreenSize py-4">
      <div className="mb-4">
        <h1 className="text-xl font-bold">{topic.title}</h1>
        <p>TAG</p>
      </div>
      <div>
        <span className="h-10 flex items-center">
          <h2>{topic?.user?.name ?? 'Deleted user'}</h2>
        </span>
        <div>CONTENT</div>
      </div>
      {topic.comments.map((comment) => (
        <div key={comment.id}>{comment.id}</div>
      ))}
    </div>
  );
}
