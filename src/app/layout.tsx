import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/molecules/Header';
import Footer from '@/components/molecules/Footer';
import Main from '@/components/atoms/Main';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Malisi',
  description:
    'Malisi, oferecemos a você os melhores serviços de segurança do trabalho e meio ambiente',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className={(inter.className, 'bg-white')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
