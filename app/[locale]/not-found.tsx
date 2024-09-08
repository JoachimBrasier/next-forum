import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="maxScreenSize flex flex-col items-center justify-center py-10">
      <h2 className="font-semibold text-indigo-600 text-xl">404</h2>
      <h3 className="text-black text-5xl font-bold mb-4">{t('title')}</h3>
      <p className="text-gray-600 text-base font-normal mb-4">{t('description')}</p>
      <Link
        href="/"
        aria-label={t('homepageButton.description')}
        className="flex cursor-pointer flex-row flex-nowrap items-center gap-2 rounded-md border border-indigo-600 bg-indigo-600 px-4 py-2 text-base font-semibold leading-5 text-white hover:border-indigo-500 hover:bg-indigo-500"
      >
        {t('homepageButton.text')}
      </Link>
    </div>
  );
}
