import React from 'react';
import Home from '../home/home';
import { Link } from 'react-router-dom';

export default ({currentUser, logout}) =>{
  const navdisplay = currentUser ?
  (
    <div className='navbar-logged-in'>
      <h3>{currentUser.username}</h3>
      <a onClick={logout}>Logout</a>
      <Link to='/users'>Browse</Link>
    </div>
  ) : (
    <div className = 'navbar-logged-out'>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </div>
  );


  return(
    <header className="nav-bar">
      <Link to='/' className='navbar-logo'>jam</Link>
      <div>{navdisplay}</div>
    </header>
  );
};
