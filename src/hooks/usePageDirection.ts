import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const routeOrder = ['/', '/skills', '/projects', '/education', '/contact'];

export function usePageDirection(): 'forward' | 'backward' {
  const location = useLocation();
  const previousPath = useRef<string>('/');
  const direction = useRef<'forward' | 'backward'>('forward');

  useEffect(() => {
    const currentPath = location.pathname;
    const previousIndex = routeOrder.findIndex(route =>
      previousPath.current.startsWith(route)
    );
    const currentIndex = routeOrder.findIndex(route =>
      currentPath.startsWith(route)
    );

    if (previousIndex !== -1 && currentIndex !== -1) {
      direction.current = currentIndex > previousIndex ? 'forward' : 'backward';
    }

    previousPath.current = currentPath;
  }, [location]);

  return direction.current;
}
