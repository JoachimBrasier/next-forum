import React from 'react';

import { defaultPage, defaultPageSize } from '@/lib/pagination';
import { prisma } from '@/lib/prisma';

import Table from './_components/table';
import TablePagination from './_components/table-pagination';

type Props = {
  searchParams?: {
    page?: string;
    size?: string;
  };
};

export default async function Admin({ searchParams }: Props) {
  const page = Number(searchParams?.page) || defaultPage;
  const size = Number(searchParams?.size) || defaultPageSize;
  const [users, totalUsers] = await prisma.$transaction([prisma.user.findMany({ skip: size * (page - 1), take: size }), prisma.user.count()]);

  return (
    <div className="space-y-4">
      <Table data={users} />
      <TablePagination {...{ page, size }} total={totalUsers} />
    </div>
  );
}
