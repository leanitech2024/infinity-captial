import { useState } from 'react';
import Link from 'next/link';

export default function AboutTabs() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <section
      className="tab-section bg_op_1"
      style={{ backgroundImage: 'url(/assets/images/tab-sec-bg.jpg)' }}
    >
      {/*===============spacing==============*/}
      <div className="pd_top_100" />
      {/*===============spacing==============*/}
      <div className="container">
        <div className="row">
          <div className="tabs_all_box tabs_all_box_start type_one">
            <div className="tab_over_all_box">
              <div className="tabs_header clearfix">
                <ul className="showcase_tabs_btns nav-pills nav clearfix">
                  <li className="nav-item">
                    <a
                      className={
                        activeIndex === 1
                          ? 's_tab_btn nav-link active'
                          : 's_tab_btn nav-link'
                      }
                      onClick={() => handleOnClick(1)}
                    >
                      01. Strategic Capital
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={
                        activeIndex === 2
                          ? 's_tab_btn nav-link active'
                          : 's_tab_btn nav-link'
                      }
                      onClick={() => handleOnClick(2)}
                    >
                      02. Market Insight
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={
                        activeIndex === 3
                          ? 's_tab_btn nav-link active'
                          : 's_tab_btn nav-link'
                      }
                      onClick={() => handleOnClick(3)}
                    >
                      03. Efficient Execution
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={
                        activeIndex === 4
                          ? 's_tab_btn nav-link active'
                          : 's_tab_btn nav-link'
                      }
                      onClick={() => handleOnClick(4)}
                    >
                      04. Smart Solutions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={
                        activeIndex === 5
                          ? 's_tab_btn nav-link active'
                          : 's_tab_btn nav-link'
                      }
                      onClick={() => handleOnClick(5)}
                    >
                      05. Proven Expertise
                    </a>
                  </li>
                </ul>
                <div className="toll_free">
                  <Link href="tel:180667586677">
                    {' '}
                    <i className="icon-phone-call" />
                    Schedule Investor Consultation
                  </Link>
                </div>
              </div>
              <div className="s_tab_wrapper">
                <div className="s_tabs_content">
                  <div
                    className={
                      activeIndex === 1
                        ? 's_tab fade active-tab show'
                        : 's_tab fade'
                    }
                  >
                    <div
                      className="tab_content one"
                      style={{
                        backgroundImage: 'url(/assets/images/tab-image.jpg)',
                      }}
                    >
                      <div className="content_image">
                        <h6>Why Choose Infinity Capital</h6>
                        <h2>Strategic Capital Allocation</h2>
                        <p>
                          Our disciplined approach to capital deployment
                          identifies high-growth sectors while maintaining
                          optimal risk-reward balance. We combine fundamental
                          analysis with macroeconomic trends to uncover
                          undervalued opportunities across emerging markets.
                        </p>
                        <Link href="#" className="rd_more">
                          Explore Strategies <i className="icon-right-arrow" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      activeIndex === 2
                        ? 's_tab fade active-tab show'
                        : 's_tab fade'
                    }
                  >
                    <div
                      className="tab_content one"
                      style={{
                        backgroundImage:
                          'url(/assets/images/blog/blog-image-8.jpg)',
                      }}
                    >
                      <div className="content_image">
                        <h6>Why Choose Infinity Capital</h6>
                        <h2>Deep Market Insight</h2>
                        <p>
                          Leveraging proprietary research and global
                          intelligence networks, we provide investors with
                          actionable market intelligence. Our team's 360-degree
                          perspective helps navigate volatility and capitalize
                          on disruptive trends before they mainstream.
                        </p>
                        <Link href="#" className="rd_more">
                          View Research <i className="icon-right-arrow" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      activeIndex === 3
                        ? 's_tab fade active-tab show'
                        : 's_tab fade'
                    }
                  >
                    <div
                      className="tab_content one"
                      style={{
                        backgroundImage:
                          'url(/assets/images/banner-five-bg.jpg)',
                      }}
                    >
                      <div className="content_image">
                        <h6>Why Choose Infinity Capital</h6>
                        <h2>Efficient Execution</h2>
                        <p>
                          Our streamlined investment process reduces
                          time-to-market without compromising due diligence.
                          From opportunity identification to closing, we
                          maintain rigorous standards while moving at the speed
                          the market demands.
                        </p>
                        <Link href="#" className="rd_more">
                          Our Process <i className="icon-right-arrow" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      activeIndex === 4
                        ? 's_tab fade active-tab show'
                        : 's_tab fade'
                    }
                  >
                    <div
                      className="tab_content one"
                      style={{
                        backgroundImage:
                          'url(/assets/images/home-4-about-1.jpg)',
                      }}
                    >
                      <div className="content_image">
                        <h6>Why Choose Infinity Capital</h6>
                        <h2>Smart Investment Solutions</h2>
                        <p>
                          We engineer customized financial instruments that
                          balance short-term liquidity needs with long-term
                          growth objectives. Our solutions adapt to changing
                          market conditions while protecting capital during
                          downturns.
                        </p>
                        <Link href="#" className="rd_more">
                          View Products <i className="icon-right-arrow" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      activeIndex === 5
                        ? 's_tab fade active-tab show'
                        : 's_tab fade'
                    }
                  >
                    <div
                      className="tab_content one"
                      style={{
                        backgroundImage:
                          'url(/assets/images/image-about-ls.jpg)',
                      }}
                    >
                      <div className="content_image">
                        <h6>Why Choose Infinity Capital</h6>
                        <h2>Proven Investment Expertise</h2>
                        <p>
                          With 10+ years navigating market cycles, our team has
                          delivered consistent alpha across asset classes. We
                          bring institutional-grade discipline to private
                          investors, combining Wall Street rigor with
                          entrepreneurial agility.
                        </p>
                        <Link href="#" className="rd_more">
                          Meet Our Team <i className="icon-right-arrow" />
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
      <div className="pd_bottom_90" />
      {/*===============spacing==============*/}
    </section>
  );
}
