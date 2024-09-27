'use client';

import { Prisma } from '@prisma/client';
import { isBefore, isEqual } from 'date-fns';
import { useTranslations } from 'next-intl';
import { useFormatter } from 'next-intl';

type Props = {
  topic: Prisma.TopicGetPayload<{ include: { tag: true; user: true } }>;
};

export default function Header({ topic }: Props) {
  const format = useFormatter();
  const t = useTranslations('Forum');

  return (
    <div className="mb-4">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">{topic.title}</h1>
      <div className="inline-flex items-center gap-4">
        {topic.tag?.name && (
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            {topic.tag.name}
          </span>
        )}
        {topic?.published_at && (
          <>
            <div className="hs-tooltip [--placement:top] inline-flex justify-center items-center">
              <span className="hs-tooltip-toggle text-xs font-medium text-gray-600 dark:text-neutral-400">
                {t('topic.header.published', { relativeTime: format.relativeTime(topic.published_at) })}
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                  role="tooltip"
                >
                  {format.dateTime(topic.published_at, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                </span>
              </span>
            </div>
            {!isEqual(topic.published_at, topic.updated_at) && !isBefore(topic.updated_at, topic.published_at) ? (
              <div className="hs-tooltip [--placement:top] inline-flex justify-center items-center">
                <span className="hs-tooltip-toggle text-xs font-medium text-gray-600 dark:text-neutral-400">
                  {t('topic.header.updated', { relativeTime: format.relativeTime(topic.updated_at) })}
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                    role="tooltip"
                  >
                    {format.dateTime(topic.updated_at, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                    })}
                  </span>
                </span>
              </div>
            ) : null}
          </>
        )}
        <span className="text-xs font-medium text-gray-600 dark:text-neutral-400">{t('topic.header.views', { count: topic.views })}</span>
      </div>
    </div>
  );
}
