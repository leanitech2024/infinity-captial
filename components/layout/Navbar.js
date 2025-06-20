'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <ul id="myNavbar" className="navbar_nav">
        <li className="menu-item nav-item">
          <Link
            href="/"
            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
          >
            <span>Home</span>
          </Link>
        </li>

        <li className="menu-item nav-item">
          <Link
            href="/about-us"
            className={`nav-link ${pathname === '/about-us' ? 'active' : ''}`}
          >
            <span>About Us</span>
          </Link>
        </li>

        <li className="menu-item  nav-item">
          <Link href="/service-default" className=" nav-link">
            <span>Services</span>
          </Link>
          {/*   <ul className="dropdown-menu">
            <li className="menu-item nav-item">
              <Link
                href="/service-default"
                className={`dropdown-item nav-link ${
                  pathname === '/service-default' ? 'active' : ''
                }`}
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
              >
                <span>Service Details</span>
              </Link>
            </li>
          </ul> */}
          {/*   <div className="dropdown-btn">
            <span className="fa fa-angle-down"></span>
          </div> */}
        </li>

        <li className="menu-item nav-item">
          <Link
            href="/project-1-column-grid"
            className={`nav-link ${
              pathname === '/project-1-column-grid' ? 'active' : ''
            }`}
          >
            <span>Sector</span>
          </Link>
        </li>

        <li className="menu-item nav-item">
          <Link
            href="/contact"
            className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
          >
            <span>Contact Us</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
