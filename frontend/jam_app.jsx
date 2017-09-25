import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as SessionApiUtil from './util/session_api_util';//testing only
import * as UserApiUtil from './util/user_api_util';
import { fetchUsers } from './actions/user_actions';
import * as QuestionsAPIUtil from './util/question_api_util';
import { fetchQuestions } from './actions/question_actions';

document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById('root');
  let store;
  if(window.currentUser){
    const preloadedState = {session:{currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.getState = store.getState(); //testing only
  window.logout = SessionApiUtil.logout;//testing only
  window.fetchUsers = UserApiUtil.fetchUsers;//testing only
  window.fetchQuestions = QuestionsAPIUtil.fetchQuestions;//testing only
  ReactDOM.render(<Root store={store}/>, root);
});
