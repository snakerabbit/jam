import React from 'react';
import { Link } from 'react-router-dom';

class UserBasics extends React.Component {
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
      <div>
        <div className = 'user-profile'>
          <ul>
            <img src={user.image_url} className='user-imgs'/>
            <h1>{user.username}</h1>
            <h2>City: {user.city}</h2>
            <h2>Instrument: {user.instrument}</h2>
            <h2>Looking For: {user.looking_for}</h2>
            <Link to='/users'>Back To Browse</Link>>
          </ul>
        </div>
      </div>

    );
  }
}

UserBasics.defaultProps = {
  user: {
    username: "",
    image_url: "",
    instrument: "",
    city: "",
    looking_for: "",
    about_me: "",
    fave_bands:"",
    fave_genres:"",
    purpose:""
  }
};

export default UserBasics;
