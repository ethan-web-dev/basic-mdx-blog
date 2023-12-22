import './globals.css'
import type { Metadata } from 'next'
import { ScreenWidthProvider } from './(interstitials)/providers/MutOnScreenWidthProvider'
import { NextThemeProvider } from './(interstitials)/providers/NextThemeProvider'
import Header from './(interstitials)/components/layout/header/Header'
import Footer from './(interstitials)/components/layout/footer/Footer'

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
      <body className="bg-primary text-secondary dark:bg-secondary dark:text-primary">
        <ScreenWidthProvider>
          <NextThemeProvider>
            <Header />
              <main className="min-h-screen pt-2 sm:pt-24 mx-2 md:mx-[10%]">
                {children}
              </main>
            <Footer />
          </NextThemeProvider>
        </ScreenWidthProvider>
      </body>
    </html>
  )
}
