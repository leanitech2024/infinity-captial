'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function MobileMenu({ handleMobileMenu }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: '',
  });

  const pathname = usePathname();

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <div className="crt_mobile_menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <nav className="menu-box">
          <div className="close-btn" onClick={handleMobileMenu}>
            <i className="icon-close" />
          </div>

          <div className="menu-outer">
            <ul id="myNavbar" className="navbar_nav">
              <li className="menu-item nav-item">
                <Link
                  href="/"
                  className={`nav-link ${pathname === '/' ? 'active' : ''}`}
                  onClick={handleMobileMenu}
                >
                  <span>Home</span>
                </Link>
              </li>

              <li className="menu-item nav-item">
                <Link
                  href="/about-us"
                  className={`nav-link ${
                    pathname === '/about-us' ? 'active' : ''
                  }`}
                  onClick={handleMobileMenu}
                >
                  <span>About Us</span>
                </Link>
              </li>

              <li className="menu-item menu-item-has-children dropdown nav-item">
                <Link
                  href="/service-default"
                  className="dropdown-toggle nav-link"
                >
                  <span>Services</span>
                </Link>
                <ul
                  className="dropdown-menu"
                  style={{ display: `${isActive.key == 1 ? 'block' : 'none'}` }}
                >
                  <li className="menu-item nav-item">
                    <Link
                      href="/service-default"
                      className={`dropdown-item nav-link ${
                        pathname === '/service-default' ? 'active' : ''
                      }`}
                      onClick={handleMobileMenu}
                    >
                      <span>Our Services</span>
                    </Link>
                  </li>
                  <li className="menu-item nav-item">
                    <Link
                      href="/service-details"
                      className={`dropdown-item nav-link ${
                        pathname === '/service-details' ? 'active' : ''
                      }`}
                      onClick={handleMobileMenu}
                    >
                      <span>Service Details</span>
                    </Link>
                  </li>
                </ul>
                <div className="dropdown-btn" onClick={() => handleToggle(1)}>
                  <span className="fa fa-angle-down" />
                </div>
              </li>

              <li className="menu-item nav-item">
                <Link
                  href="/project-1-column-grid"
                  className={`nav-link ${
                    pathname === '/project-1-column-grid' ? 'active' : ''
                  }`}
                  onClick={handleMobileMenu}
                >
                  <span>Sector</span>
                </Link>
              </li>

              <li className="menu-item nav-item">
                <Link
                  href="/contact"
                  className={`nav-link ${
                    pathname === '/contact' ? 'active' : ''
                  }`}
                  onClick={handleMobileMenu}
                >
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
