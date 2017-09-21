import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import AuthRoute from '../util/route_util';
import Home from './home/home';
import NavBarContainer from './navbar/navbar_container';

const App = () =>(
  <div >
      <NavBarContainer/>
      <Route exact path='/' component ={Home}/>
      <br/>
      <br/>
      <AuthRoute path='/login' component={SessionFormContainer}/>
      <AuthRoute path='/signup' component={SessionFormContainer}/>


  </div>
);

export default App;
