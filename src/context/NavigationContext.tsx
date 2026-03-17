'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface NavigationContextType {
  navigate: (path: string, options?: { state?: any }) => void;
  locationState: any;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [locationState, setLocationState] = useState<any>(null);

  // Initialize from sessionStorage to handle refreshes
  useEffect(() => {
    const saved = sessionStorage.getItem('next_nav_state');
    if (saved) {
      try {
        setLocationState(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse nav state', e);
      }
    }
  }, []);

  // Clear state when navigating to a new page
  useEffect(() => {
    // Keep state available for the current page, but clear storage so it doesn't leak to unrelated pages
    // We clear on mount of the NEW page (handled by the next navigate call or manual clear)
    return () => {
      // Cleanup if needed
    };
  }, [pathname]);

  const navigate = useCallback((path: string, options: { state?: any } = {}) => {
    if (options.state) {
      const stateStr = JSON.stringify(options.state);
      sessionStorage.setItem('next_nav_state', stateStr);
      setLocationState(options.state);
    } else {
      sessionStorage.removeItem('next_nav_state');
      setLocationState(null);
    }
    
    router.push(path);
  }, [router]);

  return (
    <NavigationContext.Provider value={{ navigate, locationState }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigateState() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigateState must be used within a NavigationProvider');
  }
  return context;
}
