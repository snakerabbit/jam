import React from 'react';
import { Link } from 'react-router-dom';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.renderEditButton = this.renderEditButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state={
      edit: false
    };
  }
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.userId !== this.props.match.params.userId){
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  handleClick(input){
    console.log("input", input);
    this.setState({
      edit: true
    });
  }

  handleSubmit(){
  }

  renderForm(){
    if(this.state.edit){
      return(
        <div>
          <form>
            <textarea className='edit-text'></textarea>
            <input type='submit' onSubmit={()=>this.handleSubmit()}></input>
          </form>
        </div>
      );
    }
  }

  renderEditButton(input){
    if(this.props.currentUser.id === parseInt(this.props.match.params.userId) && !this.state.edit){
      return(
        <button onClick={()=>this.handleClick(input)}className='edit-button'>
          <img className = 'edit-icon' src='http://cdn.mysitemyway.com/icons-watermarks/simple-light-gray/bfa/bfa_edit/bfa_edit_simple-light-gray_512x512.png'/>
        </button>
      );
    } else {
      return(
        <div></div>
      );
    }
  }


  render () {
    const user = this.props.user;

    return(
      <div>
        <div className = 'about-me'>
          <ul>
            <h1 className='about-me-h3'>About Me: </h1>
              {this.renderEditButton("about_me")}
              {this.renderForm()}
            <p>{user.about_me}</p>
            <h1 className='about-me-h3'>Favorite Bands: </h1>
              {this.renderEditButton("fave_bands")}
            <p>{user.fave_bands}</p>
            <h1 className='about-me-h3'>Favorite Genres: </h1>
              {this.renderEditButton("fave_genres")}
            <p>{user.fave_genres}</p>
            <h1 className='about-me-h3'>Why I'm Here: </h1>
              {this.renderEditButton("purpose")}
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
