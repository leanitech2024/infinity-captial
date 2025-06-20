'use client';
import Isotope from 'isotope-layout';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function PortfolioFilter1Col() {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState('*'); // Default to "All Sectors"
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope('.project_container', {
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-item',
        },
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        },
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === '*'
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? 'current' : '');

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div
            className="fliter_group"
            style={{ textAlign: 'center!important' }}
          >
            <ul className="project_filter dark clearfix">
              <li
                className={activeBtn('*')}
                onClick={handleFilterKeyChange('*')}
              >
                All Sectors
              </li>
              <li
                className={activeBtn('sector_category-technology')}
                onClick={handleFilterKeyChange('sector_category-technology')}
              >
                Technology
              </li>
              <li
                className={activeBtn('sector_category-healthcare')}
                onClick={handleFilterKeyChange('sector_category-healthcare')}
              >
                Healthcare
              </li>
              <li
                className={activeBtn('sector_category-finance')}
                onClick={handleFilterKeyChange('sector_category-finance')}
              >
                Finance
              </li>
              <li
                className={activeBtn('sector_category-manufacturing')}
                onClick={handleFilterKeyChange('sector_category-manufacturing')}
              >
                Manufacturing
              </li>
              <li
                className={activeBtn('sector_category-energy')}
                onClick={handleFilterKeyChange('sector_category-energy')}
              >
                Energy
              </li>
              <li
                className={activeBtn('sector_category-realestate')}
                onClick={handleFilterKeyChange('sector_category-realestate')}
              >
                Real Estate
              </li>
              <li
                className={activeBtn('sector_category-consumer')}
                onClick={handleFilterKeyChange('sector_category-consumer')}
              >
                Consumer
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="project_container clearfix">
        <div className="row clearfix">
          <div className="project-wrapper grid-item col-lg-12 col-md-12 col-sm-12 col-xs-12 sector_category-technology">
            <div className="project_box style_three clearfix">
              <div className="content_inner">
                <div>
                  <Link href="#">Technology & Software</Link>
                </div>
                <h2>
                  <Link href="project-details">
                    AI-Driven Fintech Innovation Platform
                  </Link>
                </h2>
                <p className="short_desc">
                  Strategic investment in cutting-edge AI technology
                  revolutionizing financial services, digital payments, and
                  blockchain solutions for next-generation banking.
                </p>
                <Link href="project-details" className="read_more">
                  Read More <span className="icon-right-arrow-long" />
                </Link>
                <div className="share_me">
                  <div className="share_socail">
                    <div className="title">Share</div>
                    <button
                      className="m_icon"
                      title="facebook"
                      data-sharer="facebook"
                      data-title="AI-Driven Fintech Innovation Platform"
                      data-url="project-details"
                    >
                      <i className="fa fa-facebook" />
                    </button>
                    <button
                      className="m_icon"
                      title="twitter"
                      data-sharer="twitter"
                      data-title="AI-Driven Fintech Innovation Platform"
                      data-url="project-details"
                    >
                      <i className="fa fa-twitter" />
                    </button>
                    <button
                      className="m_icon"
                      title="whatsapp"
                      data-sharer="whatsapp"
                      data-title="AI-Driven Fintech Innovation Platform"
                      data-url="project-details"
                    >
                      <i className="fa fa-whatsapp" />
                    </button>
                    <button
                      className="m_icon"
                      title="telegram"
                      data-sharer="telegram"
                      data-title="AI-Driven Fintech Innovation Platform"
                      data-url="project-details"
                      data-to="+91-98765-43210"
                    >
                      <i className="fa fa-telegram" />
                    </button>
                    <button
                      className="m_icon"
                      title="skype"
                      data-sharer="skype"
                      data-url="project-details"
                      data-title="AI-Driven Fintech Innovation Platform"
                    >
                      <i className="fa fa-skype" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="image">
                <img
                  loading="lazy"
                  width={370}
                  height={247}
                  src="/assets/images/projects/project-2-img.jpg"
                  className="wp-post-image"
                  alt="img"
                />
                <Link href="project-details" className="pro-link" />
                <div className="overlay"> </div>
                <div className="text">
                  <ul>
                    <li>
                      Investment : <span>$45M Series B</span>
                    </li>
                    <li>
                      Portfolio :<span>TechCorp Solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrapper grid-item col-lg-12 col-md-12 col-sm-12 col-xs-12  sector_category-healthcare">
            <div className="project_box style_three clearfix">
              <div className="content_inner">
                <div>
                  <Link href="#">Healthcare & Pharmaceuticals</Link>
                </div>
                <h2>
                  <Link href="project-details">
                    Next-Gen Biotech Drug Development
                  </Link>
                </h2>
                <p className="short_desc">
                  Funding breakthrough pharmaceutical research for cancer
                  treatment, precision medicine solutions, and innovative
                  healthcare technologies transforming patient care globally.
                </p>
                <Link href="project-details" className="read_more">
                  Read More <span className="icon-right-arrow-long" />
                </Link>
                <div className="share_me">
                  <div className="share_socail">
                    <div className="title">Share</div>
                    <button
                      className="m_icon"
                      title="facebook"
                      data-sharer="facebook"
                      data-title="Next-Gen Biotech Drug Development"
                      data-url="project-details"
                    >
                      <i className="fa fa-facebook" />
                    </button>
                    <button
                      className="m_icon"
                      title="twitter"
                      data-sharer="twitter"
                      data-title="Next-Gen Biotech Drug Development"
                      data-url="project-details"
                    >
                      <i className="fa fa-twitter" />
                    </button>
                    <button
                      className="m_icon"
                      title="whatsapp"
                      data-sharer="whatsapp"
                      data-title="Next-Gen Biotech Drug Development"
                      data-url="project-details"
                    >
                      <i className="fa fa-whatsapp" />
                    </button>
                    <button
                      className="m_icon"
                      title="telegram"
                      data-sharer="telegram"
                      data-title="Next-Gen Biotech Drug Development"
                      data-url="project-details"
                      data-to="+91-98765-43210"
                    >
                      <i className="fa fa-telegram" />
                    </button>
                    <button
                      className="m_icon"
                      title="skype"
                      data-sharer="skype"
                      data-url="project-details"
                      data-title="Next-Gen Biotech Drug Development"
                    >
                      <i className="fa fa-skype" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="image">
                <img
                  width={370}
                  height={247}
                  src="/assets/images/projects/project-3-img.jpg"
                  className="wp-post-image"
                  alt="img"
                />
                <Link href="project-details" className="pro-link" />
                <div className="overlay"> </div>
                <div className="text">
                  <ul>
                    <li>
                      Investment : <span>$60M Series C</span>
                    </li>
                    <li>
                      Portfolio :<span>MedLife Pharmaceuticals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrapper grid-item    col-lg-12 col-md-12 col-sm-12 col-xs-12  sector_category-finance">
            <div className="project_box style_three clearfix">
              <div className="content_inner">
                <div>
                  <Link href="#">Financial Services</Link>
                </div>
                <h2>
                  <Link href="project-details">
                    Digital Banking & Wealth Management
                  </Link>
                </h2>
                <p className="short_desc">
                  Revolutionary digital banking platform transforming wealth
                  management, investment advisory, and financial services for
                  high-net-worth individuals and institutional clients.
                </p>
                <Link href="project-details" className="read_more">
                  Read More <span className="icon-right-arrow-long" />
                </Link>
                <div className="share_me">
                  <div className="share_socail">
                    <div className="title">Share</div>
                    <button
                      className="m_icon"
                      title="facebook"
                      data-sharer="facebook"
                      data-title="Digital Banking & Wealth Management"
                      data-url="project-details"
                    >
                      <i className="fa fa-facebook" />
                    </button>
                    <button
                      className="m_icon"
                      title="twitter"
                      data-sharer="twitter"
                      data-title="Digital Banking & Wealth Management"
                      data-url="project-details"
                    >
                      <i className="fa fa-twitter" />
                    </button>
                    <button
                      className="m_icon"
                      title="whatsapp"
                      data-sharer="whatsapp"
                      data-title="Digital Banking & Wealth Management"
                      data-url="project-details"
                    >
                      <i className="fa fa-whatsapp" />
                    </button>
                    <button
                      className="m_icon"
                      title="telegram"
                      data-sharer="telegram"
                      data-title="Digital Banking & Wealth Management"
                      data-url="project-details"
                      data-to="+91-98765-43210"
                    >
                      <i className="fa fa-telegram" />
                    </button>
                    <button
                      className="m_icon"
                      title="skype"
                      data-sharer="skype"
                      data-url="project-details"
                      data-title="Digital Banking & Wealth Management"
                    >
                      <i className="fa fa-skype" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="image">
                <img
                  width={370}
                  height={246}
                  src="/assets/images/projects/project-1-img.jpg"
                  className="wp-post-image"
                  alt="img"
                />
                <Link href="project-details" className="pro-link" />
                <div className="overlay"> </div>
                <div className="text">
                  <ul>
                    <li>
                      Investment : <span>$80M Series D</span>
                    </li>
                    <li>
                      Portfolio :<span>NextGen Financial</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrapper grid-item    col-lg-12 col-md-12 col-sm-12 col-xs-12  sector_category-manufacturing">
            <div className="project_box style_three clearfix">
              <div className="content_inner">
                <div>
                  <Link href="#">Manufacturing & Industrial</Link>
                </div>
                <h2>
                  <Link href="project-details">
                    Smart Manufacturing Automation Systems
                  </Link>
                </h2>
                <p className="short_desc">
                  Industry 4.0 automation solutions revolutionizing
                  manufacturing efficiency, sustainable production processes,
                  and supply chain optimization for global markets.
                </p>
                <Link href="project-details" className="read_more">
                  Read More <span className="icon-right-arrow-long" />
                </Link>
                <div className="share_me">
                  <div className="share_socail">
                    <div className="title">Share</div>
                    <button
                      className="m_icon"
                      title="facebook"
                      data-sharer="facebook"
                      data-title="Smart Manufacturing Automation Systems"
                      data-url="project-details"
                    >
                      <i className="fa fa-facebook" />
                    </button>
                    <button
                      className="m_icon"
                      title="twitter"
                      data-sharer="twitter"
                      data-title="Smart Manufacturing Automation Systems"
                      data-url="project-details"
                    >
                      <i className="fa fa-twitter" />
                    </button>
                    <button
                      className="m_icon"
                      title="whatsapp"
                      data-sharer="whatsapp"
                      data-title="Smart Manufacturing Automation Systems"
                      data-url="project-details"
                    >
                      <i className="fa fa-whatsapp" />
                    </button>
                    <button
                      className="m_icon"
                      title="telegram"
                      data-sharer="telegram"
                      data-title="Smart Manufacturing Automation Systems"
                      data-url="project-details"
                      data-to="+91-98765-43210"
                    >
                      <i className="fa fa-telegram" />
                    </button>
                    <button
                      className="m_icon"
                      title="skype"
                      data-sharer="skype"
                      data-url="project-details"
                      data-title="Smart Manufacturing Automation Systems"
                    >
                      <i className="fa fa-skype" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="image">
                <img
                  width={370}
                  height={208}
                  src="/assets/images/projects/project-4-img.jpg"
                  className="wp-post-image"
                  alt="img"
                />
                <Link href="project-details" className="pro-link" />
                <div className="overlay"> </div>
                <div className="text">
                  <ul>
                    <li>
                      Investment : <span>$35M Series A</span>
                    </li>
                    <li>
                      Portfolio :<span>Industrial Innovations Ltd</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrapper grid-item col-lg-12 col-md-12 col-sm-12 col-xs-12  sector_category-energy">
            <div className="project_box style_three clearfix">
              <div className="content_inner">
                <div>
                  <Link href="#">Energy & Utilities</Link>
                </div>
                <h2>
                  <Link href="project-details">
                    Renewable Energy Infrastructure Development
                  </Link>
                </h2>
                <p className="short_desc">
                  Large-scale solar and wind energy projects driving sustainable
                  power generation, clean energy transition, and green
                  infrastructure for emerging markets worldwide.
                </p>
                <Link href="project-details" className="read_more">
                  Read More <span className="icon-right-arrow-long" />
                </Link>
                <div className="share_me">
                  <div className="share_socail">
                    <div className="title">Share</div>
                    <button
                      className="m_icon"
                      title="facebook"
                      data-sharer="facebook"
                      data-title="Renewable Energy Infrastructure Development"
                      data-url="project-details"
                    >
                      <i className="fa fa-facebook" />
                    </button>
                    <button
                      className="m_icon"
                      title="twitter"
                      data-sharer="twitter"
                      data-title="Renewable Energy Infrastructure Development"
                      data-url="project-details"
                    >
                      <i className="fa fa-twitter" />
                    </button>
                    <button
                      className="m_icon"
                      title="whatsapp"
                      data-sharer="whatsapp"
                      data-title="Renewable Energy Infrastructure Development"
                      data-url="project-details"
                    >
                      <i className="fa fa-whatsapp" />
                    </button>
                    <button
                      className="m_icon"
                      title="telegram"
                      data-sharer="telegram"
                      data-title="Renewable Energy Infrastructure Development"
                      data-url="project-details"
                      data-to="+91-98765-43210"
                    >
                      <i className="fa fa-telegram" />
                    </button>
                    <button
                      className="m_icon"
                      title="skype"
                      data-sharer="skype"
                      data-url="project-details"
                      data-title="Renewable Energy Infrastructure Development"
                    >
                      <i className="fa fa-skype" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="image">
                <img
                  width={370}
                  height={247}
                  src="/assets/images/projects/project-6-img.jpg"
                  className="wp-post-image"
                  alt="img"
                />
                <Link href="project-details" className="pro-link" />
                <div className="overlay"> </div>
                <div className="text">
                  <ul>
                    <li>
                      Investment : <span>$120M Infrastructure</span>
                    </li>
                    <li>
                      Portfolio :<span>GreenPower Energy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrapper grid-item    col-lg-12 col-md-12 col-sm-12 col-xs-12  sector_category-realestate">
            <div className="project_box style_three clearfix">
              <div className="content_inner">
                <div>
                  <Link href="#">Real Estate & Infrastructure</Link>
                </div>
                <h2>
                  <Link href="project-details">
                    Premium Commercial Real Estate Development
                  </Link>
                </h2>
                <p className="short_desc">
                  Strategic development of premium commercial spaces, mixed-use
                  properties, and smart city infrastructure projects in tier-1
                  metropolitan areas and growth corridors.
                </p>
                <Link href="project-details" className="read_more">
                  Read More <span className="icon-right-arrow-long" />
                </Link>
                <div className="share_me">
                  <div className="share_socail">
                    <div className="title">Share</div>
                    <button
                      className="m_icon"
                      title="facebook"
                      data-sharer="facebook"
                      data-title="Premium Commercial Real Estate Development"
                      data-url="project-details"
                    >
                      <i className="fa fa-facebook" />
                    </button>
                    <button
                      className="m_icon"
                      title="twitter"
                      data-sharer="twitter"
                      data-title="Premium Commercial Real Estate Development"
                      data-url="project-details"
                    >
                      <i className="fa fa-twitter" />
                    </button>
                    <button
                      className="m_icon"
                      title="whatsapp"
                      data-sharer="whatsapp"
                      data-title="Premium Commercial Real Estate Development"
                      data-url="project-details"
                    >
                      <i className="fa fa-whatsapp" />
                    </button>
                    <button
                      className="m_icon"
                      title="telegram"
                      data-sharer="telegram"
                      data-title="Premium Commercial Real Estate Development"
                      data-url="project-details"
                      data-to="+91-98765-43210"
                    >
                      <i className="fa fa-telegram" />
                    </button>
                    <button
                      className="m_icon"
                      title="skype"
                      data-sharer="skype"
                      data-url="project-details"
                      data-title="Premium Commercial Real Estate Development"
                    >
                      <i className="fa fa-skype" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="image">
                <img
                  width={370}
                  height={247}
                  src="/assets/images/projects/project-5-img.jpg"
                  className="wp-post-image"
                  alt="img"
                />
                <Link href="project-details" className="pro-link" />
                <div className="overlay"> </div>
                <div className="text">
                  <ul>
                    <li>
                      Investment : <span>$200M Development</span>
                    </li>
                    <li>
                      Portfolio :<span>Metropolitan Properties</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrapper grid-item col-lg-12 col-md-12 col-sm-12 col-xs-12  sector_category-consumer">
            <div className="project_box style_three clearfix">
              <div className="content_inner">
                <div>
                  <Link href="#">Consumer Goods & Retail</Link>
                </div>
                <h2>
                  <Link href="project-details">
                    E-commerce & Direct-to-Consumer Brands
                  </Link>
                </h2>
                <p className="short_desc">
                  Investment in innovative consumer brands, e-commerce
                  platforms, and retail technology solutions transforming
                  customer experience and market accessibility.
                </p>
                <Link href="project-details" className="read_more">
                  Read More <span className="icon-right-arrow-long" />
                </Link>
                <div className="share_me">
                  <div className="share_socail">
                    <div className="title">Share</div>
                    <button
                      className="m_icon"
                      title="facebook"
                      data-sharer="facebook"
                      data-title="E-commerce & Direct-to-Consumer Brands"
                      data-url="project-details"
                    >
                      <i className="fa fa-facebook" />
                    </button>
                    <button
                      className="m_icon"
                      title="twitter"
                      data-sharer="twitter"
                      data-title="E-commerce & Direct-to-Consumer Brands"
                      data-url="project-details"
                    >
                      <i className="fa fa-twitter" />
                    </button>
                    <button
                      className="m_icon"
                      title="whatsapp"
                      data-sharer="whatsapp"
                      data-title="E-commerce & Direct-to-Consumer Brands"
                      data-url="project-details"
                    >
                      <i className="fa fa-whatsapp" />
                    </button>
                    <button
                      className="m_icon"
                      title="telegram"
                      data-sharer="telegram"
                      data-title="E-commerce & Direct-to-Consumer Brands"
                      data-url="project-details"
                      data-to="+91-98765-43210"
                    >
                      <i className="fa fa-telegram" />
                    </button>
                    <button
                      className="m_icon"
                      title="skype"
                      data-sharer="skype"
                      data-url="project-details"
                      data-title="E-commerce & Direct-to-Consumer Brands"
                    >
                      <i className="fa fa-skype" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="image">
                <img
                  width={370}
                  height={247}
                  src="/assets/images/projects/project-1-img.jpg"
                  className="wp-post-image"
                  alt="img"
                />
                <Link href="project-details" className="pro-link" />
                <div className="overlay"> </div>
                <div className="text">
                  <ul>
                    <li>
                      Investment : <span>$25M Series B</span>
                    </li>
                    <li>
                      Portfolio :<span>RetailTech Innovations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
