'use client';

import { useIsMounted } from '@/hook/useIsMounted';
import clsx from 'clsx';
import { MonitorCog, Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

export default function ThemesMenu() {
  const isMounted = useIsMounted();
  const { setTheme, resolvedTheme } = useTheme();
  const t = useTranslations('Layout');

  return (
    <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
      <button
        id="themes-dropdown"
        type="button"
        className={clsx(
          'hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700',
          {
            'animate-pulse border-gray-200 bg-gray-200 dark:bg-neutral-700 dark:border-neutral-700': !isMounted,
          },
        )}
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label={t('navbar.themesMenu.openButton.description')}
      >
        {!isMounted ? (
          <span className="h-5 w-5" />
        ) : resolvedTheme === 'light' ? (
          <Sun className="shrink-0 size-5" />
        ) : (
          <Moon className="shrink-0 size-5" />
        )}
      </button>
      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="themes-dropdown"
      >
        <div className="p-1 space-y-0.5">
          <button
            type="button"
            onClick={() => setTheme('light')}
            aria-label={t('navbar.themesMenu.menu.light.description')}
            className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
          >
            <Sun className="shrink-0 size-4" />
            {t('navbar.themesMenu.menu.light.text')}
          </button>
          <button
            type="button"
            onClick={() => setTheme('dark')}
            aria-label={t('navbar.themesMenu.menu.dark.description')}
            className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
          >
            <Moon className="shrink-0 size-4" />
            {t('navbar.themesMenu.menu.dark.text')}
          </button>
          <button
            type="button"
            onClick={() => setTheme('system')}
            aria-label={t('navbar.themesMenu.menu.system.description')}
            className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
          >
            <MonitorCog className="shrink-0 size-4" />
            {t('navbar.themesMenu.menu.system.text')}
          </button>
        </div>
      </div>
    </div>
  );
}
