'use client';
import { useEffect, useState } from 'react';
import BackToTop from '../elements/BackToTop';
import Breadcrumb from './Breadcrumb';
import Footer1 from './footer/Footer1';
import Header1 from './header/Header1';
import MobileMenu from './MobileMenu';
import ModalPopup from './ModalPopup';
import SearchPopup from './SearchPopup';

export default function Layout({ breadcrumbTitle, children, blogMetaSingle }) {
  // Search
  const [isSearch, setSearch] = useState(false);
  const handleSearch = () => setSearch(!isSearch);

  // Contact popup
  const [isContactPopup, setContactPopup] = useState(false);
  const handleContactPopup = () => setContactPopup(!isContactPopup);

  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

  // Scroll Header
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  return (
    <>
      <div
        id="page"
        className={`page_wapper hfeed site ${
          scroll ? 'fixed-header floating-menu' : ''
        } ${isMobileMenu ? 'crt_mobile_menu-visible' : ''}`}
      >
        <div id="wrapper_full" className="content_all_warpper">
          <Header1
            handleSearch={handleSearch}
            handleContactPopup={handleContactPopup}
            handleMobileMenu={handleMobileMenu}
          />

          {breadcrumbTitle && (
            <Breadcrumb
              breadcrumbTitle={breadcrumbTitle}
              blogMetaSingle={blogMetaSingle}
            />
          )}

          <div id="content" className="site-content">
            {children}
          </div>
        </div>

        <Footer1 />

        <MobileMenu
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
        />
        <SearchPopup isSearch={isSearch} handleSearch={handleSearch} />
        <ModalPopup
          isContactPopup={isContactPopup}
          handleContactPopup={handleContactPopup}
        />
      </div>
      <BackToTop />
    </>
  );
}
