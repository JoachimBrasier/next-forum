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
    <nav className="py-2 border-b border-gray-200 dark:border-neutral-700">
      <div className="maxScreenSize flex flex-row flex-nowrap items-center gap-2">
        <Link href="/" className="mr-auto text-base font-normal whitespace-nowrap text-gray-800 dark:text-white">
          {process.env?.NEXT_PUBLIC_SITE_NAME || 'Next-forum'}
        </Link>
        <LocalesMenu />
        <ThemesMenu />
        {session?.user ? <UserMenu user={session?.user} /> : <AuthModal />}
      </div>
    </nav>
  );
}
