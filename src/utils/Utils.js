/**
 * HOMEBASE UTility FUNCTIONS
 */
import React from 'react';
import { merge, flowRight } from 'lodash';

import * as Registry from '../configuration/Registry.js';
import { Realms } from '../configuration/Store.js';

const stylize = ({seed, environment}) => {
  if (environment.styles instanceof Function) {
    environment.styles = environment.styles(seed);
  }

  return {seed: seed, environment: environment};
};

const mutations = [stylize];
const mutate = flowRight(mutations);
const combine = ({seed, environment}) => merge(seed.config, environment);
const cultivate = flowRight([combine, mutate]);

/**
 * Transform a datum into a component.
 */
export const spawn = (seed, environment, registry) => {
  const Component = Registry[seed.component];
  return <Component {...cultivate({seed: seed, environment: environment})} />;
};

/**
 * Whether seed refers to a navigable component.
 */
export const isNavigable = (key) => Realms[key].meta.isNavigable;
