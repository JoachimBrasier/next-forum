import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { locales } from '@/i18n/constants';

export const routing = defineRouting({
  locales: locales.map(({ locale }) => locale),
  defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? 'en',
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing);
