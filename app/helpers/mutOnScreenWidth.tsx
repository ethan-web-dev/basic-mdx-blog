import { createContext, useContext } from 'react'

type ScreenWidthMutation = {
  windowWidth: number;
}

export const ScreenWidth = createContext<ScreenWidthMutation | undefined>(undefined);

export const useScreenWidth = (): number => {
  const context = useContext(ScreenWidth);
  if (!context) {
    throw new Error('useScreenWidth must be used within a ScreenWidthProvider');
  }
  return context.windowWidth;
}

/* 
This file contains a hook & context to mutate data at a certain breakpoint specified at the time of use.
Note there is an additional provider that wraps the applications root layout. See ScreenWidthProvider.tsx
*/