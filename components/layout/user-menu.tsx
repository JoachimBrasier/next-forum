'use client';

import { LogOut, Shield } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';

export default function UserMenu() {
  const t = useTranslations('Layout');

  return (
    <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
      <button
        id="user-dropdown"
        type="button"
        className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label={t('navbar.userMenu.openButton.description')}
      >
        {t('navbar.userMenu.openButton.text')}
      </button>
      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-dropdown"
      >
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
