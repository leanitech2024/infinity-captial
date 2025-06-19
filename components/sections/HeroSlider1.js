'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

export default function HeroSlider1() {
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

  return (
    <section className="slider style_four nav_position_one">
      <Swiper
        {...swiperOptions}
        className="owl_nav_block owl_dots_none theme_carousel"
      >
        {[1, 2, 3].map((slide) => (
          <SwiperSlide key={slide} className="slide-item-content">
            <div
              className={`slide-item ${
                slide === 1
                  ? 'content_left'
                  : slide === 2
                  ? 'content_center'
                  : 'content_right'
              }`}
            >
              <div
                className="image-layer"
                style={{
                  backgroundImage: `url(/assets/images/sliders/slider-1-${slide}.jpg)`,
                }}
              ></div>
              <div className="auto-container">
                <div className="row">
                  <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <div className="slider_content pd_top_180 pd_bottom_200">
                      <h6 className="animate_up d-inline-block">
                        {slide === 1
                          ? 'Our Vision to Grow Better'
                          : slide === 2
                          ? 'Hire the Best'
                          : 'Our Vision to Grow Better'}
                      </h6>
                      <h1 className="animate_left">
                        {slide === 1
                          ? 'Inspired <br /> Performance'
                          : slide === 2
                          ? 'Hire Better, <br /> Faster!'
                          : 'Countless <br /> Happy Clients'}
                      </h1>
                      <p className="description animate_right">
                        {slide === 1
                          ? 'Duty obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.'
                          : slide === 2
                          ? 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.'
                          : 'These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled.'}
                      </p>
                      <div className="button_all animate_down">
                        <Link href="#" className="theme-btn one animated">
                          Read More
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
