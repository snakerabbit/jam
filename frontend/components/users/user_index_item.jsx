import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const UserIndexItem = ({user, match}) =>{
  return(
    <Link to={`/users/${user.id}`}>
      <div className='user-display'>
        <container className = 'user-img-container'>
          <img src={user.image_url} className='user-imgs'/>
        </container>
        <p className='user-index-username'>{user.username}</p>
        <p>Instrument: {user.instrument}</p>
        <p>City: {user.city}</p>
        <p className='match'>Match Percentage: {match}%</p>
      </div>
  </Link>
  );
};

export default UserIndexItem;
