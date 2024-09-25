import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

import PrelineScript from '@/components/common/preline-script';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: process.env?.NEXT_PUBLIC_SITE_NAME || 'Next-forum',
};

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme={process.env.NEXT_PUBLIC_DEFAULT_THEME ?? 'system'} attribute="class">
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main>
              {children}
              <Toaster richColors />
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
      <PrelineScript />
    </html>
  );
}
