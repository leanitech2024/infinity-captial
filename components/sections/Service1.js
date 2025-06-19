import Link from 'next/link';

export default function Service1() {
  return (
    <>
      <section className="service_section bg_light_1" id="service">
        {/*===============spacing==============*/}
        <div className="pd_top_80" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="title_all_box style_one text-center dark_color">
              <div className="title_sections">
                <div className="before_title">Our Services</div>
                <h2>Investment Services</h2>
                <p>
                  We provide comprehensive financial solutions to help
                  businesses grow and <br /> investors achieve their long-term
                  wealth creation objectives
                </p>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_20" />
            {/*===============spacing==============*/}
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="service_box style_two dark_color">
                <div className="service_content_two ">
                  <div
                    className="content_inner"
                    style={{
                      backgroundImage:
                        'url(/assets/images/service/service-image-1.png)',
                    }}
                  >
                    <div className="content_inner_in">
                      <div className="icon_image">
                        <img
                          src="/assets/images/010-job-search.png"
                          className="img-fluid"
                          alt="Private Equity"
                        />
                      </div>
                      <h2>
                        <Link href="#">Private Equity</Link>
                      </h2>
                      <p>
                        Strategic investments in established businesses with
                        growth potential.
                      </p>
                      <ul>
                        <li>Sector-focused investments</li>
                        <li>Operational value creation</li>
                        <li>Long-term capital appreciation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="ovarlay_link">
                    <Link href="#">
                      <i className="icon-right-arrow" />
                    </Link>
                  </div>
                  <div className="overlay_content">
                    <h2>
                      <Link href="#">Private Equity</Link>
                    </h2>
                    <p>
                      Strategic investments in established businesses with
                      growth potential.
                    </p>
                  </div>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="mr_bottom_20" />
              {/*===============spacing==============*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="service_box style_two dark_color">
                <div className="service_content_two  active_ser">
                  <div
                    className="content_inner"
                    style={{
                      backgroundImage:
                        'url(/assets/images/service/service-image-2.png)',
                    }}
                  >
                    <div className="content_inner_in">
                      <div className="icon_image">
                        <img
                          src="/assets/images/service-ico-1.png"
                          className="img-fluid"
                          alt="Venture Capital"
                        />
                      </div>
                      <h2>
                        <Link href="#">Venture Capital</Link>
                      </h2>
                      <p>
                        Funding and supporting innovative startups with
                        disruptive potential.
                      </p>
                      <ul>
                        <li>Early-stage investments</li>
                        <li>Mentorship & guidance</li>
                        <li>Growth acceleration</li>
                      </ul>
                    </div>
                  </div>
                  <div className="ovarlay_link">
                    <Link href="#">
                      <i className="icon-right-arrow" />
                    </Link>
                  </div>
                  <div className="overlay_content">
                    <h2>
                      <Link href="#">Venture Capital</Link>
                    </h2>
                    <p>
                      Funding and supporting innovative startups with disruptive
                      potential.
                    </p>
                  </div>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="mr_bottom_20" />
              {/*===============spacing==============*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="service_box style_two dark_color">
                <div className="service_content_two ">
                  <div
                    className="content_inner"
                    style={{
                      backgroundImage:
                        'url(/assets/images/service/service-image-3.png)',
                    }}
                  >
                    <div className="content_inner_in">
                      <div className="icon_image">
                        <img
                          src="/assets/images/service-ico-2.png"
                          className="img-fluid"
                          alt="Wealth Management"
                        />
                      </div>
                      <h2>
                        <Link href="#">Wealth Management</Link>
                      </h2>
                      <p>
                        Customized investment strategies for high-net-worth
                        individuals.
                      </p>
                      <ul>
                        <li>Portfolio diversification</li>
                        <li>Risk management</li>
                        <li>Tax-efficient strategies</li>
                      </ul>
                    </div>
                  </div>
                  <div className="ovarlay_link">
                    <Link href="#">
                      <i className="icon-right-arrow" />
                    </Link>
                  </div>
                  <div className="overlay_content">
                    <h2>
                      <Link href="#">Wealth Management</Link>
                    </h2>
                    <p>
                      Customized investment strategies for high-net-worth
                      individuals.
                    </p>
                  </div>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="mr_bottom_20" />
              {/*===============spacing==============*/}
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_70" />
        {/*===============spacing==============*/}
      </section>
    </>
  );
}
