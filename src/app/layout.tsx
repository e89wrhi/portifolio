import '@/styles/globals.css';
import {
  fontBricolage,
  fontGeist,
  fontHeading,
  fontOutfit,
  fontSans,
  fontUrban,
} from '@/assets/fonts';
import { ThemeProvider } from 'next-themes';

import { cn, constructMetadata } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@/components/analytics';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { cookies } from 'next/headers';
//import { TailwindIndicator } from '@/components/tailwind-indicator';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = constructMetadata();

export default async function RootLayout({ children }: RootLayoutProps) {
  const messages = await getMessages();
  const cookieStore = cookies();
  const locale = (await cookieStore).get('NEXT_LOCALE')?.value || 'en';

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-outfit antialiased',
          fontSans.variable,
          fontUrban.variable,
          fontHeading.variable,
          fontGeist.variable,
          fontOutfit.variable,
          fontBricolage.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Analytics />
            <Toaster richColors closeButton />
            {/*<TailwindIndicator />*/}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
