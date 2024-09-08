'use client';

import { useIsMounted } from '@/hook/useIsMounted';
import { Cog6ToothIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

import { Dropdown } from '@/components/ui';

import s from './themes-menu.module.css';

export default function ThemesMenu() {
  const isMounted = useIsMounted();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const t = useTranslations('Layout');

  if (!isMounted) {
    return <div className={s.skeleton} />;
  }

  return (
    <Dropdown
      description={t('navbar.themesMenu.openButton.description')}
      items={[
        {
          key: 'light',
          description: t('navbar.themesMenu.menu.light.description'),
          label: t('navbar.themesMenu.menu.light.text'),
          icon: <SunIcon className={s.menuItemIcon} />,
          onClick: () => setTheme('light'),
        },
        {
          key: 'dark',
          description: t('navbar.themesMenu.menu.dark.description'),
          label: t('navbar.themesMenu.menu.dark.text'),
          icon: <MoonIcon className={s.menuItemIcon} />,
          onClick: () => setTheme('dark'),
        },
        {
          key: 'system',
          description: t('navbar.themesMenu.menu.system.description'),
          label: t('navbar.themesMenu.menu.system.text'),
          icon: <Cog6ToothIcon className={s.menuItemIcon} />,
          onClick: () => setTheme('system'),
        },
      ]}
    >
      {resolvedTheme === 'light' && <SunIcon className={s.buttonIcon} />}
      {resolvedTheme === 'dark' && <MoonIcon className={s.buttonIcon} />}
    </Dropdown>
  );
}
