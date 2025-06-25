'use client';
import Layout from '@/components/layout/Layout';
import { useState } from 'react';
import Link from 'next/link';
import Newsteller1 from '@/components/sections/Newsteller1';

export default function ServiceDetails() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout breadcrumbTitle="Service Details">
        <div>
          <div className="auto-container">
            <div className="row default_row">
              <div
                id="primary"
                className="content-area service col-lg-8 col-md-12 col-sm-12 col-xs-12"
              >
                <main id="main" className="site-main" role="main">
                  {/*===============spacing==============*/}
                  <div className="pd_top_85" />
                  {/*===============spacing==============*/}
                  <article className="clearfix service type-service status-publish has-post-thumbnail hentry">
                    <div className="title_all_box style_one dark_color">
                      <div className="title_sections left">
                        <div className="before_title">Financial Services</div>
                        <div className="title">Investment Management</div>
                        <p>
                          Our comprehensive investment management approach
                          ensures optimal returns through strategic asset
                          allocation and disciplined portfolio management.
                        </p>
                      </div>
                    </div>
                    <div className="row no-space">
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-5 mb-xl-0 ps-0 ps-lg-0 pe-0 pe-lg-0 pe-xl-3">
                        <div className="description_box">
                          <p>
                            At Infinity Capital, we provide personalized
                            investment management services designed to meet your
                            unique financial goals. Our experienced team
                            combines market expertise with cutting-edge
                            technology to deliver superior investment outcomes
                            and wealth preservation.
                          </p>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_25" />
                        {/*===============spacing==============*/}
                        <div className="icon_box_all style_one">
                          <div className="icon_content ">
                            <div className="icon">
                              <img
                                src="/assets/images/icon-image-nike.png"
                                className="img-fluid svg_image"
                                alt="icon png"
                              />
                            </div>
                            <div className="txt_content">
                              <h3>
                                <Link href="#">Due Diligence Analysis</Link>
                              </h3>
                              <p>
                                Comprehensive research and analysis of
                                investment opportunities to ensure informed
                                decision-making and risk mitigation.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_25" />
                        {/*===============spacing==============*/}
                        <div className="simple_image_boxes">
                          <img
                            src="/assets/images/blog/single-post-gal-1.jpg"
                            className="object-fit-cover-center height_570px"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 ps-0 ps-lg-0 pe-0 pe-lg-0 ps-xl-3">
                        <div className="icon_box_all style_one">
                          <div className="icon_content ">
                            <div className="icon">
                              <img
                                src="/assets/images/icon-image-nike.png"
                                className="img-fluid svg_image"
                                alt="icon png"
                              />
                            </div>
                            <div className="txt_content">
                              <h3>
                                <Link href="#">Portfolio Optimization</Link>
                              </h3>
                              <p>
                                Strategic asset allocation and portfolio
                                balancing to maximize returns while managing
                                risk exposure effectively.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_25" />
                        {/*===============spacing==============*/}
                        <div className="icon_box_all style_one">
                          <div className="icon_content ">
                            <div className="icon">
                              <img
                                src="/assets/images/icon-image-nike.png"
                                className="img-fluid svg_image"
                                alt="icon png"
                              />
                            </div>
                            <div className="txt_content">
                              <h3>
                                <Link href="#">Performance Monitoring</Link>
                              </h3>
                              <p>
                                Continuous tracking and analysis of investment
                                performance with regular reporting and strategic
                                adjustments.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_25" />
                        {/*===============spacing==============*/}
                        <h3>Investment Strategies</h3>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_15" />
                        {/*===============spacing==============*/}
                        <div className="description_box">
                          <p>
                            Our investment philosophy focuses on long-term value
                            creation through diversified portfolios and
                            disciplined risk management. We ensure every
                            investment aligns with your financial objectives.
                          </p>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_25" />
                        {/*===============spacing==============*/}
                        <div className="content_box_cn style_one">
                          <div className="txt_content">
                            <h3>
                              <Link href="#">Growth Investing</Link>
                            </h3>
                            <p>
                              Focus on companies with strong growth potential
                              and sustainable competitive advantages for
                              long-term appreciation.
                            </p>
                          </div>
                        </div>
                        <div className="content_box_cn  style_one">
                          <div className="txt_content">
                            <h3>
                              <Link href="#">Value Investing</Link>
                            </h3>
                            <p>
                              Identifying undervalued securities with strong
                              fundamentals to capitalize on market
                              inefficiencies.
                            </p>
                          </div>
                        </div>
                        <div className="content_box_cn  style_one">
                          <div className="txt_content">
                            <h3>
                              <Link href="#">Diversification Strategy</Link>
                            </h3>
                            <p>
                              Strategic allocation across asset classes,
                              sectors, and geographies to optimize risk-adjusted
                              returns.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_25" />
                    {/*===============spacing==============*/}
                    <h3>Service Benefits</h3>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_25" />
                    {/*===============spacing==============*/}
                    <div className="faq_section type_two">
                      <div className="block_faq">
                        <div className="accordion">
                          <dl>
                            <dt
                              className={
                                isActive.key == 1
                                  ? 'faq_header active'
                                  : 'faq_header'
                              }
                              onClick={() => handleToggle(1)}
                            >
                              What is Infinity Capital's investment approach?
                              <span className="icon-play" />
                            </dt>
                            <dd
                              className="accordion-content hide"
                              style={{
                                display: `${
                                  isActive.key == 1 ? 'block' : 'none'
                                }`,
                              }}
                            >
                              <p>
                                Infinity Capital employs a disciplined,
                                research-driven investment approach that focuses
                                on long-term value creation. We combine
                                fundamental analysis with quantitative models to
                                identify opportunities and manage risk
                                effectively across diverse market conditions.
                              </p>
                            </dd>
                            <dt
                              className={
                                isActive.key == 2
                                  ? 'faq_header active'
                                  : 'faq_header'
                              }
                              onClick={() => handleToggle(2)}
                            >
                              What investment services do you offer?
                              <span className="icon-play" />
                            </dt>
                            <dd
                              className="accordion-content hide"
                              style={{
                                display: `${
                                  isActive.key == 2 ? 'block' : 'none'
                                }`,
                              }}
                            >
                              <p>
                                We offer comprehensive investment management,
                                portfolio advisory, wealth management, financial
                                planning, risk assessment, and market research
                                services. Our solutions are tailored to meet the
                                unique needs of institutional and individual
                                investors.
                              </p>
                            </dd>
                            <dt
                              className={
                                isActive.key == 3
                                  ? 'faq_header active'
                                  : 'faq_header'
                              }
                              onClick={() => handleToggle(3)}
                            >
                              How can I start investing with Infinity Capital?
                              <span className="icon-play" />
                            </dt>
                            <dd
                              className="accordion-content hide"
                              style={{
                                display: `${
                                  isActive.key == 3 ? 'block' : 'none'
                                }`,
                              }}
                            >
                              <p>
                                Getting started is simple. Contact our team for
                                an initial consultation where we'll assess your
                                financial goals, risk tolerance, and investment
                                timeline. We'll then create a customized
                                investment strategy tailored to your specific
                                requirements.
                              </p>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_65" />
                  {/*===============spacing==============*/}
                </main>
              </div>
              <aside
                id="secondary"
                className="widget-area all_side_bar col-lg-4 col-md-12 col-sm-12"
              >
                <div className="service_siderbar side_bar">
                  {/*===============spacing==============*/}
                  <div className="pd_top_85" />
                  {/*===============spacing==============*/}
                  <div className="widgets_grid_box">
                    <div className="widget creote_widget_service_list">
                      <h4 className="widget-title">Our Services</h4>
                      <ul className="service_list_box">
                        <li>
                          <Link href="#">Investment Management</Link>{' '}
                        </li>
                        <li>
                          <Link href="#">Portfolio Advisory</Link>{' '}
                        </li>
                        <li>
                          <Link href="#">Risk Assessment</Link>{' '}
                        </li>
                        <li>
                          <Link href="#">Wealth Management</Link>{' '}
                        </li>
                        <li>
                          <Link href="#">Financial Planning</Link>{' '}
                        </li>
                        <li>
                          <Link href="#">Market Research</Link>{' '}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widgets_grid_box">
                    <div className="brouchure_box_widget">
                      <div className="widget_content">
                        <h3>Complete Guide to Investment Strategies</h3>
                        <div className="color_white_1 clearfix">
                          <Link
                            href="#"
                            className="theme-btn color_white_1 one"
                          >
                            Download
                          </Link>
                        </div>
                        <img
                          src="/assets/images/broucher-img.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="widgets_grid_box">
                    <div
                      id="creote-contactus-3"
                      className="widget widget_contactus"
                    >
                      <div className="contact_box_widget widget_box">
                        <div className="widget_content">
                          <img
                            src="/assets/images/service-sidebar-contact-bg.jpg"
                            alt="backgroundimage"
                          />
                          <div className="top_section">
                            <h3>Need Investment Advice?</h3>
                            <p>Expert guidance for your financial growth. </p>
                          </div>
                          <div className="bottom_section">
                            <Link href="#" className="phone_number">
                              +91 98765 43210
                            </Link>
                            <Link href="#" className="mailid">
                              invest@infinitycapital.com
                            </Link>
                          </div>
                        </div>
                        <Link href="#" className="theme-btn one">
                          Consultation
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_65" />
                  {/*===============spacing==============*/}
                </div>
              </aside>
            </div>
          </div>
          {/*-newsteller-*/}
          <Newsteller1 />
        </div>
      </Layout>
    </>
  );
}
