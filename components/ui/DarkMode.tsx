"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
        <button onClick={()=>{setTheme('light')}}>
            Light Mode
        </button>
        <button onClick={()=>{setTheme('dark')}}>
            Dark Mode
        </button>
    
    </>
  )
}

export default DarkModeButton