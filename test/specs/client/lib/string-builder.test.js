import test from 'ava';

import {stringBuilder} from '../../../../client/lib/string-builder';

test('it can fill in a string', t => {
  const format = 'Hello, {name}';
  const data = {name: 'Bob'};

  const result = stringBuilder(format, data);

  t.is(result, 'Hello, Bob');
});

test('if no data is provided, it does not format', t => {
  const format = 'Hello, {name}';

  const result = stringBuilder(format);

  t.is(result, format);
});

test('if extraneous data is provided, it is ignored', t => {
  const format = 'Hello, {name}';
  const data = {name: 'Bob', age: 25};

  const result = stringBuilder(format, data);

  t.is(result, 'Hello, Bob');
});

test('if more than one location share the same key, they are both replaced', t => {
  const format = 'Hello, {name} {name}';
  const data = {name: 'Bob'};

  const result = stringBuilder(format, data);

  t.is(result, 'Hello, Bob Bob');
});
