import React from 'react';
import UserIndexItem from './user_index_item';

class UserIndex extends React.Component {
  componentDidMount(){
    this.props.fetchUsers();
  }
  render () {
    return(
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
    );
  }
}

export default UserIndex;
