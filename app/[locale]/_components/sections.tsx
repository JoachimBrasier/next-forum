import { prisma } from '@/lib/prisma';

import Item from './item';

export default async function List() {
  const sections = await prisma.section.findMany({
    include: { _count: { select: { categories: true } } },
  });

  if (!sections.length) {
    return 'Empty';
  }

  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      {sections.map((section) => (
        <Item key={section.id} data={section} />
      ))}
    </div>
  );
}
