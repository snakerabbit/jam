import React from 'react';
import { Link } from 'react-router-dom';

export default () =>{
  return(
    <div className = 'splash-container'>
      <div className='splash'>
        <p className='splash-text'>find new bandmates in your city...</p>
        <Link to='/signup'>
          <p className='get-started'>get started</p>
        </Link>
      </div>
    </div>
  );
};
