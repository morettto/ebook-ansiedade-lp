import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adeus, Ansiedade',
  description: 'O ebook anti-ansiedade que ajudou milhares de americanos, agora em português!',
  icons: {
    icon: '/resources/favicon/icons8-open-book-50.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
