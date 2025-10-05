//import { infos } from '@/config/landing';
//import BentoGrid from '@/components/portifolio/sections/bentogrid';
import Features from '@/components/sections/features';
import HeroLanding from '@/components/sections/hero-landing';
//import InfoLanding from '@/components/portifolio/sections/info-landing';
import Powered from '@/components/sections/powered';
import PreviewLanding from '@/components/sections/preview-landing';
import Testimonials from '@/components/sections/testimonials';
import CFASection from '@/components/sections/cfa-section';
import AboutMe from '@/components/sections/aboutme';
import { allProjects } from 'contentlayer/generated';
import { getBlurDataURL } from '@/lib/utils';
import Projects from '@/components/sections/projects';

//import SocialsSection from '@/components/portifolio/sections/socials';
//import CountsSection from '@/components/portifolio/sections/count-landing';

export default async function IndexPage() {
  const projects = await Promise.all(
    allProjects
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 4)
      .map(async (post) => ({
        ...post,
        blurDataURL: await getBlurDataURL(post.image ?? ``),
      }))
  );
  return (
    <>
      <HeroLanding />
      <AboutMe />
      <Projects projects={projects} />
      <PreviewLanding />
      <Powered />
      <Features />
      <Testimonials />
      <CFASection />
    </>
  );
}
