import LandingGraphic from '../media/graphic00013.png';

import { isNavigable } from '../utils/Utils.js';
import { ComponentKeys } from './Keys.js';

/*
*** Phase 1 ***
const seed = {
  component: {},
  props: {},
  styles: {},
};

const environment = {
  props: {},
  styles: {}
};

const spawn = (options) => {
  const Component = Registry[component];

  return <Component {...cultivate(options)} />;
};

const cultivate = flowRight([plant, mutate]);

const plant = ({seed, environment}) => merge(seed, environment);

const mutate = flowRight(mutations);

const mutations = [stylize];

const stylize = ({seed, environment}) => {
  if (environment.styles instanceof Function) {
    environment.styles(seed);
  }

  return {seed: seed, environment: environment};
}

*** Phase 2 ***
render() {
  environment.styles = styles.item; // possibly a function

  return (
    <div>
      { seed.nodes.map((datum, idx) => spawn({index: idx, ...seed}, environment)) }
    </div>
  )
}


***/
export const Realms = {
  ABOUT: {
    meta: {isNavigable: true, component: ComponentKeys.BUTTON, label: 'about', link: 'about'},
    nodes: [
      {
        component: ComponentKeys.IMAGE,
        config: {src: LandingGraphic}
      }
    ]
  },
  NOTES: {
    meta: {isNavigable: true, component: ComponentKeys.BUTTON, label: 'notes', link: 'notes'},
    nodes: []
  },
  ART: {
    meta: {isNavigable: true, component: ComponentKeys.BUTTON, label: 'art', link: 'art'},
    nodes: []
  },
  CODE: {
    meta: {isNavigable: true, component: ComponentKeys.BUTTON, label: 'code', link: 'code'},
    nodes: []
  },
  LANDING: {
    meta: {media: LandingGraphic},
    nodes: []
  },
};

export const Title = {
  meta: {label: 'homebase'},
  nodes: []
};

export const Navigation = {
  meta: {},
  nodes: Object.keys(Realms).filter(isNavigable).map((key) => {
    return {
      component: Realms[key].meta.component,
      config: Realms[key].meta
    }
  })
};

export const Store = {
  Realms: Realms,
  Navigation: Navigation,
  Title: Title
};

export default Store;
