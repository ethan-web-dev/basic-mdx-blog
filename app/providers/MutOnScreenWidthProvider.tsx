"use client"

import { ReactNode, useEffect, useState } from 'react';
import { ScreenWidth } from '../helpers/mutOnScreenWidth';

type ScreenWidthProviderProps = {
  children: ReactNode;
};

export const ScreenWidthProvider: React.FC<ScreenWidthProviderProps> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  const handleResize = () => {
    const newWindowWidth = window.innerWidth;
    setWindowWidth(newWindowWidth);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <ScreenWidth.Provider value={{ windowWidth }}>
      {children}
    </ScreenWidth.Provider>
  );
};
