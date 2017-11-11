import React from 'react';
import ChatBox from './chatbox';
import TabsContainer from './tabs_container';
import { withRouter} from 'react-router-dom';

class Conversation extends React.Component {
  constructor(props){
    super(props);
    this.received = this.received.bind(this);
    this.sent = this.sent.bind(this);

    this.state={
      user_one_id: this.currentUser,
      user_two_id: null,
      newConversation: false
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.conversationForm = this.conversationForm.bind(this);
    this.newConversation = this.newConversation.bind(this);
  }

  handleSelect(e){
    this.setState({
      user_two_id: e
    });

  }

  handleSubmit(e){
    const newConversation = {
      user_one_id: this.props.currentUser.id,
      user_two_id: this.state.user_two_id
    };

    this.props.createConversation(newConversation).then((resp) => {
      this.props.history.push(`/conversations/${resp.conversation.id}`);
    });
  }
  componentDidMount(){
    this.props.fetchConversations();
  }

  componentWillReceiveProps(){

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
  renderNewConversation(){

  }
  conversationForm(){
    if(this.state.newConversation){
      return(
        <div>
          <form>
            <select>
              {this.props.users.map((user) =>{
                return <option
                        onSelect={this.handleSelect}
                  >{user.username}</option>;
              })}
            </select>
            <button onClick={this.handleSubmit}>New Message</button>
          </form>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }

  }
  newConversation(){
    this.setState({
      newConversation: true
    });
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

export default withRouter(Conversation);
