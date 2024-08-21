import React, { lazy, Suspense } from 'react';
import iconSVG from '@plone/volto/icons/content-existing.svg';

// Use React.lazy to load View and Edit components lazily
const LazyView = lazy(() => import('./View'));
const LazyEdit = lazy(() => import('./Edit'));

const applyConfig = (config) => {
  config.blocks.blocksConfig.Existing = {
    id: 'Existing',
    title: 'Existing',
    icon: iconSVG,
    group: 'common',
    view: (props) => (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyView {...props} />
      </Suspense>
    ),
    edit: (props) => (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyEdit {...props} />
      </Suspense>
    ),
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };
  return config;
};

export default applyConfig;
