import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Home from './home/home';
import NavBarContainer from './navbar/navbar_container';
import UserIndexContainer from './users/user_index_container';

const App = () =>(
  <div >
    <div>
      <NavBarContainer/>
    </div>
      <br/>
      <br/>
      <AuthRoute path='/login' component={SessionFormContainer}/>
      <AuthRoute path='/signup' component={SessionFormContainer}/>
      <ProtectedRoute path='/users' component={UserIndexContainer}/>
      <Route exact path='/' component ={Home}/>
      <ProtectedRoute path='/' component={UserIndexContainer}/>

  </div>
);

export default App;
