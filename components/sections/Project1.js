'use client';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Project1() {
  const swiperOptions = {
    direction: 'horizontal',
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: '.h1n',
      prevEl: '.h1p',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 30 },
      575: { slidesPerView: 2, spaceBetween: 30 },
      767: { slidesPerView: 2, spaceBetween: 30 },
      991: { slidesPerView: 3, spaceBetween: 30 },
      1199: { slidesPerView: 4, spaceBetween: 30 },
      1350: { slidesPerView: 4, spaceBetween: 30 },
    },
  };

  const caseStudies = [
    {
      img: '/assets/images/projects/project-6-img.jpg',
      category: 'Technology & Software',
      title: 'AI-Driven Fintech Platform',
      desc: '$45M Series B investment in cutting-edge AI technology revolutionizing financial services',
    },
    {
      img: '/assets/images/projects/project-5-img.jpg',
      category: 'Healthcare',
      title: 'Next-Gen Biotech Research',
      desc: '$60M Series C funding for breakthrough cancer treatment solutions',
    },
    {
      img: '/assets/images/projects/project-4-img.jpg',
      title: 'Digital Banking Platform',
      category: 'Financial Services',
      desc: '$80M Series D in revolutionary digital wealth management solutions',
    },
    {
      img: '/assets/images/projects/project-3-img.jpg',
      category: 'Manufacturing',
      title: 'Smart Automation Systems',
      desc: '$35M Series A for Industry 4.0 manufacturing solutions',
    },
    {
      img: '/assets/images/projects/project-6-img.jpg',
      category: 'Energy',
      title: 'Renewable Infrastructure',
      desc: '$120M investment in large-scale solar and wind energy projects',
    },
    {
      img: '/assets/images/projects/project-5-img.jpg',
      category: 'Real Estate',
      title: 'Commercial Development',
      desc: '$200M strategic development of premium commercial spaces',
    },
  ];

  return (
    <>
      <section className="project-carousel" id="projects">
        <div className="pd_top_80" />
        <div className="container">
          <div className="row">
            <div className="title_all_box style_one text-center dark_color">
              <div className="title_sections">
                <div className="before_title">Investment Portfolio</div>
                <h2>Infinity Capital Case Studies</h2>
                <p className="mt-3">
                  Strategic investments driving innovation and growth across
                  sectors
                </p>
              </div>
              <div className="mr_bottom_10" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="project_caro_section carousel style_one">
                <div className="swiper-container">
                  <Swiper {...swiperOptions} className="swiper-wrapper">
                    {caseStudies.map((study, index) => (
                      <SwiperSlide key={index}>
                        <div className="project_post style_one mr_top_20">
                          <div className="image">
                            <img
                              src={study.img}
                              className="img-fluid"
                              alt={study.title}
                            />
                            <div className="investment-badge">
                              {study.desc.split('$')[1].split(' ')[0]}
                            </div>
                          </div>
                          <div className="project_caro_content">
                            <div className="left_side">
                              <p>{study.category}</p>
                              <h2 className="title_pro">
                                <Link href="/project-details">
                                  {study.title}
                                </Link>
                              </h2>
                              <p className="description">
                                {study.desc.split('$')[0]}
                              </p>
                            </div>
                            <div className="right_side">
                              <Link href="/project-details">
                                <i className="icon-right-arrow" />
                              </Link>
                              <Link href="/project-details" className="two">
                                <i className="icon-right-arrow" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="p_pagination">
                    <div className="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pd_bottom_90" />
      </section>
    </>
  );
}
