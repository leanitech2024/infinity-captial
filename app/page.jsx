import Layout from '@/components/layout/Layout';
import HeroSlider1 from '@/components/sections/HeroSlider1';
import About1 from '@/components/sections/About1';
import Service1 from '@/components/sections/Service1';
import Expertise from '@/components/sections/Expertise';
import Process1 from '@/components/sections/Process1';
import Team1 from '@/components/sections/Team1';
import Project1 from '@/components/sections/Project1';
import Testimonial1 from '@/components/sections/Testimonial1';
import Newsteller1 from '@/components/sections/Newsteller1';
import FloatingMenu from '@/components/layout/FloatingMenu';

export default function Home1() {
  return (
    <Layout>
      <HeroSlider1 />
      <About1 />
      <Service1 />
      <Expertise />
      <Process1 />
      <Team1 />
      <Project1 />
      <Testimonial1 />
      <Newsteller1 />
      <FloatingMenu />
    </Layout>
  );
}
