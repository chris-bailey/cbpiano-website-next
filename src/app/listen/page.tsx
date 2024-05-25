import { Metadata } from 'next';
import styles from './listen.module.scss';

export const metadata: Metadata = {
    title: 'Listen | Chris Bailey Piano',
}

export default function Page() {
    return (
        <div className={styles.mainContentItunes}>
            <h1>I Will Always Remember</h1>
            <p>The album <em>I Will Always Remember</em> is available on <a href="https://music.apple.com/us/album/i-will-always-remember/435243973">iTunes</a> and <a href="https://open.spotify.com/album/18mNvmkOHA1Ykxt5PXHqXz">Spotify</a>.</p>
        </div>
    )
};