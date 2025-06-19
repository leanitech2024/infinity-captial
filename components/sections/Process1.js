import Link from 'next/link';

export default function Process1() {
  return (
    <>
      <section className="process" id="process">
        {/*===============spacing==============*/}
        <div className="pd_top_80" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="title_all_box style_one text-center dark_color">
              <div className="title_sections">
                <div className="before_title">Our Approach to</div>
                <h2>Investment Process</h2>
              </div>
              {/*===============spacing==============*/}
              <div className="pd_bottom_30" />
              {/*===============spacing==============*/}
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="process_box style_two dark_color">
                <div className="process_box_outer_two">
                  <div className="number">Step 01</div>
                  <div className="content_box clearfix">
                    <div className="icon">
                      <div className="img">
                        <img
                          src="/assets/images/service-ico-3.png"
                          className="img-fluid svg_image"
                          alt="Deal sourcing"
                        />
                      </div>
                    </div>
                    <h2>
                      <Link href="#">Deal Sourcing</Link>
                    </h2>
                  </div>
                  <p>
                    Identifying high-potential investment opportunities through
                    our extensive network.
                  </p>
                  <Link href="#" className="theme-btn two">
                    Learn more
                  </Link>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="mr_bottom_30" />
              {/*===============spacing==============*/}
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="process_box style_two dark_color">
                <div className="process_box_outer_two">
                  <div className="number">Step 02</div>
                  <div className="content_box clearfix">
                    <div className="icon">
                      <div className="img">
                        <img
                          src="/assets/images/process-icon-im-1.png"
                          className="img-fluid svg_image"
                          alt="Due diligence"
                        />
                      </div>
                    </div>
                    <h2>
                      <Link href="#">Due Diligence</Link>
                    </h2>
                  </div>
                  <p>
                    Comprehensive analysis of financials, management, and market
                    potential.
                  </p>
                  <Link href="#" className="theme-btn two">
                    Learn more
                  </Link>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="mr_bottom_30" />
              {/*===============spacing==============*/}
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="process_box style_two dark_color">
                <div className="process_box_outer_two">
                  <div className="number">Step 03</div>
                  <div className="content_box clearfix">
                    <div className="icon">
                      <div className="img">
                        <img
                          src="/assets/images/service-ico-2.png"
                          className="img-fluid svg_image"
                          alt="Investment decision"
                        />
                      </div>
                    </div>
                    <h2>
                      <Link href="#">Investment Decision</Link>
                    </h2>
                  </div>
                  <p>
                    Strategic evaluation and approval by our investment
                    committee.
                  </p>
                  <Link href="#" className="theme-btn two">
                    Learn more
                  </Link>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="mr_bottom_30" />
              {/*===============spacing==============*/}
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="process_box style_two dark_color">
                <div className="process_box_outer_two">
                  <div className="number">Step 04</div>
                  <div className="content_box clearfix">
                    <div className="icon">
                      <div className="img">
                        <img
                          src="/assets/images/process-icon-im-2.png"
                          className="img-fluid svg_image"
                          alt="Value creation"
                        />
                      </div>
                    </div>
                    <h2>
                      <Link href="#">Value Creation</Link>
                    </h2>
                  </div>
                  <p>
                    Active partnership to drive growth and operational
                    improvements.
                  </p>
                  <Link href="#" className="theme-btn two">
                    Learn more
                  </Link>
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
    </>
  );
}
