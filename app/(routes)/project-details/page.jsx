import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function ProjectDetails() {
  return (
    <>
      <Layout breadcrumbTitle="Project Details">
        <div>
          <section className="project-detail-section">
            <div className="pd_top_90" />
            <div className="container">
              <div className="row">
                <div className="col-xl-9 col-lg-12 mb-5 mb-lg-5 mb-xl-0">
                  <div className="title_all_box style_one dark_color">
                    <div className="title_sections left">
                      <div className="before_title">Investment Portfolio</div>
                      <h2>Our Strategic Investment Approach</h2>
                    </div>
                  </div>
                  <div className="pd_bottom_10" />

                  <div className="description_box">
                    <p>
                      Infinity Capital specializes in strategic growth
                      investments across technology, healthcare, manufacturing,
                      and financial services sectors. Our investment approach
                      focuses on identifying high-potential companies with
                      innovative solutions and scalable business models.
                    </p>
                  </div>
                  <div className="pd_bottom_15" />

                  <div className="description_box">
                    <p>
                      We partner with visionary entrepreneurs and management
                      teams to accelerate growth, expand market reach, and
                      create sustainable competitive advantages. Our portfolio
                      companies benefit from our extensive network, operational
                      expertise, and strategic guidance.
                    </p>
                  </div>
                  <div className="pd_bottom_15" />

                  <div className="description_box">
                    <p>
                      Our investment portfolio spans multiple geographies with a
                      focus on emerging markets. We have successfully deployed
                      over $2 billion in capital across 50+ companies, achieving
                      consistent returns while driving innovation and job
                      creation.
                    </p>
                  </div>
                  <div className="pd_bottom_25" />

                  <div className="row gutter_30px">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-4 mb-lg-0 mb-xl-0">
                      <div className="simple_image_boxes">
                        <img
                          src="/assets/images/projects/project-detail-img-1.jpg"
                          className="simp_img cover-parallax"
                          alt="Investment Strategy"
                        />
                      </div>
                      <div className="pd_bottom_25" />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="simple_image_boxes">
                        <img
                          src="/assets/images/projects/project-detail-img-2.jpg"
                          className="simp_img cover-parallax"
                          alt="Portfolio Growth"
                        />
                      </div>
                      <div className="pd_bottom_25" />
                    </div>
                  </div>

                  <h3>Investment Philosophy & Value Creation</h3>
                  <div className="pd_bottom_10" />
                  <div className="description_box">
                    <p>
                      Our investment philosophy is built on identifying
                      transformative technologies and business models that
                      address real market needs. We look for companies with
                      strong fundamentals, experienced leadership, and clear
                      paths to scalability.
                    </p>
                    <div className="pd_bottom_15" />
                    <p>
                      Infinity Capital's comprehensive value creation approach
                      includes:
                    </p>
                    <ul>
                      <li>Strategic planning and market expansion support</li>
                      <li>Operational excellence and process optimization</li>
                      <li>
                        Technology infrastructure and digital transformation
                      </li>
                      <li>Talent acquisition and organizational development</li>
                      <li>Strategic partnerships and business development</li>
                      <li>
                        Financial management and capital structure optimization
                      </li>
                    </ul>
                  </div>
                  <div className="pd_bottom_20" />
                </div>

                <div className="col-xl-3 col-lg-12">
                  <div className="project_information">
                    <h2>Investment Overview</h2>
                    <div className="project_information_bo">
                      <div className="repeat_informtion">
                        <h6>Total Portfolio Value: </h6>
                        <p>$2+ Billion</p>
                      </div>
                      <div className="repeat_informtion">
                        <h6>Active Investments: </h6>
                        <p>50+ Companies</p>
                      </div>
                      <div className="repeat_informtion">
                        <h6>Investment Range: </h6>
                        <p>$10M - $200M</p>
                      </div>
                      <div className="repeat_informtion">
                        <h6>Sectors: </h6>
                        <p>Technology, Healthcare, Manufacturing, FinTech</p>
                      </div>
                      <div className="repeat_informtion">
                        <h6>Geographic Focus: </h6>
                        <p>Asia-Pacific, North America, Europe</p>
                      </div>
                      <div className="repeat_informtion">
                        <h6>Investment Stage: </h6>
                        <p>Series A to Growth Capital</p>
                      </div>

                      <div className="social_medias">
                        <Link href="#">
                          <span className="fa fa-linkedin" />
                        </Link>
                        <Link href="#">
                          <span className="fa fa-twitter" />
                        </Link>
                        <Link href="#">
                          <span className="fa fa-file-pdf" />
                        </Link>
                      </div>
                      <Link href="/contact" className="theme-btn two">
                        Partner With Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pd_bottom_70" />
          </section>

          <section className="newsteller style_one bg_dark_1">
            <div className="pd_top_40" />
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="content">
                    <h2>Infinity Capital Insights</h2>
                    <p>
                      Subscribe to receive our latest investment research,
                      sector reports, and portfolio updates.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="item_scubscribe">
                    <div className="input_group">
                      <form
                        className="mc4wp-form"
                        method="post"
                        data-name="Subscribe"
                      >
                        <div className="mc4wp-form-fields">
                          <input
                            type="email"
                            name="EMAIL"
                            placeholder="Your professional email"
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
            <div className="pd_bottom_40" />
          </section>
        </div>
      </Layout>
    </>
  );
}
