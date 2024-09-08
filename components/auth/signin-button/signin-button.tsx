import { ReactElement } from 'react';

import { BuiltInProviderType } from 'next-auth/providers';
import { LiteralUnion, signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import s from './signin-button.module.css';

export default function SignInButton({
  value,
  icon,
}: {
  value: LiteralUnion<BuiltInProviderType>;
  icon?: ReactElement;
}) {
  const t = useTranslations('Layout');

  return (
    <button
      aria-label={t(`navbar.authModal.authButtons.${value}.description`)}
      className={s.root}
      onClick={() => signIn(value)}
    >
      {icon}
      {t(`navbar.authModal.authButtons.${value}.text`)}
    </button>
  );
}
