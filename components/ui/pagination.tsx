'use client';

import { memo } from 'react';

import clsx from 'clsx';
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react';
import { useTranslations } from 'next-intl';
import RCPagination, { PaginationProps } from 'rc-pagination';

import { defaultPage, defaultPageSize, defaultPageSizeOptions } from '@/lib/pagination';

export default memo(function Pagination(props: PaginationProps) {
  const t = useTranslations('Pagination');

  return (
    <RCPagination
      locale={{
        items_per_page: t('items_per_page'),
        jump_to: t('jump_to'),
        jump_to_confirm: t('jump_to_confirm'),
        page: t('page'),
        prev_page: t('prev_page'),
        next_page: t('next_page'),
        prev_5: t('prev_5'),
        next_5: t('next_5'),
        prev_3: t('prev_3'),
        next_3: t('next_3'),
        page_size: t('page_size'),
      }}
      className={clsx({
        'justify-start': props?.align === 'start',
        'justify-center': props?.align === 'center',
        'justify-end': props?.align === 'end',
      })}
      hideOnSinglePage
      defaultCurrent={defaultPage}
      defaultPageSize={defaultPageSize}
      pageSizeOptions={defaultPageSizeOptions}
      showPrevNextJumpers
      showLessItems
      showQuickJumper
      prevIcon={() => <ChevronLeft className="shrink-0 size-3.5" />}
      nextIcon={() => <ChevronRight className="shrink-0 size-3.5" />}
      jumpNextIcon={() => <Ellipsis className="shrink-0 size-3.5" />}
      jumpPrevIcon={() => <Ellipsis className="shrink-0 size-3.5" />}
      {...props}
    />
  );
});
