import LocalesMenu from '@/components/layout/locales-menu';
import ThemesMenu from '@/components/layout/themes-menu';
import UserMenu from '@/components/layout/user-menu';

import { auth } from '@/lib/auth';

import { Link } from '@/i18n/routing';

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2 lg:ps-[260px] dark:bg-neutral-800 dark:border-neutral-700">
      <nav className="px-4 flex basis-full items-center w-full mx-auto">
        <div className="me-5 lg:me-0 lg:hidden">
          <Link href="/" className="mr-auto text-base font-normal whitespace-nowrap text-gray-800 dark:text-white">
            {process.env?.NEXT_PUBLIC_SITE_NAME || 'Next-forum'}
          </Link>
        </div>
        <div className="w-full flex items-center justify-end ms-auto gap-x-1 md:gap-x-3">
          <div className="flex flex-row items-center justify-end gap-2">
            <LocalesMenu />
            <ThemesMenu />
            <UserMenu user={session?.user} />
          </div>
        </div>
      </nav>
    </header>
  );
}
