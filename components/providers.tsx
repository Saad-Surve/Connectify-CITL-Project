'use client'

import { ThemeProvider } from 'next-themes'
import { useState,useEffect } from 'react'
import {NextUIProvider} from '@nextui-org/react'


export function Providers({ children } : {children: React.ReactNode}) {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
      setMounted(true)
      
    }, [])
    if (!mounted) {
        return <>{children}</>
    }
    
    return (
      <NextUIProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </NextUIProvider>
    )
}