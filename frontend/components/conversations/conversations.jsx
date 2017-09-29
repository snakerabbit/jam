import React from 'react';
import ChatBox from './chatbox';
import TabsContainer from './tabs_container';

class Conversation extends React.Component {
  constructor(props){
    super(props);
    this.received = this.received.bind(this);
    this.sent = this.sent.bind(this);
  }

  componentDidMount(){
    this.props.fetchConversations();
  }

  received(){

    const convoOrder = this.props.conversations.order;
    return(
      convoOrder.map(conversation => {
        if(this.props.conversations[conversation].user_two_id === this.props.currentUser.id){
          return(
            <ChatBox
              key={conversation}
              conversation={this.props.conversations[conversation]}
              currentUser={this.props.currentUser}
              conversationId = {conversation}
            />
          );
        }
      })
    );
  }

  sent(){
    const convoOrder = this.props.conversations.order;
    return(
      convoOrder.map(conversation => {
        if(this.props.conversations[conversation].user_one_id === this.props.currentUser.id){
          return(
            <ChatBox
              key={conversation}
              conversation={this.props.conversations[conversation]}
              currentUser={this.props.currentUser}
              conversationId = {conversation}
            />
          );
        }
      })
    );
  }

  render(){
    if(!this.props.conversations){
      return <div>No Conversations</div>;
    }
    if(!this.props.currentUser){
      return null;
    }

    return(
      <div>
        <TabsContainer
         tabs={[this.received(), this.sent()]}
         tabLabels={["Received", "Sent"]}
       />
      </div>
    );
  }

}

export default Conversation;
