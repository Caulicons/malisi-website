import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Malisi',
  description: 'Malisi, oferecemos a você os melhores serviços de segurança do trabalho e meio ambiente',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
