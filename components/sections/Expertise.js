import Link from 'next/link';
import VideoBox from '../elements/VideoBox';

export default function Expertise() {
  return (
    <>
      <section className="expertise">
        <div className="area_of_expertise">
          <div className="simpleParallax">
            <img
              src="/assets/images/areaof-ecp-1.jpg"
              className="cover-parallax"
              alt="Investment meeting"
            />
          </div>
          <div className="title_and_video">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="video_box text-center">
                    <VideoBox />
                  </div>
                </div>
                <div className="col-lg-2" />
                <div className="col-lg-6">
                  <div className="title_all_box style_one text-end">
                    <div className="title_sections">
                      <h2>Create Sustainable Value Through Investments</h2>
                      <p>
                        Our investment philosophy combines rigorous analysis
                        with deep market insights to identify opportunities that
                        deliver superior risk-adjusted returns for our investors
                        and partners.
                      </p>
                    </div>
                    <div className="theme_btn">
                      <Link href="/service-default" className="theme-btn one">
                        Our Approach
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="expertise">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 expertise_box">
                  <div className="step_number">
                    <h1>01.</h1>
                  </div>
                  <h2 className="title">
                    <Link href="#">
                      Sector <br /> Expertise
                    </Link>
                  </h2>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 expertise_box">
                  <div className="step_number">
                    <h1>02.</h1>
                  </div>
                  <h2 className="title">
                    <Link href="#">
                      Value <br /> Creation
                    </Link>
                  </h2>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 expertise_box">
                  <div className="step_number">
                    <h1>03.</h1>
                  </div>
                  <h2 className="title">
                    <Link href="#">
                      Risk
                      <br />
                      Management
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
