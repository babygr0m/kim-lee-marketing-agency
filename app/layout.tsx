import type { Metadata } from 'next'
import { Anton, Instrument_Serif, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const anton = Anton({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-anton',
});

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  style: 'italic',
  subsets: ["latin"],
  variable: '--font-instrument-serif',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'LMA / Lee Marketing Agency',
  description: 'We built the internet\'s fastest-growing brands. Now we\'ll build yours.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${instrumentSerif.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
