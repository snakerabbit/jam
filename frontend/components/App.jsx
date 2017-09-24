import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Home from './home/home';
import NavBarContainer from './navbar/navbar_container';
import UserIndexContainer from './users/user_index_container';
import UserShowContainer from './users/user_show_container';
import Footer from './footer/footer';

const App = () =>(
  <div >
    <div>
      <NavBarContainer/>
    </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <AuthRoute path='/login' component={SessionFormContainer}/>
      <AuthRoute path='/signup' component={SessionFormContainer}/>
      <Route exact path='/' component ={Home}/>
      <Route exact path='/' component = {Footer}/>
      <Switch>
        <ProtectedRoute path='/users/:userId' component={UserShowContainer}/>
        <ProtectedRoute path='/users' component={UserIndexContainer}/>
      </Switch>


  </div>
);

export default App;
