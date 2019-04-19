// @flow

import React from 'react';
import {render} from 'react-dom';

import App from './app';

// $FlowFixMe
render(<App/>, document.querySelector('#app'));

// $FlowFixMe
if (module.hot) {
  module.hot.accept();
}
