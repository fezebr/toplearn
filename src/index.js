import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import GlobalState from './containers/GlobalState';

ReactDOM.render(
  <React.StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </React.StrictMode>,
  document.getElementById('root')
);
