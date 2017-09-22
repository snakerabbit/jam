import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.userId !== this.props.match.params.userId){
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  render () {
    const user = this.props.user;
    return(
      <div className = 'user-profile'>
        <ul>
          <container className ='user-img-container'>
            <img src={user.image_url} className='user-imgs'/>
          </container>
          <h1>{user.username}</h1>
          <h2>City: {user.city}</h2>
          <h2>Instrument: {user.instrument}</h2>
          <h2>Looking For: {user.looking_for}</h2>
        </ul>
      </div>
    );
  }
}

UserShow.defaultProps = {
  user: {
    username: "",
    image_url: "",
    instrument: "",
    city: "",
    looking_for: ""
  }
};

export default UserShow;
