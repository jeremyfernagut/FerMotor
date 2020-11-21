// ========= Import npm ===========

import React from 'react';
import { Route, Switch } from 'react-router-dom';

// ========= Import ==============

import Header from '../Header';
import Contact from '../Contact';
import NotFound from '../NotFound';
import Home from '../Home';
import About from '../About';
import Intervention from '../Intervention';
import Footer from '../Footer';
import Legal from '../Legal';

import data from '../../data/data';
import supplier from '../../data/service';


import './style.scss';

// ========= Composant ===========

const App = () => (
  <div className="app">
    <Header />
    <div className="test">
      <Switch>

        {/* Route vers l'accueil */}
        <Route exact path="/">
          <Home list={data} />
          <Footer />
        </Route>

        {/* Route vers la page contact */}
        <Route exact path="/contact">
          <Contact />
          <Footer />
        </Route>

        {/* Route vers la page about */}
        <Route exact path="/about">
          <About />
          <Footer />
        </Route>

        {/* Route vers intervention */}
        <Route exact path="/intervention">
          <Intervention list={supplier} />
          <Footer />
        </Route>
        {/* Route vers mentions légales */}
        <Route exact path="/mentions-legales">
          <Legal />
          <Footer />
        </Route>

        {/* Route vers la page 404 */}
        <Route>
          <NotFound />
          <Footer />
        </Route>

      </Switch>
    </div>
  </div>
);

// ========= Export ==============
export default App;
