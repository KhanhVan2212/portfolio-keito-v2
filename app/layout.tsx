import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nguyen Khanh Van - Portfolio',
  description: 'Created with Nguyen Khanh Van',
  generator: 'Nguyen Khanh Van',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
