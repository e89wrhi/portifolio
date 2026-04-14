import { FeatureLdg, MarketingConfig, TestimonialType } from '@/types';
import { useTranslations } from 'next-intl';

export function TabConfigs(): MarketingConfig {
  const t = useTranslations();
  return {
    mainNav: [
      {
        title: t('portifolio.notes'),
        href: '/note',
      },
      {
        title: t('portifolio.projects'),
        href: '/project',
      },
    ],
  };
}

export const portifolioFeatures: FeatureLdg[] = [
  {
    title: 'Website Design',
    description:
      'Clean, modern, and user-friendly website designs focused on great user experience.',
    icon: 'webdesign',
    link: 'webdesign',
  },
  {
    title: 'App Design',
    description:
      'Crafting intuitive and engaging mobile app interfaces that users love.',
    icon: 'appdesign',
    link: 'appdesign',
  },
  {
    title: 'Website Builder',
    description:
      'Custom websites built with Next.js for speed, SEO, and scalability.',
    icon: 'web',
    link: 'web',
  },
  {
    title: 'App Build',
    description:
      'Full-cycle mobile app development with responsive and high-performing results.',
    icon: 'app',
    link: 'app',
  },
  {
    title: 'Backend Build',
    description:
      'Robust and scalable APIs with .NET backend architecture for smooth integration.',
    icon: 'backend',
    link: 'backend',
  },
  {
    title: 'Consultation',
    description:
      'Helping you plan and structure digital solutions that align with your goals.',
    icon: 'consultation',
    link: 'consultation',
  },
];

export const portifolioTestimonials: TestimonialType[] = [
  {
    name: 'John Doe',
    job: 'Full Stack Developer',
    image: '/_avatars/a1.png',
    review:
      'Working with Mark on a Next.js and .NET project was a game-changer. His ability to seamlessly connect the frontend with the backend created a smooth and reliable experience. The attention to detail in both code quality and performance optimization really stood out.',
  },
  {
    name: 'Alice Smith',
    job: 'UI/UX Designer',
    image: '/_avatars/a2.png',
    review:
      'Mark has an incredible eye for design and usability. The interfaces he built were not only modern and engaging but also intuitive for users. His UX approach ensured that every interaction felt effortless and well thought out.',
  },
  {
    name: 'David Johnson',
    job: 'DevOps Engineer',
    image: '/_avatars/a3.png',
    review:
      'Mark’s structured backend in .NET made my job much easier. The way he organized APIs and deployment pipelines allowed me to streamline CI/CD processes without any issues. A real pleasure collaborating with him.',
  },
  {
    name: 'Michael Wilson',
    job: 'Project Manager',
    image: '/_avatars/a4.png',
    review:
      'Mark consistently delivered high-quality results on time. His clear communication and strong technical knowledge made managing the project smooth and stress-free. I’d gladly work with him again on future projects.',
  },
  {
    name: 'Sophia Garcia',
    job: 'Data Analyst',
    image: '/_avatars/a5.png',
    review:
      'The dashboards and data flows Mark developed were both visually clear and technically solid. His combination of frontend skills in Next.js and backend integration gave me reliable tools to analyze data effectively.',
  },
  {
    name: 'Emily Brown',
    job: 'Marketing Manager',
    image: '/_avatars/a6.png',
    review:
      'Mark built a user-friendly platform that made launching campaigns so much easier. From the responsive UI to the smooth backend integration, everything worked flawlessly and helped us reach our audience more effectively.',
  },
  {
    name: 'Jason Stan',
    job: 'Web Designer',
    image: '/_avatars/a7.png',
    review:
      'Collaborating with Mark was inspiring. He has a strong sense of design systems and accessibility, making sure that every UI component looked great and functioned perfectly. His blend of technical and creative skills is rare to find.',
  },
];
