import React from 'react';
import UserIndexItem from './user_index_item';
import IndexSearchBar from './index_search_bar';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instrument:""
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.instrumentOptions = this.instrumentOptions.bind(this);
    this.mapUsers = this.mapUsers.bind(this);
  }

  componentDidMount(){
      this.props.fetchUsers(this.state.instrument);
  }

  handleFilter (e) {
    e.preventDefault();
    this.props.fetchUsers(e.target.value);
    this.setState({ instrument: e.target.value });
  }


  instrumentOptions () {
    return(
      <select defaultValue='Instrument' onChange={this.handleFilter}>
        <option selected>Instrument</option>
        <option value='guitar'>Guitarist</option>
        <option value='bass guitar'>Bass Guitarist</option>
        <option value='drums'>Drummer</option>
        <option value='piano'>Keyboardist</option>
        <option value='voice'>Vocalist</option>
      </select>
    );
  }

  mapUsers () {
    const mappedUsers = this.props.users.map(user => (
      <div key={user.id} className='user-index-item'>
        <UserIndexItem
          user={user}/>
        <br/>
        <br/>
      </div>
    ));
    if (mappedUsers.length === 0 ){
      return (
        <div>
          <p>NO USERS FOUND</p>
        </div>
      );
    } else {
      return(
        mappedUsers
      );
    }
  }

  
  render () {
    return(
      <div className='browse-users'>
          <div className='index-search-bar'>
            <div className='index-search-container'>
              <h3>Search Users By: </h3>
              {this.instrumentOptions()}
            </div>
          </div>
          <div className = 'user-index'>
          <ul>
            {this.mapUsers()};
          </ul>
        </div>
      </div>
    );
  }
}

export default UserIndex;
