'use client';

import dynamic from 'next/dynamic';

// Dynamic import with SSR disabled inside client component
const PortfolioFilter1Col = dynamic(() => import('./PortfolioFilter1Col'), {
  ssr: false,
});

export default function PortfolioFilter1ColClient() {
  return <PortfolioFilter1Col />;
}
