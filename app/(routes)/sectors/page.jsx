import Layout from '@/components/layout/Layout';
import PortfolioFilter1ColClient from '@/components/elements/PortfolioFilter1ColClient';
import Newsteller1 from '@/components/sections/Newsteller1';

export default function Sectors() {
  return (
    <Layout breadcrumbTitle="Investment Sectors">
      <div>
        <section className="project_all filt_style_two filter_enabled">
          <div className="pd_top_90" />
          <div className="container">
            <PortfolioFilter1ColClient />
          </div>
          <div className="pd_bottom_90" />
        </section>

        <Newsteller1 />
      </div>
    </Layout>
  );
}
