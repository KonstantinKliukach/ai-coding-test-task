import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import AppTopBar from '@/components/AppTopBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI for coding test task',
  description: 'Gently assembled by Konstantin Kliukach',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <AppTopBar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
