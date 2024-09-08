import clsx from 'clsx';
import { getTranslations } from 'next-intl/server';

import { AuthModal } from '@/components/auth';
import { LocalesMenu, ThemesMenu, UserMenu } from '@/components/layout';

import { auth } from '@/lib/auth';

import { Link } from '@/i18n/routing';

import s from './navbar.module.css';

export default async function Navbar() {
  const t = await getTranslations('Layout');
  const session = await auth();

  return (
    <nav className={s.root}>
      <div className={clsx('maxScreenSize', s.container)}>
        <Link href="/" className={s.logoContainer}>
          LOGO
        </Link>
        <LocalesMenu />
        {session?.user ? <UserMenu /> : <AuthModal />}
        <ThemesMenu />
      </div>
    </nav>
  );
}
