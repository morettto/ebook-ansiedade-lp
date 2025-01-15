import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adeus, Ansiedade',
  description: 'O ebook anti-ansiedade que ajudou milhares de americanos, agora em português!'
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
