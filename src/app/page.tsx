import { Metadata } from 'next'
import styles from './home.module.scss';

export const metadata: Metadata = {
  title: 'Chris Bailey - New Age Pianist',
}

export default function Page() {
  return (
    <div id="mainContent">
      <h1>New Age Pianist & Composer</h1>

      <div id="youtubeContent" className={styles.youtubeContent}>
        <iframe
          width="350"
          height="223"
          src="https://www.youtube.com/embed/XxsYYU6xPo0?rel=0&showinfo=0"
          style={{ border: '0' }}
          allowFullScreen
          title="Chris playing the song Passion on the piano"
        ></iframe>
      </div>

      <p>In this day and age it's difficult to remember to stop and smell the roses. When I feel like I'm losing touch with
        what's important, I sit down at the piano and I watch to see what happens. Everything that I'm feeling flows through
        me into the piano and music is created.</p>

      <p>While composing I am in a place without time or mind. If I allow myself to think too much then the whole process
        breaks down and the music stops. A balance must be found between the mind and the heart so that everything flows
        smoothly.</p>

      <p>I am very excited to be able to share the album titled <em>I Will Always Remember</em>. I started composing some of the
        songs when I was just 15 years old. Each and every song on this album is the culmination of years of work. Each and
        every song was created during an important event in my life that inspired the music.</p>

      <p>This album has been a labour of love. I composed, arranged, performed, produced, mixed and mastered every single
        song with the latest technology available at the time. It is one of the largest projects I have ever undertaken and
        I am pleased to be able to share it.</p>
      <br />

      <p>All of the songs on the album are available on <a
        href="https://music.apple.com/us/album/i-will-always-remember/435243973">iTunes</a> and <a
          href="https://open.spotify.com/album/18mNvmkOHA1Ykxt5PXHqXz">Spotify</a>.</p>

      <p>So please take a deep breath, relax, and enjoy the music!</p>
    </div>
  );
}