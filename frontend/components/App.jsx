import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import AuthRoute from '../util/route_util';

const App = () =>(
  <div>
    <h1>JAM</h1>
      <AuthRoute path='/login' component={SessionFormContainer}/>
      <AuthRoute path='/signup' component={SessionFormContainer}/>
      <Link to='/login'>Login(temp link)</Link>
      <br/>
      <Link to='/signup'>Signup(temp link)</Link>

  </div>
);

export default App;
