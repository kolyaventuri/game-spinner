import test from 'ava';
import React from 'react';
import proxyquire from 'proxyquire';
import {shallow} from 'enzyme';

const mockGame = 'this is the generated string';
const generateGame = () => mockGame;

const App = proxyquire('../../../client/app', {
  './lib/game-generator': {generateGame}
}).default;

const render = () => shallow(<App/>);

test('it renders a button to generate a game', t => {
  const wrapper = render();

  const button = wrapper.find('button');

  t.is(button.length, 1);
});

test('it does not render anything for the generated game on first render', t => {
  const wrapper = render();

  const game = wrapper.find('.game');

  t.is(game.length, 1);
  t.is(game.text(), '');
});

test('it renders a generated game upon clicking the button', t => {
  const wrapper = render();

  const button = wrapper.find('button');
  button.simulate('click');

  wrapper.update();
  const game = wrapper.find('.game');

  t.is(game.text(), mockGame);
});
