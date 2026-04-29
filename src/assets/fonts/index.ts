import localFont from 'next/font/local';
import {
  Inter as FontSans,
  Urbanist,
  Outfit,
  Bricolage_Grotesque,
} from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontUrban = Urbanist({
  subsets: ['latin'],
  variable: '--font-urban',
});

export const fontHeading = localFont({
  src: './CalSans-SemiBold.woff2',
  variable: '--font-heading',
});

export const fontGeist = localFont({
  src: './GeistVF.woff2',
  variable: '--font-geist',
});

export const fontOutfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const fontBricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
});
