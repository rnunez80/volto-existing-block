import iconSVG from '@plone/volto/icons/content-existing.svg';
import View from './View';
import Edit from './Edit';


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

