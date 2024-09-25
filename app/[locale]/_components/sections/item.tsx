import { memo } from 'react';

import { Section } from '@prisma/client';
import clsx from 'clsx';

import { Categories } from '@/components/common';

import s from './item.module.css';

export default memo(function Item({ data }: { data: Section }) {
  return (
    <div key={data.id} className={s.root}>
      <div className={s.header}>
        <h2 className={s.title}>{data.name}</h2>
      </div>
      <div className={clsx(s.body, { [s.bodyEmpty]: data._count.categories === 0 })}>
        {data._count.categories === 0 ? 'This section is empty' : <Categories section={data.id} />}
      </div>
    </div>
  );
});
