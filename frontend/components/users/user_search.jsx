import React from 'react';

class UserSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount () {
    this.props.fetchUser(this.state.search);
  }
  handleChange (e) {
    this.setState({search: e.target.value});
  }

  handleSubmit (e) {

  }

  render () {
    return(
      <div></div>
    );
  }


}

export default UserSearch;
