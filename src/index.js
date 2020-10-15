import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'

import App from './app';
import {GlobalStyles} from './global-styles'

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <GlobalStyles />
      <App />
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);
