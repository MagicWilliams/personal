import { Inter, Space_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.scss';
import '../styles/base.css';
import PinnedWorks from '../components/PinnedWorks/PinnedWorks';
import ClientWrapper from './ClientWrapper';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata = {
  title: 'david latimore ii: a digital portfolio',
  description: 'Creative technologist and software artist.',
  icons: {
    icon: '/favicon.ico',
    apple: '/img/apple-touch-icon.png',
  },
  manifest: '/img/site.webmanifest',
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </head>
      <body>
        <ClientWrapper>
          <div className="App">
            {children}
            <Analytics />
            <PinnedWorks />
          </div>
        </ClientWrapper>
      </body>
    </html>
  );
}
