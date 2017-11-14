import React from 'react';
import { Link } from 'react-router-dom';

class ChatBox extends React.Component {
  constructor(props){
    super(props);
    this.otherUser = this.otherUser.bind(this);
  }

  otherUser(){
    if(this.props.currentUser.id === this.props.conversation.user_one_id){
      return this.props.conversation.user_two.username;
    } else {
      return this.props.conversation.user_one.username;
    }
  }


  render(){
      if(!this.props.conversation.latest_message){
        return(
          <div>
            <Link to={`/conversations/${this.props.conversationId}`}>
              <h3 className='other-user'>{this.otherUser()}</h3>
              <p></p>
            </Link>
          </div>

        );
      } else {
        return(
          <div className='chatbox'>
            <Link to={`/conversations/${this.props.conversationId}`}>
              <h1 className='other-user'>{this.otherUser()}</h1>
              <p className='latest-message'>Last Message: {this.props.conversation.latest_message.body}</p>
              <p className='created-at'>Sent: {this.props.conversation.latest_message.created_at} ago</p>
            </Link>
          </div>

        );
      }

  }


}

export default ChatBox;
