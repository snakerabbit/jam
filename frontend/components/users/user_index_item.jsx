import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const UserIndexItem = ({user}) =>{
  return(
    <div className='user-display'>
      <container className = 'user-img-container'>
        <img src={user.image_url} className='user-imgs'/>
      </container>
      <p>Username: {user.username}</p>
      <p>Instrument: {user.instrument}</p>
      <p>City: {user.city}</p>
    </div>
  );
};

export default UserIndexItem;
