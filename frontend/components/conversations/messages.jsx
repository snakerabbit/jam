import React from 'react';
import {withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';

class Messages extends React.Component{
  constructor(props){
    super(props);
    this.state={
      messageText:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayMessages = this.displayMessages.bind(this);
    this.messageForm = this.messageForm.bind(this);
    this.otherUserName = this.otherUserName.bind(this);
    console.log(this.state);
  }

  componentDidMount(){
  }

  otherUserName(){
    if (!this.props.currentUser) {
      return null;
    } else if (this.props.currentUser.id === this.props.conversation.user_two.id) {
      return this.props.conversation.user_one.username;
    } else {
      return this.props.conversation.user_two.username;
    }
  }

  otherUserId(){
    if (!this.props.currentUser) {
      return null;
    } else if (this.props.currentUser.id === this.props.conversation.user_two.id) {
      return this.props.conversation.user_one.id;
    } else {
      return this.props.conversation.user_two.id;
    }
  }

  handleChange(e){
    this.setState({
      messageText: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();

    const newMessage = {
      body: this.state.messageText
    };

    this.props.createMessage(newMessage)
    .then(() => {
    this.setState({ messageText: "" });
    });
  }

  messageForm(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text'
               value={this.state.messageText}
               onChange={this.handleChange}
               placeholder="Tell me what you\'re thinking"
               />
        <input type='submit' value="Send"/>
      </form>
    );
  }

  displayMessages() {
  if (!this.props.conversation.messages) {
    return (
      <div>
      </div>
    );
  } else {
    return (
      Object.keys(this.props.conversation.messages).map((message) => {
        let message_body = this.props.conversation.messages[message].body;
        return(
          <div key={message}>
            <p>{message_body}</p>
          </div>
        );
      })
    );
    }
  }


  render(){
    return(
      <div>
        <h3>MESSAGES YEAH</h3>
        {this.messageForm()}
      </div>
    );
  }
}

export default Messages;
