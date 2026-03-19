import type { Metadata, Viewport } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ subsets: ["latin"] });
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Benvily - Book Top Salons & Stylists',
  description: 'Discover your perfect style. Book top salons and stylists near you with Benvily.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/benvily.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/benvily.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/benvily.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/benvily.jpeg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.className} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
