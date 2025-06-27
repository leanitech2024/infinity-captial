import dynamic from 'next/dynamic';
import Layout from '@/components/layout/Layout';

import HeroSlider1 from '@/components/sections/HeroSlider1';
import About1 from '@/components/sections/About1';
import Service1 from '@/components/sections/Service1';
import Expertise from '@/components/sections/Expertise';
import { Suspense } from 'react';
import Loader from '@/components/Loader';

// Lazy loaded components
const Process1 = dynamic(() => import('@/components/sections/Process1'));
const Team1 = dynamic(() => import('@/components/sections/Team1'));
const Project1 = dynamic(() => import('@/components/sections/Project1'));
const Testimonial1 = dynamic(() =>
  import('@/components/sections/Testimonial1')
);
const Newsteller1 = dynamic(() => import('@/components/sections/Newsteller1'));
const FloatingMenu = dynamic(() => import('@/components/layout/FloatingMenu'));

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
