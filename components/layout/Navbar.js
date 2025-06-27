'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
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

      <li className="menu-item nav-item">
        <Link href="/services" className="nav-link">
          <span>Services</span>
        </Link>
      </li>

      <li className="menu-item nav-item">
        <Link
          href="/sectors"
          className={`nav-link ${pathname === '/sectors' ? 'active' : ''}`}
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
  );
}
