'use client';
import VideoBox from '@/components/elements/VideoBox';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import AboutTabs from '@/components/layout/AboutTabs';
import Newsteller1 from '@/components/sections/Newsteller1';

export default function AboutUs() {
  return (
    <>
      <Layout breadcrumbTitle="About Us">
        {/*-about-*/}
        <section className="about-section">
          {/*===============spacing==============*/}
          <div className="pd_top_90" />
          {/*===============spacing==============*/}
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12 ">
                <div className="about_content position-relative z_99">
                  <div className="title_all_box style_one text-left  dark_color">
                    <div className="title_sections">
                      <div className="before_title">About Us</div>
                      <h2>Pioneers in Strategic Investments</h2>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_15" />
                  {/*===============spacing==============*/}
                  <div className="extra_content image_with_content dark_color">
                    <div className="simple_image">
                      <img src="/assets/images/cuntry-1.png" alt="img" />
                      <h2>
                        {' '}
                        Since 2010, <br /> Empowering Growth Globally.
                      </h2>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_20" />
                  {/*===============spacing==============*/}
                  <div className="description_box">
                    <p>
                      At Infinity Capitol, we unlock value through disciplined
                      investing and innovative financial solutions. Our team
                      combines deep market expertise with a passion for
                      identifying transformative opportunities, ensuring
                      sustainable returns for our clients and partners in an
                      ever-evolving economic landscape.
                    </p>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_25" />
                  {/*===============spacing==============*/}
                  <div className="row gutter_15px">
                    <div className="col-lg-6 col-md-12">
                      <div className="icon_box_all  style_two">
                        <div className="icon_content  icon_imgs ">
                          <div className="icon">
                            <img
                              src="/assets/images/icon-img-n-1.png"
                              className="img-fluid svg_image"
                              alt="icon png"
                            />
                          </div>
                          <div className="txt_content">
                            <h3>
                              <Link href="#">
                                Data-Driven Investment Strategies
                              </Link>
                            </h3>
                          </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_25" />
                        {/*===============spacing==============*/}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="icon_box_all  style_two">
                        <div className="icon_content  icon_imgs ">
                          <div className="icon">
                            <img
                              src="/assets/images/icon-img-n-2.png"
                              className="img-fluid svg_image"
                              alt="icon png"
                            />
                          </div>
                          <div className="txt_content">
                            <h3>
                              <Link href="/services">
                                Global Portfolio Diversification
                              </Link>
                            </h3>
                          </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_25" />
                        {/*===============spacing==============*/}
                      </div>
                    </div>
                  </div>
                  <div className="theme_btn_all color_one">
                    <Link href="/contact" className="theme-btn five">
                      Partner with us
                      <i className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                <div className="image_boxes style_two">
                  <img
                    src="/assets/images/shape-1.png"
                    className="background_image"
                    alt="image"
                  />
                  <div className="image one">
                    <img
                      src="/assets/images/about/about-6.png"
                      className="img-fluid"
                      alt="image"
                    />
                  </div>
                  <div className="image two">
                    <img
                      src="/assets/images/about/about-7.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="video_box">
                      <VideoBox />
                    </div>
                  </div>
                  <div className="authour_quotes">
                    <i className="icon-quote" />
                    <h6>Building Wealth Through Visionary Capital</h6>
                    <p>/ Sarah Chen, CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_70" />
          {/*===============spacing==============*/}
        </section>
        {/*-about end-*/}
        {/*-service-*/}
        <section className="service-icon-section bg_light_1">
          {/*===============spacing==============*/}
          <div className="pd_top_90" />
          {/*===============spacing==============*/}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title_all_box style_one text-center dark_color">
                  <div className="title_sections">
                    <div className="before_title">Our Expertise</div>
                    <h2 className="title">Redefining Investment Excellence</h2>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_20" />
                  {/*===============spacing==============*/}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="simple_image_boxes parallax_cover height_264px">
                  <img
                    src="/assets/images/icon-img-ab-1.jpg"
                    className="simp_img cover-parallax"
                    alt="Investment strategy meeting"
                  />
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_20" />
                {/*===============spacing==============*/}
                <div className="icon_box_all style_three">
                  <div className="icon_content ">
                    <div className="icon">
                      <span className="icon-bow-and-arrow" />
                    </div>
                    <div className="txt_content">
                      <h3>
                        <Link href="#">Our Mission</Link>
                      </h3>
                      <p>
                        To empower wealth creation through disciplined
                        investing, leveraging global opportunities while
                        maintaining rigorous risk management frameworks for
                        sustainable growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-lg-0 mt-xl-0">
                <div className="icon_box_all style_three">
                  <div className="icon_content ">
                    <div className="icon">
                      <span className="icon-growth" />
                    </div>
                    <div className="txt_content">
                      <h3>
                        <Link href="#">Our Principles</Link>
                      </h3>
                      <p>
                        We build trust through transparency and performance,
                        guided by:
                      </p>
                      <ul>
                        <li>Strategic Foresight</li>
                        <li>Data-Driven Decisions</li>
                        <li>Portfolio Resilience</li>
                        <li>Stakeholder Alignment</li>
                        <li>Innovation at Scale</li>
                      </ul>
                      <div className="btn_left">
                        <Link href="#" className="theme-btn one">
                          Explore Funds
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-lg-4 mt-xl-0">
                <div className="icon_box_all style_three">
                  <div className="icon_content ">
                    <div className="icon">
                      <span className="icon-binoculars" />
                    </div>
                    <div className="txt_content">
                      <h3>
                        <Link href="#">Our Vision</Link>
                      </h3>
                      <p>
                        To be the catalyst for transformative capital
                        deployment, bridging emerging markets with
                        institutional-grade investment frameworks across asset
                        classes.
                      </p>
                    </div>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_20" />
                {/*===============spacing==============*/}
                <div className="simple_image_boxes height_264px">
                  <img
                    src="/assets/images/icon-img-ab-2.jpg"
                    className="simp_img img-fluid"
                    alt="Global market analysis"
                  />
                </div>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_top_90" />
          {/*===============spacing==============*/}
        </section>
        {/*-service end-*/}
        {/*-tab--*/}
        <AboutTabs />
        {/*-tab-end-*/}
        {/*-team-*/}
        <section className="team-section">
          {/*===============spacing==============*/}
          <div className="pd_top_80" />
          {/*===============spacing==============*/}
          <div className="container">
            <div className="row align-items-end">
              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="title_all_box style_one  dark_color">
                  <div className="title_sections">
                    <div className="before_title"> Dedicated Team</div>
                    <h2>Professional Individuals</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="description_box">
                  <p>
                    Our power of choice is untrammelled and when nothing
                    prevents being able to do what we like best every pleasure.
                  </p>
                  {/*===============spacing==============*/}
                  <div className="mr_bottom_20" />
                  {/*===============spacing==============*/}
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="mr_bottom_30" />
              {/*===============spacing==============*/}
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="team_box style_one">
                  <div className="team_box_outer">
                    <div className="member_image">
                      <img
                        src="/assets/images/team/team-1.jpg"
                        alt="team image"
                      />
                    </div>
                    <div className="about_member">
                      <div className="share_media">
                        <ul className="first">
                          <li className="text">Share</li>
                          <li>
                            <i className="fa fa-share-alt" />
                          </li>
                        </ul>
                        <ul>
                          <li className="shar_alt">
                            <i className="fa fa-share-alt" />
                          </li>
                          <li>
                            <Link href="#">
                              {' '}
                              <i className="fa fa-facebook"> </i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              {' '}
                              <i className="fa fa-twitter"> </i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              {' '}
                              <i className="fa fa-skype"> </i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              {' '}
                              <i className="fa fa-instagram"> </i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="authour_details">
                        <span>Director </span>
                        <h6>Amelia Margaret</h6>
                        <div className="button_view">
                          <Link href="#" className="theme-btn one">
                            {' '}
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="mr_bottom_30" />
                {/*===============spacing==============*/}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="team_box style_one">
                  <div className="team_box_outer">
                    <div className="member_image">
                      <img
                        src="/assets/images/team/team-2.jpg"
                        alt="team image"
                      />
                    </div>
                    <div className="about_member">
                      <div className="share_media">
                        <ul className="first">
                          <li className="text">Share</li>
                          <li>
                            <i className="fa fa-share-alt" />
                          </li>
                        </ul>
                        <ul>
                          <li className="shar_alt">
                            <i className="fa fa-share-alt" />
                          </li>
                          <li>
                            <Link href="#">
                              {' '}
                              <i className="fa fa-facebook"> </i>{' '}
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              {' '}
                              <i className="fa fa-twitter"> </i>{' '}
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              {' '}
                              <i className="fa fa-skype"> </i>{' '}
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              {' '}
                              <i className="fa fa-instagram"> </i>{' '}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="authour_details">
                        <span>Team Leader </span>
                        <h6>Andrew Cameron</h6>
                        <div className="button_view">
                          <Link href="#" className="theme-btn one">
                            {' '}
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="mr_bottom_30" />
                {/*===============spacing==============*/}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="team_box style_one">
                  <div className="team_box_outer">
                    <div className="member_image">
                      <img
                        src="/assets/images/team/team-3.png"
                        alt="team image"
                      />
                    </div>
                    <div className="about_member">
                      <div className="share_media">
                        <ul className="first">
                          <li className="text">Share</li>
                          <li>
                            <i className="fa fa-share-alt" />
                          </li>
                        </ul>
                        <ul>
                          <li className="shar_alt">
                            <i className="fa fa-share-alt" />
                          </li>
                          <li>
                            <Link href="#">
                              {' '}
                              <i className="fa fa-facebook"> </i>{' '}
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              {' '}
                              <i className="fa fa-twitter"> </i>{' '}
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              {' '}
                              <i className="fa fa-skype"> </i>{' '}
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              {' '}
                              <i className="fa fa-instagram"> </i>{' '}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="authour_details">
                        <span>Manager </span>
                        <h6>Sofia Charlotte</h6>
                        <div className="button_view">
                          <Link href="#" className="theme-btn one">
                            {' '}
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="mr_bottom_30" />
                {/*===============spacing==============*/}
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_60" />
          {/*===============spacing==============*/}
        </section>
        {/*-team-end-*/}
        {/*-newsteller-*/}
        <Newsteller1 />
        {/*-newsteller end-*/}
      </Layout>
    </>
  );
}
