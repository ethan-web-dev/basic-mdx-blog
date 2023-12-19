"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useScreenWidth } from '../../../../helpers/mutOnScreenWidth'
import { disableScroll, enableScroll } from '../../../../helpers/lockScroll'

interface LinkData {
  href: string;
  key: string;
  label: string;
}

const linksData: LinkData[] = [
  { 
    href: '/', 
    key: 'home', 
    label: 'Home' 
  },
  { 
    href: '/about', 
    key: 'about', 
    label: 'About'
  },
  {
    href: '/articles',
    key: 'articles',
    label: 'Articles'
  }
];

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
  const allLinkPermutations = activeRoute === 'hidden' ? linksData.filter(link => link.href !== pathname) : linksData;

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
        <div>
          {isMobileMenuOpen && ( // Content is only seen if the mobile menu toggle is clicked
            <nav className="fixed z-10 inset-0 h-full w-full flex justify-center place-items-center">
              <div className="flex flex-col">
                <Links 
                  activeRoute='visible' 
                  className=""
                  linkClicked={handleMobileLinkClick}
                />
              </div>
            </nav>
          )}
          <button 
            className={isMobileMenuOpen ? "z-50 absolute right-0 bottom-0" : "z-50" } 
            onClick={isMobileMenuOpen ? mobileMenuClosed : mobileMenuOpen }
          >
            {isMobileMenuOpen ? 'Click to Close' : 'Click to Open' }
          </button>  
        </div>
      );
    } else {
      return ( /* --- Desktop Menu --- */
        <nav className="">
          <Links 
            activeRoute='hidden' 
            className="" 
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

export { Menu };

/* 
- Holds links (data stored in array c/o kvp) - done 

- menu is in row until mobile breakpoint - done

- link disappears on selected link => active pathname (optionally) via a prop activeRoute={hidden/visible} - done

- Mobile menu collapses on option select - done

- Styling, Type, Colors
*/