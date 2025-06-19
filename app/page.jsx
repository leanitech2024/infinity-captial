'use client';

import FloatingMenu from '@/components/layout/FloatingMenu';
import Footer1 from '@/components/layout/footer/Footer1';
import Header1 from '@/components/layout/header/Header1';
import About1 from '@/components/sections/About1';
import Expertise from '@/components/sections/Expertise';
import HeroSlider1 from '@/components/sections/HeroSlider1';
import Newsteller1 from '@/components/sections/Newsteller1';
import Process1 from '@/components/sections/Process1';
import Project1 from '@/components/sections/Project1';
import Service1 from '@/components/sections/Service1';
import Team1 from '@/components/sections/Team1';
import Testimonial1 from '@/components/sections/Testimonial1';
import { useState } from 'react';

export default function Home1() {
  const [isFloating, setFloating] = useState(false);
  const handleFloating = () => setFloating(!isFloating);

  return (
    <>
      <Header1 />
      <HeroSlider1 />
      <About1 />
      <Service1 />
      <Expertise />
      <Process1 />
      <Team1 />
      <Project1 />
      <Testimonial1 />

      <Newsteller1 />
      <FloatingMenu handleFloating={handleFloating} isFloating={isFloating} />
      <Footer1 />
    </>
  );
}
