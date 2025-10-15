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

export default async function IndexPage() {
  return (
    <>
      <HeroLanding />
      <AboutMe />
      <PreviewLanding />
      <Powered />
      <Features />
      <Testimonials />
      <CFASection />
    </>
  );
}
