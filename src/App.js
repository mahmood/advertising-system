import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import NotFound from './components/common/NotFound';
import Home from './components/Home'
import AddAdvertising from './components/AddAdvertising';
import Browse from './components/Browse';
import About from './components/About';

import 'semantic-ui-css/semantic.min.css';
import './styles/App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/new" component={AddAdvertising} />
    <Route path="/about" component={About} />
    <Route exact path="/browse/:slug" component={Browse} />
    <Route component={NotFound} />
  </Switch>
);

export default App;