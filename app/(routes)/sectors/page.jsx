'use client';
import Layout from '@/components/layout/Layout';
import dynamic from 'next/dynamic';

const PortfolioFilter1Col = dynamic(
  () => import('@/components/elements/PortfolioFilter1Col'),
  {
    ssr: false,
  }
);

export default function Sectors() {
  return (
    <>
      <Layout breadcrumbTitle="Investment Sectors">
        <div>
          <section className="project_all filt_style_two filter_enabled">
            {/*===============spacing==============*/}
            <div className="pd_top_90" />
            {/*===============spacing==============*/}
            <div className="container">
              <PortfolioFilter1Col />
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_90" />
            {/*===============spacing==============*/}
          </section>
          {/*-newsteller-*/}
          <section className="newsteller style_one bg_dark_1">
            {/*===============spacing==============*/}
            <div className="pd_top_40" />
            {/*===============spacing==============*/}
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="content">
                    <h2>Join Our Investment Newsletter</h2>
                    <p>
                      For receiving sector insights and investment opportunities
                      directly in your inbox.{' '}
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="item_scubscribe">
                    <div className="input_group">
                      <form
                        className="mc4wp-form"
                        method="post"
                        data-name="Subscibe"
                      >
                        <div className="mc4wp-form-fields">
                          <input
                            type="email"
                            name="EMAIL"
                            placeholder="Your email address"
                            required
                          />
                          <input type="submit" defaultValue="Subscribe" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_40" />
            {/*===============spacing==============*/}
          </section>
          {/*-newsteller end-*/}
        </div>
      </Layout>
    </>
  );
}
