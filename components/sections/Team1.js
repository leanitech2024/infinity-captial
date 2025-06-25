import Link from 'next/link';

const teamMembers = [
  {
    name: 'Rahul Sharma',
    title: 'Managing Partner',
    image: '/assets/images/team/team-1.jpg',
    alt: 'Managing Partner',
  },
  {
    name: 'Priya Patel',
    title: 'Investment Director',
    image: '/assets/images/team/team-2.jpg',
    alt: 'Investment Director',
  },
  {
    name: 'Arjun Mehta',
    title: 'Portfolio Manager',
    image: '/assets/images/team/team-3.png',
    alt: 'Portfolio Manager',
  },
];

export default function Team1() {
  return (
    <section className="team bg_light_1">
      <div className="pd_top_80" />
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-12 col-md-12">
            <div className="title_all_box style_one dark_color">
              <div className="title_sections">
                <div className="before_title">Investment Experts</div>
                <h2>Our Leadership Team</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12">
            <div className="description_box">
              <p>
                Our team combines decades of investment experience with deep
                sector expertise to deliver superior returns for our investors.
              </p>
              <div className="mr_bottom_20" />
            </div>
          </div>
          <div className="mr_bottom_30" />
        </div>

        <div className="row">
          {teamMembers.map(({ name, title, image, alt }, idx) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={idx}>
              <div className="team_box style_one">
                <div className="team_box_outer">
                  <div className="member_image">
                    <img src={image} alt={alt} />
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
                            <i className="fa fa-linkedin" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa fa-envelope" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="authour_details">
                      <span>{title}</span>
                      <h6>{name}</h6>
                      <div className="button_view">
                        <Link href="#" className="theme-btn one">
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mr_bottom_30" />
            </div>
          ))}
        </div>
      </div>
      <div className="pd_bottom_60" />
    </section>
  );
}
