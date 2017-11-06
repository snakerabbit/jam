import React from 'react';
import { Link } from 'react-router-dom';

export default () =>{
  return(
    <div className = 'footer'>
      <div className='test'>
        <a href='https://github.com/snakerabbit/jam' className = 'footer-links'>Github</a>
        <a href='https://www.linkedin.com/in/alison-cheng/' className = 'footer-links'>LinkedIn</a>
        <a href='http://www.alisoncheng.me/' className = 'footer-links'>Alison Cheng</a>
      </div>
    </div>
  );
};
