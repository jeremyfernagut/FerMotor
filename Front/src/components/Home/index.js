import React from 'react';
import './style-mobile.scss';
import './style-desktop.scss';

const Home = () => (
  <div className="main">
    <h1 className="main_title"> Bienvenu </h1>
    <div className="main_corp">
      <div className=""> La menuiserie </div>
      <div className=""> L'équipe</div>
      <div className=""> Nos méthodes</div>
      <div className=""> Études et devis </div>
    </div>
  </div>
);

export default Home;