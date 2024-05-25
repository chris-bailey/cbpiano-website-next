import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics';

// Define the metadata for the website
export const metadata: Metadata = {
  title: "Chris Bailey - New Age Pianist & Composer",
  description: "Official website of Chris Bailey - new age pianist & composer.",
  authors: [{ name: "Chris Bailey" }],
  keywords: [
    "chris bailey piano",
    "i will always remember",
    "chris bailey",
    "chris bailey music",
    "chris bailey new age",
    "chris bailey pianist",
    "chris bailey composer",
    "new age pianist",
    "new age composer"
  ]
};

// Define the viewport settings
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Define the RootLayout component, which will be used to wrap pages
export default function RootLayout({
  children, // React children components to be wrapped
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body>
        <Header />
        {children}
        <Footer />
        <noscript>
          <style>{`
            .no-js-message {
              background-color: #ffcc00;
              color: #000;
              padding: 10px;
              text-align: center;
              font-weight: bold;
            }
          `}</style>
          <div className="no-js-message">
            JavaScript is disabled in your browser. Some features of this website may not work correctly.
          </div>
        </noscript>
      </body>
    </html>
  );
}
