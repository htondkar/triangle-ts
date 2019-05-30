import '@tradeshift/tradeshift-ui/ts.css';
import '@tradeshift/tradeshift-ui/ts.js';

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { TradehshiftUi } from './types/tradeshift-ui';

declare var ts: TradehshiftUi

function renderApp() {
  ReactDOM.render(<App />, document.getElementById('root'))
}

ts.ui.ready(renderApp)
