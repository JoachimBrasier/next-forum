import { getTranslations } from 'next-intl/server';

import AuthModal from '@/components/auth/modal';

import { auth } from '@/lib/auth';

import { Link } from '@/i18n/routing';

import LocalesMenu from './locales-menu';
import ThemesMenu from './themes-menu';
import UserMenu from './user-menu';

export default async function Navbar() {
  const t = await getTranslations('Layout');
  const session = await auth();

  return (
    <nav className="border-b py-2">
      <div className="maxScreenSize flex flex-row flex-nowrap items-center gap-2">
        <Link href="/" className="mr-auto">
          {process.env?.NEXT_PUBLIC_SITE_NAME || 'Next-forum'}
        </Link>
        {session?.user ? <UserMenu /> : <AuthModal />}
        <LocalesMenu />
        <ThemesMenu />
      </div>
    </nav>
  );
}
