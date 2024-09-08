import { Empty } from '@/components/ui';

import { prisma } from '@/lib/prisma';

import Item from './item';

import s from './list.module.css';

export default async function List() {
  const sections = await prisma.section.findMany({
    include: { _count: { select: { categories: true } } },
  });

  if (!sections.length) {
    return <Empty />;
  }

  return (
    <div className={s.root}>
      {sections.map((section) => (
        <Item key={section.id} data={section} />
      ))}
    </div>
  );
}
