export type fileItem = { key: string; file: string };

export const files: fileItem[] = [
  { key: 'Layout', file: 'layout' },
  { key: 'Default', file: 'default' },
  { key: 'NotFound', file: 'not-found' },
  { key: 'Forum', file: 'forum' },
];

export type localeItem = { locale: string; label: string; flag: string };

// Available locales
export const locales: localeItem[] = [
  { locale: 'en', label: 'English', flag: 'us' },
  { locale: 'fr', label: 'Français', flag: 'fr' },
];
