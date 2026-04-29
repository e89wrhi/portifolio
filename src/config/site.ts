import { SiteConfig } from '@/types';
import { env } from '@/../env.mjs';

//const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: 'Mark',
  description: 'A Personal blog or portifolio site.',
  url: env.NEXT_PUBLIC_APP_URL ?? '/',
  ogImage: `/logo.png`,
  links: {
    twitter: 'https://twitter.com/mytwi',
    github: 'https://github.com/e89wrhi',
  },
  mailSupport: 'support@portifolio-mark.com',
};
