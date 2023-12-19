"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import LogoImage from '../../../../../public/eb-logo-chromium-no-bg.svg'
import LogoImageDark from '../../../../../public/eb-logo-chromium-no-bg-dark.svg'

export default function Logo() {
  const { resolvedTheme } = useTheme();
  const [themeLoaded, setThemeLoaded] = useState(false);
  let src;

  useEffect(() => {
    if (resolvedTheme === 'light' || resolvedTheme === 'dark') {
      setThemeLoaded(true);
    }
  }, [resolvedTheme]);

  if (!themeLoaded) {
    // Render a placeholder, loading state, or return null if you want to wait for the theme
    return <div>Loading...</div>;
  }

  if (resolvedTheme === 'light') {
    src = LogoImage;
  } else if (resolvedTheme === 'dark') {
    src = LogoImageDark;
  } else {
    // Handle unexpected cases if necessary
    // For instance, setting a default image or throwing an error
    throw new Error('resolvedTheme must be either "light" or "dark"');
  }

  return (
    <>
      <Link className="flex items-center gap-3" href={'/'}>
        <Image 
          alt='Beeler Logo' 
          className="w-16 h-auto" 
          priority={true} 
          src={src} 
        />
        <h3>
          Ethan <b>Beeler</b>
        </h3>
      </Link>
    </>
  )
}

/* 
The Logo Component

- Title
- Image/logo
- Home on click

*/