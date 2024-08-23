import loadable from '@loadable/component';
import iconSVG from '@plone/volto/icons/content-existing.svg';

// Use loadable to dynamically import the components
const View = loadable(() => import('./View'), {
  fallback: <div>Loading...</div>,
});
const Edit = loadable(() => import('./Edit'), {
  fallback: <div>Loading...</div>,
});

const applyConfig = (config) => {
  config.blocks.blocksConfig.Existing = {
    id: 'Existing',
    title: 'Existing',
    icon: iconSVG,
    group: 'common',
    view: View,
    edit: Edit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };

  return config;
};

export default applyConfig;
