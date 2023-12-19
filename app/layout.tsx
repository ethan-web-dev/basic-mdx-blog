import './globals.css'
import type { Metadata } from 'next'
import { ScreenWidthProvider } from './providers/MutOnScreenWidthProvider'
import { NextThemeProvider } from './providers/NextThemeProvider'
import Header from './components/layout/header/Header'
import Footer from './components/layout/footer/Footer'

export const metadata: Metadata = {
  title: "Eb Blog",
  description: 'A MDX based blog built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ScreenWidthProvider>
          <NextThemeProvider>
            <Header />
              <main className="min-h-screen">
                {children}
              </main>
            <Footer />
          </NextThemeProvider>
        </ScreenWidthProvider>
      </body>
    </html>
  )
}
