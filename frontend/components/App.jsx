import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';


const App = () =>(
  <div>
    <h1>jam app component</h1>
      <Route path='/login' component={SessionFormContainer}/>
      <Route path='/signup' component={SessionFormContainer}/>
  </div>
);

export default App;
