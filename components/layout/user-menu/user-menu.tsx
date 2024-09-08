'use client';

import { ArrowLeftStartOnRectangleIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { Dropdown } from '@/components/ui';

import { useRouter } from '@/i18n/routing';

import s from './user-menu.module.css';

export default function UserMenu() {
  const t = useTranslations('Layout');
  const { push } = useRouter();

  return (
    <Dropdown
      description={t('navbar.userMenu.openButton.description')}
      items={[
        {
          key: 'adminDashboard',
          label: t('navbar.userMenu.menu.admin.text'),
          description: t('navbar.userMenu.menu.admin.description'),
          icon: <WrenchScrewdriverIcon className={s.menuItemIcon} />,
          onClick: () => push('/admin'),
        },
        {
          key: 'signOut',
          label: t('navbar.userMenu.menu.signOut.text'),
          description: t('navbar.userMenu.menu.signOut.description'),
          icon: <ArrowLeftStartOnRectangleIcon className={s.menuItemIcon} />,
          onClick: () => signOut(),
        },
      ]}
    >
      {t('navbar.userMenu.openButton.text')}
    </Dropdown>
  );
}
