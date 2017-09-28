import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Home from './home/home';
import NavBarContainer from './navbar/navbar_container';
import UserIndexContainer from './users/user_index_container';
import UserShowContainer from './users/user_show_container';
import QuestionsContainer from './questions/questions_container';
import Footer from './footer/footer';
import QuestionFormContainer from './questions/question_form_container';
import ProfileContainer from './profile/profile_container';
import ConversationsContainer from './conversations/conversations_container';
import MessagesContainer from './conversations/messages_container';

const App = () =>(
  <div >
      <NavBarContainer/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <AuthRoute path='/login' component={SessionFormContainer}/>
      <AuthRoute path='/signup' component={SessionFormContainer}/>
      <Route exact path='/' component = {Footer}/>

      <Switch>
        <ProtectedRoute exact path='/' component={UserIndexContainer}/>
        <Route exact path='/' component ={Home}/>
      </Switch>
      <Switch>
        <ProtectedRoute path='/users/:userId' component={ProfileContainer}/>
        <ProtectedRoute path='/users' component={UserIndexContainer}/>
      </Switch>
      <Switch>
        <ProtectedRoute exact path='/conversations/:conversationsId' component={MessagesContainer}/>
        <ProtectedRoute exact path='/conversations' component={ConversationsContainer}/>
      </Switch>


  </div>
);

export default App;
