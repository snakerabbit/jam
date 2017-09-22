import React from 'react';
import Home from '../home/home';
import { Link } from 'react-router-dom';


export default ({currentUser, logout}) =>{
  const navdisplay = currentUser ?
  (
    <div className='navbar-logged-in'>
      <a onClick={logout}>
        <h2>Log Out</h2>
      </a>
      <Link to='/users'>
        <h2>Browse</h2>
      </Link>
      <Link to={`/users/${currentUser.id}`}>
        <h2>{currentUser.username}</h2>
      </Link>
    </div>
  ) : (
    <div className = 'navbar-logged-out'>
      <Link to='/login'>
        <h2>
          Log In
        </h2>
      </Link>
      <Link to='/signup'>
        <h2>
          Sign Up
        </h2>
      </Link>
    </div>
  );


  return(
    <header className="nav-bar">
      <Link to='/' className='navbar-logo'>
      <img src='https://image.ibb.co/mjPHyk/Logomakr_6_Bg8_Wn.png'
           className='logo'/>
      </Link>
      <div>{navdisplay}</div>
    </header>
  );
};
