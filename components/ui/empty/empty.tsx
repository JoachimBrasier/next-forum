import { InboxIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import s from './empty.module.css';

export default function Empty({ text, className }: { text?: string; className?: string }) {
  const t = useTranslations('Default');

  return (
    <div className={clsx(s.root, className)}>
      <InboxIcon className={s.icon} />
      <p className={s.text}>{text ?? t('empty')}</p>
    </div>
  );
}
