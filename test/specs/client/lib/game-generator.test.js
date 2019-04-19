import test from 'ava';
import proxyquire from 'proxyquire';

const verbs = ['crash'];
const nouns = ['car'];
const adjectives = ['blue'];

proxyquire.noCallThru();
const {generateGame} = proxyquire('../../../../client/lib/game-generator', {
  '../constants/verbs': verbs,
  '../constants/nouns': nouns,
  '../constants/adjectives': adjectives
});

test('it can generate a game string', t => {
  const result = generateGame();

  const expected = 'crash blue cars, to crash cars';

  t.is(result, expected);
});
