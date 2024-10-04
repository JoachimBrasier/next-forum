import { memo } from 'react';

import { Prisma } from '@prisma/client';
import { useFormatter, useTranslations } from 'next-intl';

import Avatar from '@/components/ui/avatar';

import { Link } from '@/i18n/routing';

type Props = {
  topic: Prisma.TopicGetPayload<{ include: { tag: true; user: true; _count: { select: { comments: true } } } }>;
};

export default memo(function TopicItem({ topic }: Props) {
  const t = useTranslations('Forum');
  const format = useFormatter();

  return (
    <tr>
      <td className="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 space-x-2">
        {topic.tag?.name && (
          <span className="inline-flex items-center w-fit gap-x-0.5 py-0.5 px-2 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            {topic.tag.name}
          </span>
        )}
        <Link prefetch href={`/topic/${topic.id}/${topic.slug}`}>
          {topic.title}
        </Link>
      </td>
      <td className="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
        <div className="flex -space-x-2 flex-shrink-0">
          <div className="hs-tooltip inline-flex !h-fit !w-fit [--placement:top]">
            <Avatar
              image={topic?.user?.image}
              fallbackText={topic?.user?.name}
              fallbackMode="text"
              size="xs"
              className="ring-2 ring-white dark:ring-neutral-900"
            />
            <span
              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
              role="tooltip"
            >
              {t('category.topicTable.item.authorTooltip')}
            </span>
          </div>
        </div>
      </td>
      <td align="center" className="p-3 text-center whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        {format.number(topic._count.comments, { compactDisplay: 'short', notation: 'compact' })}
      </td>
      <td align="center" className="p-3 text-center whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        {format.number(topic.views, { compactDisplay: 'short', notation: 'compact' })}
      </td>
    </tr>
  );
});
