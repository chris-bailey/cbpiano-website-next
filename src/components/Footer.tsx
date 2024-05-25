import React from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <hr />
      <div className={styles.footerLeft}>
        <p>Copyright &copy; {currentYear} Chris Bailey Productions</p>
      </div>
      <div className={styles.footerRight}>
        <Link href="/privacy">Privacy Policy</Link> &nbsp; | &nbsp;
        <Link href="/sitemap">Sitemap</Link>
      </div>
    </footer>
  );
}