import React from 'react';
import { Link } from 'react-router-dom';

class UserBasics extends React.Component {
  constructor(props) {
    super(props);
    this.messageUser = this.messageUser.bind(this);
  }
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.userId !== this.props.match.params.userId){
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  messageUser(){

  }


  render () {
    const user = this.props.user;

    return(
      <div>
        <div className = 'user-profile'>
          <ul>
            <img src={user.image_url} className='user-img'/>
            <h1>{user.username}</h1>
            <h2>City: {user.city}</h2>
            <h2>Instrument: {user.instrument}</h2>
            <h2>Looking For: {user.looking_for}</h2>
            <Link to='/users'>Back To Browse</Link>
            <button onClick={this.messageUser()}>Message User</button>
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
