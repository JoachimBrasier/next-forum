import { Metadata } from 'next';

import { Home } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/routing';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'NotFound' });

  return {
    title: t('title'),
  };
}

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="maxScreenSize flex flex-col items-center justify-center py-10">
      <h2 className="font-semibold text-blue-600 text-xl">404</h2>
      <h3 className="text-gray-700 dark:text-white text-4xl font-bold mb-2">{t('title')}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-base font-normal mb-4">{t('description')}</p>
      <Link
        href="/"
        aria-label={t('homepageButton.description')}
        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        <Home className="shrink-0 size-5" />
        {t('homepageButton.text')}
      </Link>
    </div>
  );
}
