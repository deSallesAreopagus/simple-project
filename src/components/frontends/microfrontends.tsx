import React from 'react';

export const MicroFrontEndWrapper1: React.FC = () => {
  const Microfrontend1 = React.lazy(() => import('microfrontend1/App'));
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Microfrontend1 />
    </React.Suspense>
  )
}

export const MicroFrontEndWrapper2: React.FC = () => {
  const Microfrontend2 = React.lazy(() => import('microfrontend2/App'));
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Microfrontend2 />
    </React.Suspense>
  )
}