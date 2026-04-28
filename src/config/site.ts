import { SiteConfig } from '@/types';
import { env } from '@/../env.mjs';

//const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: 'Mark',
  description: 'A Personal blog or portifolio site.',
  url: env.NEXT_PUBLIC_APP_URL ?? '/',
  ogImage: `/_logo/saas_logo2.png`,
  links: {
    twitter: 'https://twitter.com/mytwi',
    github: 'https://github.com/mygit',
  },
  mailSupport: 'support@saas-starter.com',
};
