import React from 'react';

class Conversations extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchConversations();
  }

  render(){

  }
}

export default Conversations;
