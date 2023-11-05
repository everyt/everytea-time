import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const SUIT = localFont({ variable: '--font-suit', src: '../public/font/SUIT-Variable.woff2' });

import NavigationBar from '@/components/bar/NavigationBar';
import FooterBar from '@/components/bar/FooterBar';

export const metadata: Metadata = {
  title: "EVT's Portfolio",
  description: 'Made by everytea',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${SUIT.variable} font-suit bg-stone-50 text-stone-700`}>
        <div className='h-screen w-screen flex flex-row justify-between'>
          <NavigationBar />
          <div>
            {children}
            <FooterBar />
          </div>
        </div>
      </body>
    </html>
  );
}
