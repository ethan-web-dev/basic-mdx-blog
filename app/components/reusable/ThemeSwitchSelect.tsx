"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const themeSwitchSelectOptions = [
  { className: '', id: 'sys', label: 'System', optionVal: 'system' },
  { className: '', id: 'lit', label: 'Light', optionVal: 'light' },
  { className: '', id: 'drk', label: 'Dark', optionVal: 'dark' }
]

const ThemeSwitchSelect = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <select 
      className="h-5 w-16 text-xs rounded-sm border"
      onChange={e => setTheme(e.target.value)}
      value={theme} 
    >  
      {themeSwitchSelectOptions.map((option) => (
        <option 
          className={option.className}
          key={option.id} 
          value={option.optionVal}
        >
          {option.label}
        </option>
      ))}
    </select>  
  )
}

export default ThemeSwitchSelect