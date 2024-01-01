import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Analytics from '@/components/atoms/Analytics';
import { Viewport } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#147f3c',
};

export const metadata: Metadata = {
  title: 'Malisi Engenharia',
  description:
    'Malisi de Segurança do Trabalho e Meio Ambiente. Oferecemos a você os melhores serviços de segurança do trabalho e meio ambiente.',
  manifest: '/manifest.json',
  icons: {
    icon: '/assets/images/favicon/128x128.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <Analytics />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
