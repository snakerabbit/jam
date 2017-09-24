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
  }

  componentDidMount(){
  this.props.fetchUsers(this.state.instrument);
  console.log(this.props.users);
  }

  handleFilter (e) {
    e.preventDefault();
    this.props.fetchUsers(e.target.value);
    this.setState({ instrument: e.target.value });
  }


  instrumentOptions () {
    return(
      <select defaultValue='Instrument' onChange={this.handleFilter}>
        <option value=''>Instrument</option>
        <option value='voice'>Vocalist</option>
        <option value='guitar'>Guitarist</option>
        <option value='bass guitar'>Bass Guitarist</option>
        <option value='drums'>Drummer</option>
        <option value='piano'>Keyboardist</option>
      </select>
    );
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
            {
              this.props.users.map(user => (
                <div key={user.id} className='user-index-item'>
                  <UserIndexItem
                    user={user}/>
                  <br/>
                  <br/>
                </div>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default UserIndex;
