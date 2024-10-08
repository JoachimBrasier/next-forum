'use client';

import { LogOut, Shield } from 'lucide-react';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import Avatar from '@/components/ui/avatar';

import { Link } from '@/i18n/routing';

type Props = {
  user?: User;
};

export default function UserMenu({ user }: Props) {
  const t = useTranslations('Layout');

  return (
    <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
      <button
        id="user-dropdown"
        type="button"
        className="hs-dropdown-toggle inline-flex items-center focus:outline-none"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label={t('navbar.userMenu.openButton.description')}
      >
        <Avatar image={user?.image} fallbackText={user?.name} fallbackMode="text" size="sm" />
      </button>
      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-dropdown"
      >
        <div className="py-3 pl-5 pr-10 bg-gray-100 rounded-t-lg dark:bg-neutral-700">
          <p className="text-sm text-gray-500 dark:text-neutral-500">{t('navbar.userMenu.menu.SignedAs')}</p>
          <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">{user?.name}</p>
        </div>
        <div className="p-1 space-y-0.5">
          <Link
            href="/admin"
            aria-label={t('navbar.userMenu.menu.admin.description')}
            className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
          >
            <Shield className="shrink-0 size-4" />
            {t('navbar.userMenu.menu.admin.text')}
          </Link>
          <button
            type="button"
            onClick={() => signOut()}
            aria-label={t('navbar.userMenu.menu.signOut.description')}
            className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
          >
            <LogOut className="shrink-0 size-4" />
            {t('navbar.userMenu.menu.signOut.text')}
          </button>
        </div>
      </div>
    </div>
  );
}
