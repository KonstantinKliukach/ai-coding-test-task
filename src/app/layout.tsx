'use client';
import { Inter } from 'next/font/google';

import { Provider } from 'react-redux';
import store from '../store';

import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import AppTopBar from '@/components/AppTopBar';
import { Container } from '../../node_modules/@mui/material/index';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <ThemeRegistry>
            <AppTopBar />
            <Container maxWidth="lg">{children}</Container>
          </ThemeRegistry>
        </Provider>
      </body>
    </html>
  );
}
