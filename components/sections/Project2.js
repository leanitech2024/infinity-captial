'use client';
import dynamic from 'next/dynamic';

const PortfolioFilter = dynamic(() => import('../elements/PortfolioFilter'), {
  ssr: false,
});
export default function Project2() {
  return (
    <>
      <section className="project-section bg_light_1">
        {/*===============spacing==============*/}
        <div className="pd_top_80" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_two text-center dark_color">
                <div className="title_sections two">
                  <div className="before_title">Incredibly</div>
                  <h2>Effective Case Studies</h2>
                </div>
                {/*===============spacing==============*/}
                <div className="mr_bottom_20" />
                {/*===============spacing==============*/}
              </div>
            </div>
          </div>
          <div className="project_all filt_style_one filter_enabled">
            <PortfolioFilter />
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_60" />
        {/*===============spacing==============*/}
      </section>
    </>
  );
}
