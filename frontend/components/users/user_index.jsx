import React from 'react';
import UserIndexItem from './user_index_item';
import IndexSearchBar from './index_search_bar';

class UserIndex extends React.Component {
  componentDidMount(){
    this.props.fetchUsers();
  }


  render () {
    return(
      <div className='browse-users'>
          <div className='index-search-bar'>
            <IndexSearchBar users={this.props.users} fetchUsers={this.props.fetchUsers.bind(this)}/>
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
