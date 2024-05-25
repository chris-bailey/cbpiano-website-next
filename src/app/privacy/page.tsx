import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Chris Bailey Piano',
}

export default function Page() {
  return (
    <div id="mainContent">
      <h1>Privacy Policy</h1>
      <p>This website does not collect information such as names, email addresses, or phone numbers.</p>
      <p>If you have any questions or concerns, please feel free to <Link href="/contact">contact me</Link>.</p>
      <br />
    </div>
  );
}