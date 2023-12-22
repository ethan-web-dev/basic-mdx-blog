"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { linkData } from '../../linkData'
import { useScreenWidth } from '../../../../helpers/mutOnScreenWidth'
import { disableScroll, enableScroll } from '../../../../helpers/lockScroll'

function Links({
  activeRoute, 
  className,
  linkClicked = () => {},
}: { 
  activeRoute: 'visible' | 'hidden';
  className?: React.ComponentProps<'div'>['className']; 
  linkClicked?: () => void  
}) {
  const pathname = usePathname();

  // If condition activeRoute equals 'hidden', then allLinks contains the linksData array filtered to exclude the link matching the current pathname. Otherwise, allLinks contains the original linksData array.
  const allLinkPermutations = activeRoute === 'hidden' ? linkData.filter(link => link.href !== pathname) : linkData;

  // onClick handler to allow link click functionality to be exposed to parent components
  const handleLinkClick = () => {
    linkClicked();
  }

  return (
    <>
      {allLinkPermutations.map((link) => (
        <Link  
          className={className}
          href={link.href} 
          key={link.key}
          onClick={handleLinkClick}
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}

/* --- The container that actual links go inside of below --- */
function Menu() {
  const windowWidth = useScreenWidth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollDisabled, setScrollDisabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const mobileMenuOpen = () => {
    setIsMobileMenuOpen(true)
    // Toggle scroll, disable scroll on menu open
    setScrollDisabled(!scrollDisabled);
  }

  const mobileMenuClosed = () => {
    setIsMobileMenuOpen(false)
    // Enable scrolling when menu is closed
    setScrollDisabled(false);
  }

  // disable or enable scroll based on conditions
  useEffect(() => {
    if (scrollDisabled) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [scrollDisabled]);

  // if menu is open, close menu when mobile menu links are clicked
  const handleMobileLinkClick = () => {
    if (isMobileMenuOpen) {
      mobileMenuClosed();
    }
  };

  const renderMenu = () => {
    if (windowWidth <= 640) {
      return ( /* --- Mobile Menu --- */
        <>
          {isMobileMenuOpen && ( // Content is only seen if the mobile menu toggle is clicked
            <nav className="z-30 fixed inset-0 bg-primary dark:bg-secondary">
              <div className="flex items-center justify-center w-full h-screen">
                <div className="flex flex-col w-fit">
                  <Links 
                    activeRoute='visible' 
                    className="w-fit text-lg font-extralight"
                    linkClicked={handleMobileLinkClick}
                  />
                </div>
              </div>
            </nav>
          )}
          <button 
            className="z-50"
            onClick={isMobileMenuOpen ? mobileMenuClosed : mobileMenuOpen }
          >
            {isMobileMenuOpen ? 'Menu' : 'Menu' }
          </button>  
        </>
      );
    } else {
      return ( /* --- Desktop Menu --- */
        <nav className="flex gap-8 mr-7">
          <Links 
            activeRoute='hidden'  
          />
        </nav>
      );
    }
  };

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div>Loading...</div>
  }

  // render the corresponding result from the conditional we just defined.
  return renderMenu(); 
}

export default Menu

/* 
- Holds links (data stored in array c/o kvp) - done 

- menu is in row until mobile breakpoint - done

- link disappears on selected link => active pathname (optionally) via a prop activeRoute={hidden/visible} - done

- Mobile menu collapses on option select - done

- Styling, Type, Colors
*/