import Link from 'next/link';

export default function Footer1({}) {
  return (
    <>
      <div className="footer_area" id="footer_contents">
        <div className="footer_widgets_wrap bg_dark_2">
          {/*===============spacing==============*/}
          <div className="pd_top_80" />
          {/*===============spacing==============*/}
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="footer_widgets about_company light_color">
                  <div className="about_company_inner">
                    <div className="footer_logo">
                      <Link href="#">
                        <img
                          src="/assets/images/logo-default.png"
                          className="img-fluid"
                          alt="logo"
                        />
                      </Link>
                      {/*===============spacing==============*/}
                      <div className="pd_bottom_30" />
                      {/*===============spacing==============*/}
                    </div>
                    <div className="content_box">
                      <p>
                        Duty the obligations of business will frequently occur
                        that pleasure have too repudiated annoyances endures
                        accepted.
                      </p>
                      <div className="consulting">
                        <div className="image">
                          <img
                            src="/assets/images/authour-image.png"
                            alt="need help"
                          />
                        </div>
                        <div className="help_con">
                          <h6>Need Help?</h6>
                          <h2>
                            <Link href="#"> Free Consultation</Link>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="footer_widgets wid_tit style_one">
                  <div className="fo_wid_title">
                    <h2>Get In Touch</h2>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_25" />
                {/*===============spacing==============*/}
                <div className="footer_widgets get_in_touch_foo light_color">
                  <div className="get_intouch_inrfo">
                    <div className="foo_cont_inner">
                      <div className="top">
                        <h6> Location</h6>
                        <p>
                          Innov8 Hotel Pride Plaza Aerocity, New Delhi-110037
                        </p>
                      </div>
                      <div className="bottom">
                        <h6> Contact</h6>
                        <div className="con_content">
                          <h5> Phone :</h5>
                          <Link href="/tel:+919810844046"> +919810844046</Link>
                        </div>
                        <div className="con_content">
                          <h5> Phone :</h5>
                          <Link href="/tel:+9560340000"> +9560340000</Link>
                        </div>
                        <div className="con_content">
                          <h5> Mail Us :</h5>
                          <Link href="/tel:Info@infinitycapitol.com">
                            {' '}
                            Info@infinitycapitol.com
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                <div className="footer_widgets wid_tit style_one">
                  <div className="fo_wid_title">
                    <h2>Company</h2>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_25" />
                {/*===============spacing==============*/}
                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                  <div className="navigation_foo_box">
                    <div className="navigation_foo_inner">
                      <ul className="menu">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/about-us">About Us</Link>
                        </li>
                        <li>
                          <Link href="/services">Services</Link>
                        </li>
                        <li>
                          <Link href="/sectors">Sectors</Link>
                        </li>
                        <li>
                          <Link href="/about-us">Insights</Link>
                        </li>
                        <li>
                          <Link href="/services">Our Solutions</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                <div className="footer_widgets wid_tit style_one">
                  <div className="fo_wid_title">
                    <h2>Information</h2>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_25" />
                {/*===============spacing==============*/}
                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                  <div className="navigation_foo_box">
                    <div className="navigation_foo_box">
                      <div className="navigation_foo_inner">
                        <ul className="menu">
                          <li>
                            <Link href="/about-us">How it’s Work</Link>
                          </li>
                          <li>
                            <Link href="/about-us">Partners</Link>
                          </li>
                          <li>
                            <Link href="/about-us">Testimonials</Link>
                          </li>
                          <li>
                            <Link href="/sectors">Key Areas</Link>
                          </li>
                          <li>
                            <Link href="/sectors">Case Studies</Link>
                          </li>
                          <li>
                            <Link href="/contact">Pricing</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                <div className="footer_widgets wid_tit style_one">
                  <div className="fo_wid_title">
                    <h2>Essentials</h2>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_25" />
                {/*===============spacing==============*/}
                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                  <div className="navigation_foo_box">
                    <div className="navigation_foo_inner">
                      <ul className="menu">
                        <li>
                          <Link href="/services">Careers</Link>
                        </li>
                        <li>
                          <Link href="/services">Infrastructure</Link>
                        </li>
                        <li>
                          <Link href="/services">Client Support</Link>
                        </li>
                        <li>
                          <Link href="/services">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="/services">Terms of Use</Link>
                        </li>
                        <li>
                          <Link href="/services">Sitemap</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_50" />
          {/*===============spacing==============*/}
        </div>
        <div className="creote-footer-copyright bg_dark_3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12">
                {/*===============spacing==============*/}
                <div className="pd_top_10" />
                {/*===============spacing==============*/}
                <div className="footer_copy_content color_white">
                  © {new Date().getFullYear()}{' '}
                  <Link target="_blank" href="https://infinitycapitol.com">
                    Infinity Captiol.
                  </Link>{' '}
                  All Rights Reserved.
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_10" />
                {/*===============spacing==============*/}
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-md-end">
                {/*===============spacing==============*/}
                <div className="pd_top_10" />
                {/*===============spacing==============*/}
                <div className="footer_copy_content_right">
                  <div className="social_media_v_one">
                    <ul>
                      <li>
                        <Link href="#">
                          <span className="fa fa-facebook" />
                          <small>facebook</small>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span className="fa fa-twitter" />
                          <small>twitter</small>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span className="fa fa-skype" />
                          <small>skype</small>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span className="fa fa-instagram" />
                          <small>instagram</small>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_10" />
                {/*===============spacing==============*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
