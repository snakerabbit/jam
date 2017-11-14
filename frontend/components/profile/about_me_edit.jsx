import React from 'react';
import merge from 'lodash/merge';

class AboutMeEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      previousInput: "",
      nextInput:"",
      edit: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.displayTitle = this.displayTitle.bind(this);
    this.editTitle = this.editTitle.bind(this);
    this.editText = this.editText.bind(this);
    this.displayText = this.displayText.bind(this);
    this.currentText = this.currentText.bind(this);
  }

  componentDidMount(){
    this.setState({
      nextInput: this.props.userInput
    });
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      nextInput: nextProps.userInput
    });
  }

  handleClick(e){
    e.preventDefault();
    this.setState({
      previousInput: this.state.userInput,
      edit: true
    });
  }

  handleUpdate(e){
    e.preventDefault();
    const updatedDetail = {
      [this.props.detailName]: this.state.nextInput
    };
    console.log("user", this.props.user);
    console.log("updatedDetail", updatedDetail);
    const user = Object.assign({}, this.props.user, updatedDetail);
    console.log(this.props.updateUser);
    this.props.updateUser(user).then(()=>this.setState({edit:false}));
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      nextInput: e.currentTarget.value
    });
  }

  handleCancel(e){
    e.preventDefault();
    console.log("this.state.previousInput", this.state.previousInput);
    this.setState({
      nextInput: this.props.userInput,
      previousInput: "",
      edit: false
    });
  }

  displayTitle(){
    return(
      <div className='title-container'>
        <div>
          <h2 className="detail">{this.props.detailTitle}</h2>
        </div>
      </div>
    );
  }

  editTitle(){
    return(
      <div>
        <button className='edit-button-detail' onClick={this.handleClick}>
          <h2 className="detail">{this.props.detailTitle}</h2>
          <img className='editicon'src='http://cdn.mysitemyway.com/icons-watermarks/simple-light-gray/bfa/bfa_edit/bfa_edit_simple-light-gray_512x512.png'/>
        </button>
      </div>
    );
  }

  editText(){
    return(
        <form>
          <textarea
            placeholder={this.props.placeHolder}
            onChange={this.handleChange}
            value={this.state.nextInput}/>
          <input type="submit" value="save" onClick={this.handleUpdate}/>
          <input type = "submit" value="cancel" onClick={this.handleCancel} />
        </form>
    );
  }

  displayText(){
    let text = this.state.nextInput;
    let boolean = false;
    if(!this.state.nextInput){
      text = this.props.placeHolder;
      boolean = true;
    } else if(this.props.currentUser.id === this.props.user.id && this.state.nextInput.length === 0){
      text = this.props.placeHolder;
      boolean = true;
    } else {
      return(
        <div>{this.state.nextInput}</div>
      );
    }

  }

  currentText(){
    if(this.state.edit){
      return this.editText();
    } else {
      return this.displayText();
    }
  }

  render() {
    if (!this.props.currentUser) {
      return null;
    } else if (this.props.currentUser.id === this.props.user.id) {
      return (
        <div className='essay-block'>
          {this.editTitle()}
          {this.currentText()}
        </div>
      );
    } else {
      return (
        <div className="essay-block">
          {this.displayTitle()}
          {this.displayText()}
        </div>
      );
    }
  }
}

export default AboutMeEdit;
