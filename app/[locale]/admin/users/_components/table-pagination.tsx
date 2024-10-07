'use client';

import { useSearchParams } from 'next/navigation';

import Pagination from '@/components/ui/pagination';

import { defaultPage, defaultPageSize } from '@/lib/pagination';

import { usePathname, useRouter } from '@/i18n/routing';

type Props = {
  total: number;
  page: number;
  size: number;
};

export default function TablePagination({ total, page, size }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onPageChange = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === defaultPage) {
      params.delete('page');
    } else {
      params.set('page', pageNumber.toString());
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const onSizeChange = (pageSize: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageSize === defaultPageSize) {
      params.delete('size');
    } else {
      params.set('size', pageSize.toString());
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return <Pagination {...{ total }} align="end" current={page} pageSize={size} onChange={onPageChange} onShowSizeChange={onSizeChange} />;
}
