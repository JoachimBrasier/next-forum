import { LinkProps } from 'next/link';

import { memo } from 'react';

import { Link } from '@/i18n/routing';

type Props = LinkProps & {
  children: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement>;

export default memo(function Item({ children, href, prefetch, replace, scroll, shallow, locale, ...rest }: Props) {
  return (
    <Link
      {...{ ...rest }}
      href={href}
      prefetch={prefetch || undefined}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale || undefined}
      className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300"
    >
      {children}
    </Link>
  );
});
