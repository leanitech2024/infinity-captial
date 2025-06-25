'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function FloatingMenuWrapper() {
  const [isFloating, setFloating] = useState(false);
  const handleFloating = () => setFloating(!isFloating);

  return (
    <div className={`floating_menu_box ${isFloating ? 'remove_floating' : ''}`}>
      <ul className="float_menu_box">
        <i className="close fa fa-times" onClick={handleFloating} />
        <li className="floating_menu_text active">
          <Link href="#home"> Home </Link>
        </li>
        <li className="floating_menu_text ">
          <Link href="#about">About </Link>
        </li>
        <li className="floating_menu_text ">
          <Link href="#service"> Service </Link>
        </li>
        <li className="floating_menu_text ">
          <Link href="#process"> Process </Link>
        </li>
        <li className="floating_menu_text ">
          <Link href="#projects"> Projects </Link>
        </li>
      </ul>
    </div>
  );
}
