import Link from 'next/link';

export default function About1() {
  return (
    <>
      <section className="about_us_section" id="about">
        {/*===============spacing==============*/}
        <div className="pd_top_100" />
        {/*===============spacing==============*/}
        <div className="container pd_zero">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div className="title_all_box style_one dark_color">
                <div className="title_sections left">
                  <div className="before_title">About Us</div>
                  <h2>Investment Expertise</h2>
                  <p>
                    We combine deep financial knowledge with market insights to
                    deliver exceptional results for our clients and portfolio
                    companies.
                  </p>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="pd_bottom_20" />
              {/*===============spacing==============*/}
              <div className="process_box style_one dark_color">
                <div className="process_box_outer">
                  <div className="icon">
                    <span className="icon-line-chart" />
                    <div className="number">01</div>
                  </div>
                  <div className="content_box">
                    <h2>
                      <Link href="#">Strategic Investments</Link>
                    </h2>
                    <p>
                      We identify and invest in high-growth opportunities across
                      diverse sectors with strong fundamentals and potential.
                    </p>
                  </div>
                </div>
              </div>
              <div className="process_box style_one dark_color">
                <div className="process_box_outer">
                  <div className="icon">
                    <span className="icon-line-chart" />
                    <div className="number">02</div>
                  </div>
                  <div className="content_box">
                    <h2>
                      <Link href="#">Value Creation</Link>
                    </h2>
                    <p>
                      Our hands-on approach helps portfolio companies accelerate
                      growth through operational improvements and strategic
                      guidance.
                    </p>
                  </div>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="pd_bottom_30" />
              {/*===============spacing==============*/}
              <div className="signature_wrapper">
                <div className="row gutter_15px">
                  <div className="col-lg-4 col-md-12">
                    <div className="theme_btn_all color_one">
                      <Link href="#" className="theme-btn two">
                        Our Approach
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12">
                    <div className="extra_content authour_box dark_color">
                      <div className="authour_box_content">
                        <div className="image">
                          <img
                            src="/assets/images/signature.png"
                            className="img-fluid sign_image"
                            alt="authour Image"
                          />
                        </div>
                        <div className="text">
                          <h6>
                            Rahul Sharma,{' '}
                            <span>Founder & Managing Partner</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="pd_bottom_30" />
              {/*===============spacing==============*/}

              {/*===============spacing==============*/}
              <div className="pd_bottom_30" />
              {/*===============spacing==============*/}
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="service_wrapper">
                <div className="move_image_absolute">
                  <img
                    src="/assets/images/about/about-1-1.png"
                    className="class-fluid"
                    alt="investment meeting"
                  />
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="service_box style_one dark_color">
                      <div className="service_content">
                        <div className="image">
                          <img
                            src="/assets/images/service-illu-1.png"
                            className="img-fluid"
                            alt="Private Equity"
                          />
                        </div>
                        <div className="content_inner">
                          <h2>
                            <Link href="#">Private Equity</Link>
                          </h2>
                          <p>
                            We partner with established businesses to drive
                            transformation and sustainable growth.
                          </p>
                          <Link href="#" className="read_more">
                            Learn more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    {/*===============spacing==============*/}
                    <div className="pd_top_100" />
                    <div className="pd_top_100 d_md_none" />
                    {/*===============spacing==============*/}
                    <div className="service_box style_one dark_color last">
                      <div className="service_content">
                        <div className="image">
                          <img
                            src="/assets/images/service-illu-1.png"
                            className="img-fluid"
                            alt="Venture Capital"
                          />
                        </div>
                        <div className="content_inner">
                          <h2>
                            <Link href="#">Venture Capital</Link>
                          </h2>
                          <p>
                            We back visionary entrepreneurs building disruptive,
                            scalable businesses.
                          </p>
                          <Link href="#" className="read_more">
                            Learn more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_80" />
        {/*===============spacing==============*/}
      </section>
    </>
  );
}
