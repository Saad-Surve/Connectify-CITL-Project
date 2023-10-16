import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import Bottombar from '@/components/shared/Bottombar'
import { Providers } from '@/components/providers'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Connectify',
  description: 'A Place to Connect Like Minded People',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Topbar />
            <main className="flex flex-row">
              <LeftSidebar />
              <section className='main-container'>
                <div className='w-full max-w-4xl'>
                  {children}
                </div>
              </section>
              <RightSidebar />
            </main>
            <Bottombar />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
