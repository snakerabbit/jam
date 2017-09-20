import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import AuthRoute from '../util/route_util';
import Home from './home/home';

const App = () =>(
  <div >
      <Route exact path='/' component ={Home}/>
      <AuthRoute path='/login' component={SessionFormContainer}/>
      <AuthRoute path='/signup' component={SessionFormContainer}/>
      <br/>
      <br/>
      <Link to='/login'>Login(temp link)</Link>
      <br/>
      <br/>
      <Link to='/signup'>Signup(temp link)</Link>


  </div>
);

export default App;
