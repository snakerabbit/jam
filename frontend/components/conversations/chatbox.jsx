import React from 'react';
import { Link } from 'react-router-dom';

class ChatBox extends React.Component {
  constructor(props){
    super(props);
    this.otherUser = this.otherUser.bind(this);
  }

  otherUser(){
    if(this.props.currentUser.id === this.props.conversation.user_one_id){
      return this.props.conversation.user_two;
    } else {
      return this.props.conversation.user_one;
    }
  }


  render(){
      if(!this.props.conversation.latest_message){
        return(
          <Link to={`/conversations/${this.props.conversation.id}`}>
            <h3>{this.otherUser()}</h3>
            <p></p>
          </Link>
        );
      } else {
        return(
          <Link to={`/conversations/${this.props.conversation.id}`}>
            <h3>{this.otherUser()}</h3>
            <p>{this.props.converation.latest_message.body}</p>
            <p>{this.props.conversation.latest_message.created_at}</p>
          </Link>
        );
      }

  }


}

export default ChatBox;
