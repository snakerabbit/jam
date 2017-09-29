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
  }

  componentDidMount(){
    this.props.fetchConversation(this.props.conversationId);
  }

  componentDidUpdate(newProps) {
  if (!this.props.currentUser) {
    return;
  }
  if(this.props !== newProps){
    this.props.fetchConversation(this.props.conversationId);
  }
  var out = document.getElementById("out");
  var isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1;
  }

  otherUserName(){
    if(this.props.currentConversation){
      if (!this.props.currentUser) {
        return null;
      } else if (this.props.currentUser.id === this.props.currentConversation.user_two.id) {
        return this.props.currentConversation.user_one.username;
      } else {
        return this.props.currentConversation.user_two.username;
      }
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
      conversation_id: this.props.conversationId,
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
               placeholder="Tell me what you're thinking"
               className='input-message'
               />
        <input type='submit' value="Send"/>
      </form>
    );
  }

  displayMessages() {
    if(this.props.currentConversation) {
      return (
        Object.keys(this.props.currentConversation.messages).map((message) => {
          let message_body = this.props.currentConversation.messages[message].body;
          let message_styling = this.props.currentConversation.messages[message].author_id === this.props.currentUser.id ?
              "user-styling" : "other-user-styling";
          return(
            <div key={message} className='chat-bubble'>
              <p className={message_styling}>{message_body}</p>
            </div>
          );
        })
      );
    } else {
      return(
        <div></div>
      );
    }
  }


  render(){

      return(
        <div>
        <h3>{this.otherUserName()}</h3>
        <div className='chat-container'>
          {this.displayMessages()}
          {this.messageForm()}
        </div>
        </div>
      );
    }

  }

export default Messages;
