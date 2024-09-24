import { ReactElement } from 'react';

import { BuiltInProviderType } from 'next-auth/providers';
import { LiteralUnion, signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';

export default function SignInButton({ value, icon }: { value: LiteralUnion<BuiltInProviderType>; icon?: ReactElement }) {
  const t = useTranslations('Layout');

  return (
    <button
      type="button"
      aria-label={t(`navbar.authModal.authButtons.${value}.description`)}
      onClick={() => signIn(value)}
      className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
    >
      {icon}
      {t(`navbar.authModal.authButtons.${value}.text`)}
    </button>
  );
}
