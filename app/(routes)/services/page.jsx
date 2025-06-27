import Layout from '@/components/layout/Layout';
import Newsteller1 from '@/components/sections/Newsteller1';
import Link from 'next/link';

// Single source of truth for service data
const services = [
  {
    id: 1,
    title: 'Investment Management',
    description:
      'Strategic investment solutions tailored to maximize your portfolio returns and growth.',
    image: '/assets/images/service/service-image-6.jpg',
    link: '/service-details',
  },
  {
    id: 2,
    title: 'Portfolio Advisory',
    description:
      'Expert guidance and advisory services to optimize your investment portfolio performance.',
    image: '/assets/images/service/service-image-5.jpg',
    link: '/service-details',
  },
  {
    id: 3,
    title: 'Risk Assessment',
    description:
      'Comprehensive risk analysis and mitigation strategies for secure investments.',
    image: '/assets/images/service/service-image-4.jpg',
    link: '/service-details',
  },
  {
    id: 4,
    title: 'Wealth Management',
    description:
      'Holistic wealth management solutions for high-net-worth individuals and families.',
    image: '/assets/images/service/service-image-3.png',
    link: '/service-details',
  },
  {
    id: 5,
    title: 'Financial Planning',
    description:
      'Comprehensive financial planning services to secure your financial future from infinity capitol.',
    image: '/assets/images/service/service-image-2.png',
    link: '/service-details',
  },
  {
    id: 6,
    title: 'Market Research',
    description:
      'In-depth market analysis and research to identify lucrative investment opportunities.',
    image: '/assets/images/service/service-image-1.png',
    link: '/service-details',
  },
];

// Reusable ServiceCard component
const ServiceCard = ({ service }) => (
  <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
    <div className="service_post style_one">
      <div className="image">
        <div className="overlay" />
        <img
          loading="lazy"
          width={500}
          height={500}
          src={service.image}
          alt={service.title}
        />
      </div>
      <div className="service_content icon_yes">
        <div className="icon_box">
          <span className="icon icon-thumbs-up icon" />
        </div>
        <h2 className="title_service">
          <Link href={service.link}>{service.title}</Link>
        </h2>
        <p className="short_desc">{service.description}</p>
        <Link className="read_more" href={service.link}>
          Read More <i className="icon-right-arrow-long" />
        </Link>
      </div>
    </div>
  </div>
);

export default function Service() {
  return (
    <Layout breadcrumbTitle="Our Services">
      <div>
        {/*===============spacing==============*/}
        <div className="pd_top_90" />
        {/*===============spacing==============*/}
        <section className="creote-service-box">
          <div className="container">
            <div className="row">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
        {/*===============spacing==============*/}
        <div className="pd_top_80" />
        {/*===============spacing==============*/}
        {/*-newsteller-*/}
        <Newsteller1 />
        {/*-newsteller end-*/}
      </div>
    </Layout>
  );
}
