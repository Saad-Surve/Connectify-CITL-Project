import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import { neobrutalism } from '@clerk/themes'
import '../globals.css'

export const metadata = {
    title: 'Connectify',
    description: 'A Place to Connect Like Minded People',
}

const inter = Inter({subsets :["latin"]})

export default function RootLayout({children}:{children:React.ReactNode}){
    return (
            <ClerkProvider appearance={{
                baseTheme: neobrutalism
            }}>
                <html lang='en'>
                    <body className={`${inter.className} bg-dark-1`}>
                        {children}
                    </body>
                </html>
            </ClerkProvider>
    )
}