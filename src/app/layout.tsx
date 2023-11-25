import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import AppTopBar from '@/components/AppTopBar';
import { Container } from '../../node_modules/@mui/material/index';

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
          <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 64px)', height: 'calc(100vh - 64px)', paddingY: 4 }}>
            {children}
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
