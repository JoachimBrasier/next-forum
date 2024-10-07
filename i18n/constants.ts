export type fileItem = {
  key: string;
  file: string;
};

export const files: fileItem[] = [
  { key: 'Layout', file: 'layout' },
  { key: 'Default', file: 'default' },
  { key: 'NotFound', file: 'not-found' },
  { key: 'Forum', file: 'forum' },
];

export type localeItem = {
  locale: string;
  label: string;
  flag: string; // Refers to https://flagicons.lipis.dev
  pagination: string; // Refers to https://github.com/react-component/pagination/tree/master/src/locale
};

// Available locales
export const locales: localeItem[] = [
  { locale: 'en', label: 'English', flag: 'us', pagination: 'en_US' },
  { locale: 'fr', label: 'Français', flag: 'fr', pagination: 'fr_FR' },
];
