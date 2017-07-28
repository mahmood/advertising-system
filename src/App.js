import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Async from 'react-code-splitting';
import NotFound from './components/common/NotFound';
import Home from './components/home/Home'
import AddAdvertising from './components/AddAdvertising';
import Browse from './components/‌‌Browse/Browse';
import About from './components/About';
import Admin from './components/admin';
import Ads from './components/admin/Ads'
import AddAds from './components/admin/Ads/AddAds';
import Authentication from './components/Authentication';

import 'semantic-ui-css/semantic.min.css';
import './styles/App.css';


// Async load
// const Home = () => <Async load={import('./components/home/Home')} />;
// const Admin = () => <Async load={import('./components/admin')} />;
// const Ads = () => <Async load={import('./components/admin/Ads')} />;
// const AddAds = () => <Async load={import('./components/admin/Ads/AddAds')} />;
// const About = () => <Async load={import('./components/About')} />;
// const Browse = () => <Async load={import('./components/Browse/Browse')} />;
// const AddAdvertising = () => <Async load={import('./components/AddAdvertising')} />;
// const NotFound = () => <Async load={import('./components/common/NotFound')}/>;

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/new" component={AddAdvertising} />
    <Route path="/about" component={About} />
    <Route exact path="/browse/:slug/:id" component={Browse} />
    <Route exact path="/admin" component={Authentication(Admin, 'admin')} />
    <Route exact path="/admin/ads" component={Authentication(Ads, 'admin')} />
    <Route exact path="/admin/ads/add" component={Authentication(AddAds, 'admin')} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
