import React from 'react';
import { render } from 'react-dom';
import { AppProvider } from './Provider';
import Main from './Main';

/**
 * Render our React app
 */
render(
  <AppProvider>
    <div className="container">
      <Main />
    </div>
  </AppProvider>,
  document.getElementById("root")
);
