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
      return this.props.users.map(id => (this.props.users[id]));
    }
    this.props.users.forEach(user => {
      let subValue = user.username.slice(0, this.state.searchValue.length);
      if(subValue.toLowerCase() === this.state.searchValue.toLowerCase()){
        matches.push(user);
      }
    });

    if (matches.length === 0 ){
      matches.push('No Matches Found');
    }

    return matches;
  }

  render () {
    let result = this.matches.map(match => {
      return(
        <li onClick={this.selectUsername}>{match}</li>
      );
    });
    return(
      <div>
        <input type='text'
               onChange = {this.handleInput}
               value = {this.state.searchValue}
               placeholder = 'Search...'/>
        <ul>
          <CSSTransitionGroup
            transitionEnterTimeout = {500}
            transitionLeaveTimeout = {500}
          >{result}
          </CSSTransitionGroup>
        </ul>
      </div>
    );
  }


}

export default UserSearch;
