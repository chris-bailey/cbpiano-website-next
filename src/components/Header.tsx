'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.scss';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className={styles.banner}>
        {/* Banner image is shown using CSS */}
      </header>

      <nav className={styles.topMenu}>
        <ul>
          <li>
            <Link href="/" className={isActive('/') ? styles.active : ''}>Home</Link>
          </li>
          <li>
            <Link href="/album" className={isActive('/album') ? styles.active : ''}>Album</Link>
          </li>
          <li>
            <Link href="/listen" className={isActive('/listen') ? styles.active : ''}>Listen</Link>
          </li>
          <li>
            <Link href="/about" className={isActive('/about') ? styles.active : ''}>About</Link>
          </li>
          <li>
            <Link href="/contact" className={isActive('/contact') ? styles.active : ''}>Contact</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  );
}