'use client';

import { useMemo } from 'react';

import { useLocale, useTranslations } from 'next-intl';

import { Dropdown } from '@/components/ui';

import { locales } from '@/i18n/constants';
import { usePathname, useRouter } from '@/i18n/routing';

import s from './locales-menu.module.css';

export default function LocalesMenu() {
  const t = useTranslations('Layout');
  const pathname = usePathname();
  const { push } = useRouter();
  const activeLocale = useLocale();
  const activeLocaleItem = useMemo(
    () => locales.find(({ locale }) => locale === activeLocale),
    [activeLocale],
  );

  return (
    <Dropdown
      description={t('navbar.localesMenu.openButton.description')}
      items={locales.map(({ locale, label, flag }) => ({
        key: locale,
        onClick: () => push(pathname, { locale }),
        label: (
          <>
            <span className={`fi fi-${flag}`} />
            {label}
          </>
        ),
      }))}
    >
      <span className={`fi fi-${activeLocaleItem?.flag}`} />
      {activeLocaleItem?.label}
    </Dropdown>
  );
}
