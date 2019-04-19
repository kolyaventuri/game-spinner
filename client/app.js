// @flow

import React from 'react';

import {getString} from './lib/strings';
import {generateGame} from './lib/game-generator';

type State = {|
  game: string
|};

export default class App extends React.Component<{}, State> {
  constructor(...args: any) {
    super(...args);
    this.state = {game: ''};
  }

  genGame = () => {
    const game = generateGame();

    this.setState({game});
  }

  render() {
    const {game} = this.state;

    return (
      <div>
        <button
          type="button"
          onClick={this.genGame}
        >
          {getString('generate')}
        </button>
        <h1 className="game-intro">{getString('gamePrefix')}</h1>
        <p className="game">{game}</p>
      </div>
    );
  }
}
