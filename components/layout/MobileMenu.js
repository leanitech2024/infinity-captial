'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileMenu({ handleMobileMenu }) {
  const pathname = usePathname();

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

              <li className="menu-item nav-item">
                <Link
                  href="/services"
                  className={`nav-link ${
                    pathname === '/services' ? 'active' : ''
                  }`}
                  onClick={handleMobileMenu}
                >
                  <span>Services</span>
                </Link>
              </li>

              <li className="menu-item nav-item">
                <Link
                  href="/sectors"
                  className={`nav-link ${
                    pathname === '/sectors' ? 'active' : ''
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
