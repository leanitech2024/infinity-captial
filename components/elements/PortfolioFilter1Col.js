'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Isotope from 'isotope-layout';

// Portfolio data configuration
const PORTFOLIO_DATA = [
  {
    id: 1,
    category: 'sector_category-technology',
    categoryName: 'Technology & Software',
    title: 'AI-Driven Fintech Innovation Platform',
    description:
      'Strategic investment in cutting-edge AI technology revolutionizing financial services, digital payments, and blockchain solutions for next-generation banking.',
    investment: '$45M Series B',
    portfolio: 'TechCorp Solutions',
    image: '/assets/images/projects/project-2-img.jpg',
    imageAlt: 'AI-Driven Fintech Platform',
  },
  {
    id: 2,
    category: 'sector_category-healthcare',
    categoryName: 'Healthcare & Pharmaceuticals',
    title: 'Next-Gen Biotech Drug Development',
    description:
      'Funding breakthrough pharmaceutical research for cancer treatment, precision medicine solutions, and innovative healthcare technologies transforming patient care globally.',
    investment: '$60M Series C',
    portfolio: 'MedLife Pharmaceuticals',
    image: '/assets/images/projects/project-3-img.jpg',
    imageAlt: 'Biotech Drug Development',
  },
  {
    id: 3,
    category: 'sector_category-finance',
    categoryName: 'Financial Services',
    title: 'Digital Banking & Wealth Management',
    description:
      'Revolutionary digital banking platform transforming wealth management, investment advisory, and financial services for high-net-worth individuals and institutional clients.',
    investment: '$80M Series D',
    portfolio: 'NextGen Financial',
    image: '/assets/images/projects/project-1-img.jpg',
    imageAlt: 'Digital Banking Platform',
  },
  {
    id: 4,
    category: 'sector_category-manufacturing',
    categoryName: 'Manufacturing & Industrial',
    title: 'Smart Manufacturing Automation Systems',
    description:
      'Industry 4.0 automation solutions revolutionizing manufacturing efficiency, sustainable production processes, and supply chain optimization for global markets.',
    investment: '$35M Series A',
    portfolio: 'Industrial Innovations Ltd',
    image: '/assets/images/projects/project-4-img.jpg',
    imageAlt: 'Smart Manufacturing Systems',
  },
  {
    id: 5,
    category: 'sector_category-energy',
    categoryName: 'Energy & Utilities',
    title: 'Renewable Energy Infrastructure Development',
    description:
      'Large-scale solar and wind energy projects driving sustainable power generation, clean energy transition, and green infrastructure for emerging markets worldwide.',
    investment: '$120M Infrastructure',
    portfolio: 'GreenPower Energy',
    image: '/assets/images/projects/project-6-img.jpg',
    imageAlt: 'Renewable Energy Infrastructure',
  },
  {
    id: 6,
    category: 'sector_category-realestate',
    categoryName: 'Real Estate & Infrastructure',
    title: 'Premium Commercial Real Estate Development',
    description:
      'Strategic development of premium commercial spaces, mixed-use properties, and smart city infrastructure projects in tier-1 metropolitan areas and growth corridors.',
    investment: '$200M Development',
    portfolio: 'Metropolitan Properties',
    image: '/assets/images/projects/project-5-img.jpg',
    imageAlt: 'Commercial Real Estate',
  },
  {
    id: 7,
    category: 'sector_category-consumer',
    categoryName: 'Consumer Goods & Retail',
    title: 'E-commerce & Direct-to-Consumer Brands',
    description:
      'Investment in innovative consumer brands, e-commerce platforms, and retail technology solutions transforming customer experience and market accessibility.',
    investment: '$25M Series B',
    portfolio: 'RetailTech Innovations',
    image: '/assets/images/projects/project-1-img.jpg',
    imageAlt: 'E-commerce Platform',
  },
];

// Filter configuration
const FILTER_OPTIONS = [
  { key: '*', label: 'All Sectors' },
  { key: 'sector_category-technology', label: 'Technology' },
  { key: 'sector_category-healthcare', label: 'Healthcare' },
  { key: 'sector_category-finance', label: 'Finance' },
  { key: 'sector_category-manufacturing', label: 'Manufacturing' },
  { key: 'sector_category-energy', label: 'Energy' },
  { key: 'sector_category-realestate', label: 'Real Estate' },
  { key: 'sector_category-consumer', label: 'Consumer' },
];

// Social media configuration
const SOCIAL_PLATFORMS = [
  { name: 'facebook', icon: 'fa-facebook' },
  { name: 'twitter', icon: 'fa-twitter' },
  { name: 'whatsapp', icon: 'fa-whatsapp' },
  { name: 'telegram', icon: 'fa-telegram' },
  { name: 'skype', icon: 'fa-skype' },
];

// Reusable components
const FilterButton = ({ filter, activeFilter, onClick }) => (
  <li
    className={activeFilter === filter.key ? 'current' : ''}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && onClick()}
  >
    {filter.label}
  </li>
);

const SocialShareButton = ({ platform, title }) => (
  <button
    className="m_icon"
    title={platform.name}
    data-sharer={platform.name}
    data-title={title}
    data-url="project-details"
    {...(platform.name === 'telegram' && { 'data-to': '+91-98765-43210' })}
  >
    <i className={`fa ${platform.icon}`} />
  </button>
);

const ProjectCard = ({ project }) => (
  <div
    className={`project-wrapper grid-item col-lg-12 col-md-12 col-sm-12 col-xs-12 ${project.category}`}
  >
    <div className="project_box style_three clearfix">
      <div className="content_inner">
        <div>
          <Link href="#">{project.categoryName}</Link>
        </div>
        <h2>
          <Link href="project-details">{project.title}</Link>
        </h2>
        <p className="short_desc">{project.description}</p>
        <Link href="project-details" className="read_more">
          Read More <span className="icon-right-arrow-long" />
        </Link>
        <div className="share_me">
          <div className="share_socail">
            <div className="title">Share</div>
            {SOCIAL_PLATFORMS.map((platform) => (
              <SocialShareButton
                key={platform.name}
                platform={platform}
                title={project.title}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="image">
        <img
          loading="lazy"
          width={370}
          height={247}
          src={project.image}
          className="wp-post-image"
          alt={project.imageAlt}
        />
        <Link href="project-details" className="pro-link" />
        <div className="overlay" />
        <div className="text">
          <ul>
            <li>
              Investment: <span>{project.investment}</span>
            </li>
            <li>
              Portfolio: <span>{project.portfolio}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// Main component
export default function PortfolioFilter1Col() {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState('*');
  const [isIsotopeInitialized, setIsIsotopeInitialized] = useState(false);

  // Initialize Isotope
  useEffect(() => {
    const initIsotope = () => {
      if (typeof window !== 'undefined') {
        isotope.current = new Isotope('.project_container', {
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            columnWidth: '.grid-item',
          },
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
          },
        });
        setIsIsotopeInitialized(true);
      }
    };

    const timer = setTimeout(initIsotope, 1000);

    return () => {
      clearTimeout(timer);
      if (isotope.current) {
        isotope.current.destroy();
      }
    };
  }, []);

  // Handle filtering
  useEffect(() => {
    if (isotope.current && isIsotopeInitialized) {
      const filter = filterKey === '*' ? '*' : `.${filterKey}`;
      isotope.current.arrange({ filter });
    }
  }, [filterKey, isIsotopeInitialized]);

  const handleFilterChange = useCallback((key) => {
    setFilterKey(key);
  }, []);

  return (
    <div className="portfolio-filter-container">
      {/* Filter Controls */}
      <div className="row">
        <div className="col-lg-12">
          <div className="fliter_group" style={{ textAlign: 'center' }}>
            <ul className="project_filter dark clearfix">
              {FILTER_OPTIONS.map((filter) => (
                <FilterButton
                  key={filter.key}
                  filter={filter}
                  activeFilter={filterKey}
                  onClick={() => handleFilterChange(filter.key)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="project_container clearfix">
        <div className="row clearfix">
          {PORTFOLIO_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
