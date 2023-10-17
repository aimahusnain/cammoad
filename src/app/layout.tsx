import { cn } from '@/lib/utils';
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/Components/Navbar';
import { Inter } from 'next/font/google';
import Providers from '@/Components/Providers';

import "react-loading-skeleton/dist/skeleton.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quill',
  description: 'Talk to any PDF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <Providers>
      <body className={cn('min-h-screen font-sans antialiased grainy', inter.className)}>
        <Navbar />
        {children}
      </body>
    </Providers>
    </html>
  )
}
