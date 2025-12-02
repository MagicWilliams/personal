'use client';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ClientWrapper({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence
      initial={false}
      mode="wait"
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  );
}
