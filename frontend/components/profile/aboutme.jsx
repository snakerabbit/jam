import React from 'react';
import { Link } from 'react-router-dom';
import AboutMeEdit from './about_me_edit';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params !== this.props.match.params){
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }
  //
  // handleClick(input){
  //   console.log("input", input);
  //   this.setState({
  //     edit: true
  //   });
  // }
  //
  // updateField(field){
  //   return e => this.setState({
  //     [field]: e.target.value
  //   });
  // }
  //
  // handleSubmit(){
  //
  // }

  //
  // renderEditButton(input){
  //   if(this.props.currentUser.id === parseInt(this.props.match.params.userId)){
  //     return(
  //       <button onClick={()=>this.handleClick(input)}className='edit-button'>
  //         <img className = 'edit-icon' src='http://cdn.mysitemyway.com/icons-watermarks/simple-light-gray/bfa/bfa_edit/bfa_edit_simple-light-gray_512x512.png'/>
  //       </button>
  //     );
  //   } else {
  //     return(
  //       <div></div>
  //     );
  //   }
  // }


  render () {
    const user = this.props.user;
    if(this.props.user){
      return(
        <div>
          <AboutMeEdit
            detailName="about_me"
            detailTitle="About Me: "
            currentUser={this.props.currentUser}
            user={user}
            userInput={user.about_me}
            placeHolder=""
            updateUser={this.props.updateUser}/>
          <AboutMeEdit
            detailName="fave_bands"
            detailTitle="Favorite Bands: "
            currentUser={this.props.currentUser}
            user={user}
            userInput={user.fave_bands}
            placeHolder=""
            updateUser={this.props.updateUser}/>
          <AboutMeEdit
            detailName="fave_genres"
            detailTitle="Favorite Genres: "
            currentUser={this.props.currentUser}
            user={user}
            userInput={user.fave_genres}
            placeHolder=""
            updateUser={this.props.updateUser}/>
          <AboutMeEdit
            detailName="purpose"
            detailTitle="Why I'm Here: "
            currentUser={this.props.currentUser}
            user={user}
            userInput={user.purpose}
            placeHolder=""
            updateUser={this.props.updateUser}/>
        </div>
      );
    }
    // return(
    //   <div>
    //     <div className = 'about-me'>
    //       <ul>
    //         <h1 className='about-me-h3'>About Me: </h1>
    //           {this.renderEditButton("about_me")}
    //         <p>{user.about_me}</p>
    //         <h1 className='about-me-h3'>Favorite Bands: </h1>
    //           {this.renderEditButton("fave_bands")}
    //         <p>{user.fave_bands}</p>
    //         <h1 className='about-me-h3'>Favorite Genres: </h1>
    //           {this.renderEditButton("fave_genres")}
    //         <p>{user.fave_genres}</p>
    //         <h1 className='about-me-h3'>Why I'm Here: </h1>
    //           {this.renderEditButton("purpose")}
    //         <p>{user.purpose}</p>
    //       </ul>
    //     </div>
    //   </div>
    //
    // );
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
