'use client';
import Link from 'next/link';
import Navbar from '../Navbar';

export default function Header1({
  handleSearch,
  handleContactPopup,
  handleMobileMenu,
}) {
  return (
    <>
      <div className="header_area" id="header_contents">
        <div className="top_bar style_one">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="top_inner">
                  <div className="left_side common_css">
                    <div className="contntent address">
                      <i className="icon-placeholder" />
                      <div className="text">
                        <small>Location</small>
                        <span>61W Business Str Hobert, LA </span>
                      </div>
                    </div>
                    <div className="contntent email">
                      <i className="icon-email" />
                      <div className="text">
                        <small>Email</small>
                        <Link href="mailto:sendmail@infinitycaptial.com">
                          sendmail@infinitycaptial.com
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="right_side common_css">
                    <div className="contntent phone">
                      <i className="icon-phone-call" />
                      <div className="text">
                        <small>Phone</small>
                        <Link href="tel:+9806071234">+9806071234</Link>
                      </div>
                    </div>
                    <div className="contntent media">
                      <i className="icon-share" />
                      <div className="text">
                        <small>Share</small>
                        <Link href="#">
                          <small>Fb</small>
                        </Link>
                        <Link href="#">
                          <small>Tw</small>
                        </Link>
                        <Link href="#">
                          <small>Sk</small>
                        </Link>
                        <Link href="#">
                          <small>Te</small>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="header header_default style_one get_sticky_header">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
                <div className="header_logo_box">
                  <Link href="/" className="logo navbar-brand">
                    <img
                      src="/assets/images/logo-default.jpg"
                      alt="Creote Elementor"
                      className="logo_default"
                    />
                    <img
                      src="/assets/images/logo-default.jpg"
                      alt="Creote Elementor"
                      className="logo__sticky"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-10 col-md-3 col-sm-3 col-xs-3 menu_column">
                <div
                  className="navbar_togglers hamburger_menu"
                  onClick={handleMobileMenu}
                >
                  <span className="line" />
                  <span className="line" />
                  <span className="line" />
                </div>
                <div className="header_content_collapse">
                  <div className="header_menu_box">
                    <div className="navigation_menu">
                      <Navbar />
                    </div>
                  </div>
                  <div className="header_right_content">
                    <ul>
                      <li className="header-button">
                        <Link href="/contact" className="theme-btn one">
                          {' '}
                          Get In Touch
                        </Link>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={handleContactPopup}
                          className="contact-toggler"
                        >
                          <i className="icon-bar" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
