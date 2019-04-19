// @flow

import pluralize from 'pluralize';

import verbs from '../constants/verbs';
import nouns from '../constants/nouns';
import adjectives from '../constants/adjectives';

import {getString} from './strings';

const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

// Actual length is [0, length - 1], hence the -1
const numVerbs = verbs.length - 1;
const numNouns = nouns.length - 1;
const numAdj = adjectives.length - 1;

export const generateGame = (): string => {
  const verb1 = verbs[rand(0, numVerbs)];
  const verb2 = verbs[rand(0, numVerbs)];

  const noun1 = pluralize(nouns[rand(0, numNouns)]);
  const noun2 = pluralize(nouns[rand(0, numNouns)]);

  const adjective = adjectives[rand(0, numAdj)];

  const data = {verb1, verb2, noun1, noun2, adjective};

  return getString('gameIdeaTemplate', data);
};
