import Link from 'next/link';
import styles from './sitemap.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap | Chris Bailey Piano',
}

export default function Page() {
  return (
    <div className={styles.mainContentSitemap}>
      <h1>Sitemap</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
      </ul>
      <ul>
        <li><Link href="/album">Album</Link></li>
      </ul>
      <ul>
        <li><Link href="/listen">Listen</Link></li>
      </ul>
      <ul>
        <li><Link href="/about">About</Link></li>
      </ul>
      <ul>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}