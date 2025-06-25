import Link from 'next/link';

const processSteps = [
  {
    step: 'Step 01',
    title: 'Deal Sourcing',
    img: '/assets/images/service-ico-3.png',
    alt: 'Deal sourcing',
    desc: 'Identifying high-potential investment opportunities through our extensive network.',
  },
  {
    step: 'Step 02',
    title: 'Due Diligence',
    img: '/assets/images/process-icon-im-1.png',
    alt: 'Due diligence',
    desc: 'Comprehensive analysis of financials, management, and market potential.',
  },
  {
    step: 'Step 03',
    title: 'Investment Decision',
    img: '/assets/images/service-ico-2.png',
    alt: 'Investment decision',
    desc: 'Strategic evaluation and approval by our investment committee from our team.',
  },
  {
    step: 'Step 04',
    title: 'Value Creation',
    img: '/assets/images/process-icon-im-2.png',
    alt: 'Value creation',
    desc: 'Active partnership to drive growth and operational improvements.',
  },
];

export default function Process1() {
  return (
    <section className="process" id="process">
      <div className="pd_top_80" />
      <div className="container">
        <div className="row">
          <div className="title_all_box style_one text-center dark_color">
            <div className="title_sections">
              <div className="before_title">Our Approach to</div>
              <h2>Investment Process</h2>
            </div>
            <div className="pd_bottom_30" />
          </div>

          {processSteps.map(({ step, title, img, alt, desc }, idx) => (
            <div
              className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12"
              key={idx}
            >
              <div className="process_box style_two dark_color">
                <div className="process_box_outer_two">
                  <div className="number">{step}</div>
                  <div className="content_box clearfix">
                    <div className="icon">
                      <div className="img">
                        <img
                          src={img}
                          className="img-fluid svg_image"
                          alt={alt}
                        />
                      </div>
                    </div>
                    <h2>
                      <Link href="#">{title}</Link>
                    </h2>
                  </div>
                  <p>{desc}</p>
                  <Link href="#" className="theme-btn two">
                    Learn more
                  </Link>
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
