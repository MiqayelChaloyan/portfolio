import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';

import type { Metadata } from 'next';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import '@/styles/globals.sass';


export const metadata: Metadata = {
  title: 'Portfolio',
  description: '...',
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <NavBar/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}