import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Analytics from '@/components/atoms/Analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Malisi',
  description:
    'Malisi, oferecemos a você os melhores serviços de segurança do trabalho e meio ambiente.',
  icons: {
    icon: '/assets/images/favicon/index.png',
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
