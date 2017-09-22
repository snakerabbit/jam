import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const IndexSearchBar = ({users}) =>{
  console.log(users);


  return(
    <div className='index-search-container'>
      <h3>Search Users By: </h3>
      <select defaultValue='Instrument'>
        <option>Instrument</option>
        <option>Vocalist</option>
        <option>Guitarist</option>
        <option>Bass Guitarist</option>
        <option>Drummer</option>
        <option>Keyboardist/Pianist</option>
        <option>All Musicians</option>
      </select>
    </div>
  );
};


export default IndexSearchBar;
