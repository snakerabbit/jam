import React from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const customStyles={
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '200px',
    left                       : '200px',
    right                      : '200px',
    bottom                     : '200px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    backgroundColor            : 'black',
    display                    : 'flex',
    justifyContent             :'center',
    alignItems                 :'center',
    flexDirection              :'column'
}
};

class UserBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      imageUrl:null,
      modalIsOpen:false
    };

    this.handleDrop = this.handleDrop.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    console.log("this.props", this.props);
  }
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.userId !== this.props.match.params.userId){
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  openModal(){
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal(){
    this.setState({
      modalIsOpen: false
    });
  }

  renderPicButton(){
    if(this.props.currentUser.id === this.props.user.id){
      return(
        <button className='profile-pic-button' onClick={this.openModal}>Edit Profile Picture</button>
      );
    } else {
      return(
        <div></div>
      )
    }
  }

  handleDrop(files){

    const uploaders = files.map(file => {

      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "lppemhtj");
      formData.append("api_key", "696274378671384");
      formData.append("timestamp", (Date.now() / 1000) | 0);


      return axios.post("https://api.cloudinary.com/v1_1/drebodbbw/image/upload", formData, {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      }).then(response => {
        const data = response.data;
        const fileURL = data.secure_url;
        console.log(data);
      });
    });

    // Once all the files are uploaded
    axios.all(uploaders).then(() => {

    });
  }


  render () {
    const user = this.props.user;

    return(
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <h1>Upload A New Profile Picture</h1>
          <Dropzone
            onDrop={this.handleDrop}
            multiple
            accept="image/*"
            className='dropzone'
          >
            <p>Drop your Photo or Click Here to Upload</p>
          </Dropzone>
        </Modal>
        <div className = 'user-profile'>
          <img src={user.image_url} className='user-img'/>
          {this.renderPicButton()}
          <ul>
            <h1>{user.username}</h1>
            <h2>City: {user.city}</h2>
            <h2>Instrument: {user.instrument}</h2>
            <h2>Looking For: {user.looking_for}</h2>
            <Link to='/users'>Back To Browse</Link>
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
