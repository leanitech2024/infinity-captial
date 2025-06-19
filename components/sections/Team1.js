import Link from 'next/link';

export default function Team1() {
  return (
    <>
      <section className="team bg_light_1">
        {/*===============spacing==============*/}
        <div className="pd_top_80" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="title_all_box style_one dark_color">
                <div className="title_sections">
                  <div className="before_title">Investment Experts</div>
                  <h2>Our Leadership Team</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="description_box">
                <p>
                  Our team combines decades of investment experience with deep
                  sector expertise to deliver superior returns for our
                  investors.
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
                      alt="Managing Partner"
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
                            <i className="fa fa-linkedin"> </i>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa fa-twitter"> </i>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa fa-envelope"> </i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="authour_details">
                      <span>Managing Partner</span>
                      <h6>Rahul Sharma</h6>
                      <div className="button_view">
                        <Link href="#" className="theme-btn one">
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
                      alt="Investment Director"
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
                            <i className="fa fa-linkedin"> </i>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa fa-twitter"> </i>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa fa-envelope"> </i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="authour_details">
                      <span>Investment Director</span>
                      <h6>Priya Patel</h6>
                      <div className="button_view">
                        <Link href="#" className="theme-btn one">
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
                      alt="Portfolio Manager"
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
                            <i className="fa fa-linkedin"> </i>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa fa-twitter"> </i>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa fa-envelope"> </i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="authour_details">
                      <span>Portfolio Manager</span>
                      <h6>Arjun Mehta</h6>
                      <div className="button_view">
                        <Link href="#" className="theme-btn one">
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
    </>
  );
}
