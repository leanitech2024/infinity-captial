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
      category: 'Private Equity',
      title: 'Manufacturing Sector Turnaround',
      desc: 'Transformed underperforming industrial manufacturer into market leader',
    },
    {
      img: '/assets/images/projects/project-5-img.jpg',
      category: 'Venture Capital',
      title: 'FinTech Startup Growth',
      desc: 'Scaled payment solutions startup to unicorn status in 3 years',
    },
    {
      img: '/assets/images/projects/project-4-img.jpg',
      category: 'Healthcare',
      title: 'Pharmaceutical Expansion',
      desc: 'Strategic investment in specialty drug manufacturer',
    },
    {
      img: '/assets/images/projects/project-3-img.jpg',
      category: 'Technology',
      title: 'SaaS Platform Exit',
      desc: 'Successful exit of enterprise software company to strategic buyer',
    },
    {
      img: '/assets/images/projects/project-6-img.jpg',
      category: 'Consumer',
      title: 'Retail Chain Expansion',
      desc: 'Regional to national expansion with operational improvements',
    },
    {
      img: '/assets/images/projects/project-5-img.jpg',
      category: 'Renewable Energy',
      title: 'Solar Infrastructure Fund',
      desc: 'Developed 500MW renewable energy portfolio',
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
                <div className="before_title">Success</div>
                <h2>Investment Case Studies</h2>
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
                          </div>
                          <div className="project_caro_content">
                            <div className="left_side">
                              <p>{study.category}</p>
                              <h2 className="title_pro">
                                <Link href="/project-details">
                                  {study.title}
                                </Link>
                              </h2>
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
