import React from 'react';
import {withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';

class Message extends React.Component{
  constructor(props){
    super(props);
    this.state={
      messageText:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayMessages = this.displayMessage.bind(this);
    this.messageForm = this.messageForm.bind(this);
  }

  componentDidMount(){
    this.props.fetchConversation(this.props.params.conversationId)
  }

  handleChange(e){
    this.setState({
      messageText: e.currentTarget.value
    })
  }

  handleSubmit(e){
    e.preventDefault();

    const newMessage = {
      conversation_id: this.props.conversation.conversationId,
      body: this.state.messageText
    }

    this.props.createMessage(newMessage)
    .then(() => {
    this.setState({ messageText: "" });
    });
  }

  messageForm(){
    
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

    )
  }
}
