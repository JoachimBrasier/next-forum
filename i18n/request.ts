import { notFound } from 'next/navigation';

import merge from 'deepmerge';
import { getRequestConfig } from 'next-intl/server';

import { files, locales } from '@/i18n/constants';
import { routing } from '@/i18n/routing';

const getMessages = async (locale: string): Promise<any> => {
  const messages: Record<string, object> = {};
  const localeItem = locales.find((localeItem) => localeItem.locale === locale);

  // Get pagination locale
  if (localeItem?.pagination) {
    messages['Pagination'] = (await import(`rc-pagination/lib/locale/${localeItem.pagination}.js`)).default;
  }

  // Get JSON files
  for (let i = 0; i < files.length; i++) {
    const { key, file } = files[i];

    messages[key] = (await import(`@/i18n/messages/${locale}/${file}.json`)).default;
  }

  return messages;
};

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) notFound();

  const defaultMessages = await getMessages('en');
  const messages = await getMessages(locale);

  return {
    messages: merge(defaultMessages, messages),
  };
});
