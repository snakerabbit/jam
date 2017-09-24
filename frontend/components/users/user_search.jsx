import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class UserSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchValue:""
    };
    this.handleInput = this.handleInput.bind(this);
    this.selectUsername = this.selectUsername.bind(this);
    this.matches = this.matches.bind(this);
  }
  componentDidMount () {
    this.props.fetchAllUsers();
  }
  handleInput (e) {
    this.setState({searchValue: e.target.value});
  }

  selectUsername (e) {
    let username = event.target.innerText;
    this.setState({searchValue: username});
  }

  matches () {
    const matches = [];
    if(this.state.searchValue.length === 0) {
      return this.props.users.map(user => user.username);
    }
  }

  render () {
    return(
      <div></div>
    );
  }


}

export default UserSearch;
