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
    title: 'AI & Machine Learning',
    description:
      'Developing AI-powered systems with ML.NET and LLM integration for chat, summarization, and predictive analytics.',
    icon: 'consultation',
    link: 'ai-ml',
  },
  {
    title: 'Backend Architecture',
    description:
      'Designing scalable microservices and modular monoliths using DDD, CQRS, and Clean Architecture patterns in .NET.',
    icon: 'backend',
    link: 'backend',
  },
  {
    title: 'Full-Stack Development',
    description:
      'Building end-to-end solutions combining robust .NET backends with high-performance React and Next.js frontends.',
    icon: 'web',
    link: 'fullstack',
  },
  {
    title: 'Cross-Platform Mobile',
    description:
      'Crafting intuitive mobile experiences using .NET MAUI and Xamarin.Forms for logistics and social networking.',
    icon: 'appdesign',
    link: 'mobile',
  },
  {
    title: 'Enterprise Tools',
    description:
      'Streamlining complex workflows with Turborepo monorepos, Stripe payment integration, and Agile/Scrum methodologies.',
    icon: 'dashboard',
    link: 'tools',
  },
  {
    title: 'Content & Logistics',
    description:
      'Delivering specialized technical solutions for content-heavy platforms and AI-driven logistics ecosystems.',
    icon: 'bookOpen',
    link: 'domains',
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
