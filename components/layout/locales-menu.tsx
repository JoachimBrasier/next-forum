'use client';

import { useMemo } from 'react';

import { useLocale, useTranslations } from 'next-intl';

import { locales } from '@/i18n/constants';
import { Link, usePathname } from '@/i18n/routing';

export default function LocalesMenu() {
  const t = useTranslations('Layout');
  const pathname = usePathname();
  const activeLocale = useLocale();
  const activeLocaleItem = useMemo(() => locales.find(({ locale }) => locale === activeLocale), [activeLocale]);

  return (
    <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
      <button
        id="locales-dropdown"
        type="button"
        className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label={t('navbar.localesMenu.openButton.description')}
      >
        <span className={`fi fi-${activeLocaleItem?.flag} shrink-0 size-5`} />
      </button>
      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="locales-dropdown"
      >
        <div className="p-1 space-y-0.5">
          {locales.map(({ locale, label, flag }) => (
            <Link
              key={locale}
              href={pathname}
              {...{ locale }}
              aria-label={t('navbar.localesMenu.localeButton.description', { locale: label })}
              className="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            >
              <span className={`fi fi-${flag} shrink-0 size-4`} />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
