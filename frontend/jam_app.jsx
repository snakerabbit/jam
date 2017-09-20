import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as SessionApiUtil from './util/session_api_util';//testing only


document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById('root');
  let store;
  if(window.currentUser){
    const preloadedState = {session:{currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.logout = SessionApiUtil.logout;//testing only
  ReactDOM.render(<Root store={store}/>, root);
});
