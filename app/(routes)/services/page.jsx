import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function Service() {
  return (
    <>
      <Layout breadcrumbTitle="Service Default">
        <div>
          {/*===============spacing==============*/}
          <div className="pd_top_90" />
          {/*===============spacing==============*/}
          <section className="creote-service-box">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_post style_one">
                    <div className="image">
                      <div className="overlay" />
                      <img
                        loading="lazy"
                        width={500}
                        height={500}
                        src="/assets/images/service/service-image-6.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="service_content icon_yes">
                      <div className="icon_box">
                        <span className="icon icon-thumbs-up icon" />
                      </div>
                      <h2 className="title_service">
                        <Link href="/service-details">
                          Investment Management
                        </Link>
                      </h2>
                      <p className="short_desc">
                        Strategic investment solutions tailored to maximize your
                        portfolio returns and growth.
                      </p>
                      <Link className="read_more" href="/service-details">
                        {' '}
                        Read More
                        <i className="icon-right-arrow-long" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_post style_one">
                    <div className="image">
                      <div className="overlay" />
                      <img
                        loading="lazy"
                        width={500}
                        height={500}
                        src="/assets/images/service/service-image-5.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="service_content icon_yes">
                      <div className="icon_box">
                        <span className="icon icon-thumbs-up icon" />
                      </div>
                      <h2 className="title_service">
                        <Link href="/service-details">Portfolio Advisory</Link>
                      </h2>
                      <p className="short_desc">
                        Expert guidance and advisory services to optimize your
                        investment portfolio performance.
                      </p>
                      <Link className="read_more" href="/service-details">
                        {' '}
                        Read More
                        <i className="icon-right-arrow-long" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_post style_one">
                    <div className="image">
                      <div className="overlay" />
                      <img
                        loading="lazy"
                        width={500}
                        height={500}
                        src="/assets/images/service/service-image-4.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="service_content icon_yes">
                      <div className="icon_box">
                        <span className="icon icon-thumbs-up icon" />
                      </div>
                      <h2 className="title_service">
                        <Link href="/service-details">Risk Assessment</Link>
                      </h2>
                      <p className="short_desc">
                        Comprehensive risk analysis and mitigation strategies
                        for secure investments.
                      </p>
                      <Link className="read_more" href="/service-details">
                        {' '}
                        Read More
                        <i className="icon-right-arrow-long" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_post style_one">
                    <div className="image">
                      <div className="overlay" />
                      <img
                        loading="lazy"
                        width={500}
                        height={500}
                        src="/assets/images/service/service-image-3.png"
                        alt="img"
                      />
                    </div>
                    <div className="service_content icon_yes">
                      <div className="icon_box">
                        <span className="icon icon-thumbs-up icon" />
                      </div>
                      <h2 className="title_service">
                        <Link href="/service-details">Wealth Management</Link>
                      </h2>
                      <p className="short_desc">
                        Holistic wealth management solutions for high-net-worth
                        individuals and families.
                      </p>
                      <Link className="read_more" href="/service-details">
                        {' '}
                        Read More
                        <i className="icon-right-arrow-long" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_post style_one">
                    <div className="image">
                      <div className="overlay" />
                      <img
                        loading="lazy"
                        width={500}
                        height={500}
                        src="/assets/images/service/service-image-2.png"
                        alt="img"
                      />
                    </div>
                    <div className="service_content icon_yes">
                      <div className="icon_box">
                        <span className="icon icon-thumbs-up icon" />
                      </div>
                      <h2 className="title_service">
                        <Link href="/service-details">Financial Planning</Link>
                      </h2>
                      <p className="short_desc">
                        Comprehensive financial planning services to secure your
                        financial future.
                      </p>
                      <Link className="read_more" href="/service-details">
                        {' '}
                        Read More
                        <i className="icon-right-arrow-long" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="service_post style_one">
                    <div className="image">
                      <div className="overlay" />
                      <img
                        loading="lazy"
                        width={500}
                        height={500}
                        src="/assets/images/service/service-image-1.png"
                        alt="img"
                      />
                    </div>
                    <div className="service_content icon_yes">
                      <div className="icon_box">
                        <span className="icon icon-thumbs-up icon" />
                      </div>
                      <h2 className="title_service">
                        <Link href="/service-details">Market Research</Link>
                      </h2>
                      <p className="short_desc">
                        In-depth market analysis and research to identify
                        lucrative investment opportunities.
                      </p>
                      <Link className="read_more" href="/service-details">
                        {' '}
                        Read More
                        <i className="icon-right-arrow-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*===============spacing==============*/}
          <div className="pd_top_80" />
          {/*===============spacing==============*/}
          {/*-newsteller-*/}
          <section className="newsteller style_one bg_dark_1">
            {/*===============spacing==============*/}
            <div className="pd_top_40" />
            {/*===============spacing==============*/}
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="content">
                    <h2>Join Our Investment Newsletter</h2>
                    <p>
                      For receiving market updates and investment insights
                      directly in your inbox.{' '}
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="item_scubscribe">
                    <div className="input_group">
                      <form
                        className="mc4wp-form"
                        method="post"
                        data-name="Subscibe"
                      >
                        <div className="mc4wp-form-fields">
                          <input
                            type="email"
                            name="EMAIL"
                            placeholder="Your email address"
                            required
                          />
                          <input type="submit" defaultValue="Subscribe" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_40" />
            {/*===============spacing==============*/}
          </section>
          {/*-newsteller end-*/}
        </div>
      </Layout>
    </>
  );
}
