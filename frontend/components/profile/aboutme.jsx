import React from 'react';
import { Link } from 'react-router-dom';

class AboutMe extends React.Component {
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
        <div className = 'about-me'>
          <ul>
            <h1>About Me: </h1>
            <p>{user.about_me}</p>
            <h1>Favorite Bands: </h1>
            <p>{user.fave_bands}</p>
            <h1>Favorite Genres: </h1>
            <p>{user.fave_genres}</p>
            <h1>Why I'm Here: </h1>
            <p>{user.purpose}</p>
          </ul>
        </div>
      </div>

    );
  }
}

AboutMe.defaultProps = {
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

export default AboutMe;
