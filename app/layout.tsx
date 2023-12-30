import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Thala for a reason',
  description: 'cryptoMafiaPB Thala for a reason!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
  rel="icon"
  href="https://img.utdstc.com/icon/543/840/543840ca9b5c960884c1db07131f3495469fcc8c161f979335a48738f1ff54da:200"
  type="image"
  
/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
