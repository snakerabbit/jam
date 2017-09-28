import React from 'react';
import Home from '../home/home';
import { Link } from 'react-router-dom';


export default ({currentUser, logout}) =>{
  const navdisplay = currentUser ?
  (
    <div className='navbar-logged-in'>
      <a onClick={logout}>
        <p>Log Out</p>
      </a>
      <Link to='/users'>
        <p>Browse</p>
      </Link>
      <Link to={`/users/${currentUser.id}`}>
        <p>{currentUser.username}</p>
      </Link>
      <Link to='/conversations'>
        <img className='message-icon'
          src='http://wfarm1.dataknet.com/static/resources/icons/set92/9ae48e59.png'/>
      </Link>
    </div>
  ) : (
    <div className = 'navbar-logged-out'>
      <Link to='/login'>
        <p>
          Log In
        </p>
      </Link>
      <Link to='/signup'>
        <p>
          Sign Up
        </p>
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
