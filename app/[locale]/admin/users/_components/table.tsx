'use client';

import React from 'react';

import { User } from '@prisma/client';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import clsx from 'clsx';
import { Ban, EllipsisVertical, LockKeyhole, Trash } from 'lucide-react';
import { useFormatter } from 'next-intl';

import Avatar from '@/components/ui/avatar';

type Props = {
  data: User[];
};

const columnHelper = createColumnHelper<User>();

export default function Table({ data }: Props) {
  const format = useFormatter();

  const statusTags = {
    ACTIVE: {
      label: 'Active',
      color: 'bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500',
    },
    BANNED: {
      label: 'Banned',
      color: 'bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-500',
    },
    DISABLED: {
      label: 'Disabled',
      color: 'bg-gray-100 text-gray-800 dark:bg-neutral-500/20 dark:text-neutral-400',
    },
  };

  const columns = [
    columnHelper.accessor('image', {
      meta: {
        style: {
          align: 'center',
        },
      },
      cell: (info) => <Avatar image={info.getValue()} size="sm" />,
    }),
    columnHelper.accessor('name', {
      header: () => <span>Name</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      size: 0,
      cell: (info) => {
        const statusConfig = statusTags[info.getValue()];

        return (
          <span className={clsx('py-1 px-2 whitespace-nowrap inline-flex items-center gap-x-1 text-xs font-medium rounded-full', statusConfig.color)}>
            {statusConfig.label}
          </span>
        );
      },
    }),
    columnHelper.accessor('createdAt', {
      header: () => <span>Registered</span>,
      size: 0,
      cell: (info) => {
        return format.dateTime(info.getValue(), {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        });
      },
    }),
    columnHelper.display({
      id: 'actions',
      size: 0,
      cell: (props) => {
        return (
          <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
            <button
              id={`user-dropdown-${props.row.original.id}`}
              type="button"
              className="hs-dropdown-toggle flex justify-center items-center p-2 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <EllipsisVertical className="flex-none size-4 text-gray-600 dark:text-neutral-500" />
            </button>
            <div
              className="hs-dropdown-menu transition-[opacity,margin] z-10 duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby={`user-dropdown-${props.row.original.id}`}
            >
              <div className="p-1 space-y-0.5">
                <button className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                  <Ban className="shrink-0 size-4" />
                  Ban
                </button>
                <button className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                  <LockKeyhole className="shrink-0 size-4" />
                  Disable
                </button>
                <button className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
                  <Trash className="shrink-0 size-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      },
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    defaultColumn: {
      minSize: 0,
      size: Number.MAX_SAFE_INTEGER,
      maxSize: Number.MAX_SAFE_INTEGER,
    },
  });

  return (
    <div className="border rounded-lg overflow-hidden dark:border-neutral-700">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
        <thead className="bg-gray-50 dark:bg-neutral-700">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  scope="col"
                  className={clsx('p-2.5 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500', {
                    'flex justify-center': header.column.columnDef.meta?.style?.align === 'center',
                  })}
                  style={{ width: header.getSize() === Number.MAX_SAFE_INTEGER ? 'auto' : header.getSize() }}
                >
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td
                    key={cell.id}
                    className={clsx('p-2.5 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200', {
                      'flex justify-center': cell.column.columnDef.meta?.style?.align === 'center',
                    })}
                    style={{ width: cell.column.getSize() === Number.MAX_SAFE_INTEGER ? 'auto' : cell.column.getSize() }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
