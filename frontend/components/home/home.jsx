import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container.js';
import Footer from '../footer/footer';
export default () => (
  <div>
    <NavBarContainer/>
    <Footer/>
  </div>
);
