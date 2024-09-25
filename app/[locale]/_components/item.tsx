import { memo } from 'react';

import { Prisma } from '@prisma/client';
import clsx from 'clsx';

import Categories from '@/components/common/categories';

export default memo(function Item({ data }: { data: Prisma.SectionGetPayload<{ include: { _count: true } }> }) {
  return (
    <div key={data.id} className="overflow-hidden rounded-md border">
      <div className="border-b bg-gray-100 px-4 py-2">
        <h2 className="text-lg font-bold text-black">{data.name}</h2>
      </div>
      <div className={clsx({ 'px-4 py-2': data._count.categories === 0 })}>
        {data._count.categories === 0 ? 'This section is empty' : <Categories section={data.id} />}
      </div>
    </div>
  );
});
