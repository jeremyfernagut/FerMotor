import React from 'react';
import data from '../../data/data_home';
import './style-mobile.scss';
import './style-desktop.scss';

const Home = ( props ) => {

const { title, img, description } = props;
return(
  <div className="main">
    <h1 className="main_title"> Bienvenue </h1>
    <div className="main_corp">
      <div className="corp_title"> {title} </div>
      <div className="corp_img"> {img} </div>
      <div className="corp_description"> {description} </div>

    </div>
  </div>
)};

export default Home;