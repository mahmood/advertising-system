import { StaticRouter, matchPath } from 'react-router-dom';

import App from './App';
import React from 'react';
import express from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';
import qs from 'qs';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import configStore from './store/configStore';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    // Read the counter from the request, if provided
    const params = qs.parse(req.query);
    const counter = parseInt(params.counter, 10) || 0;
    // Compile an initial state
    const preloadedState = { counter };
    // Create a new Redux store instance
    const store = configStore(preloadedState);

    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    );

    // Grab the initial state from our Redux store
    const finalState = store.getState();

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
          <html lang="">
          <head>
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta charSet='utf-8' />
              <title>Welcome to Razzle</title>
              <meta name="viewport" content="width=device-width, initial-scale=1">
              ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ''}
              <script src="${assets.client.js}" defer></script>
          </head>
          <body>
              <div id="root">${markup}</div>
          </body>
          <script>
            window.__PRELOADED_STATE__ = ${serialize(finalState)}
          </script>
      </html>`
      );
    }
  });

export default server;
