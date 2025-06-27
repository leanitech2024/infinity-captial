'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image'; // Import next/image

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: '.h1n',
    prevEl: '.h1p',
  },
};

const slidesData = [
  {
    titleParts: ['Strategic', 'Capital', 'Solutions'],
    subtitle: 'Tailored Investment Strategies',
    description:
      'We deliver customized financial solutions to help businesses scale and investors achieve their long-term wealth objectives.',
    alignment: 'content_left',
    cta: 'Our Approach',
    imageUrl: '/assets/images/sliders/slider-1-1.avif',
    // It's good to define intrinsic width/height if you know them for next/image
    imageWidth: 1920, // Example: adjust to your actual image width
    imageHeight: 1080, // Example: adjust to your actual image height
  },
  {
    titleParts: ['Sector', 'Focused', 'Investment'],
    subtitle: 'Deep Market Knowledge',
    description:
      'Leveraging our specialized knowledge in key industries to identify high-growth opportunities and maximize returns.',
    alignment: 'content_center',
    cta: 'Explore Sectors',
    imageUrl: '/assets/images/sliders/slider-1-2.avif',
    imageWidth: 1920,
    imageHeight: 1080,
  },
  {
    titleParts: ['Global', 'Investment', 'Platform'],
    subtitle: 'Borderless Opportunities',
    description:
      'Access to international markets and diversified portfolios designed to optimize risk-adjusted returns across geographies.',
    alignment: 'content_right',
    cta: 'Global Reach',
    imageUrl: '/assets/images/sliders/slider-1-3.avif',
    imageWidth: 1920,
    imageHeight: 1080,
  },
];

export default function HeroSlider1() {
  return (
    <section className="slider style_four nav_position_one">
      <Swiper
        {...swiperOptions}
        className="owl_nav_block owl_dots_none theme_carousel"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="slide-item-content">
            <div className={`slide-item ${slide.alignment}`}>
              {/* Use next/image for the background image */}
              <Image
                src={slide.imageUrl}
                alt={`Slide background ${index + 1}`}
                fill // Use 'fill' to make it cover the parent
                style={{ objectFit: 'cover' }} // Equivalent to background-size: cover
                quality={80} // Adjust quality as needed
                priority={index === 0} // Prioritize only the first image for LCP
              />
              {/* Overlay for opacity, if needed */}
              <div className="image-overlay"></div>

              <div className="auto-container">
                <div className="row">
                  <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <div className="slider_content pd_top_180 pd_bottom_200">
                      <h6 className="animate_up d-inline-block">
                        {slide.subtitle}
                      </h6>
                      <h1 className="animate_left">
                        {slide.titleParts[0]} {slide.titleParts[1]}
                        <br />
                        {slide.titleParts[2]}
                      </h1>
                      <p className="description animate_right">
                        {slide.description}
                      </p>
                      <div className="button_all animate_down">
                        <Link href="#" className="theme-btn one animated">
                          {slide.cta}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="owl-nav">
          <div className="owl-prev h1p">
            <span>‹</span>
          </div>
          <div className="owl-next h1n">
            <span>›</span>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
