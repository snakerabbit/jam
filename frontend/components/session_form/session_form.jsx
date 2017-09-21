import React from 'react';
import { withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps){
    if(newProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  navLinks (){
    if (this.props.formType === 'login'){
      return <Link to="/signup">Sign Up Instead</Link>;
    } else {
      return <Link to="/login">Log In Instead</Link>;
    }
  }

  render (){
    const text = (this.props.formType === 'login') ? "LOG IN: " : "SIGN UP: ";
    return(
      <div>
        <form onSubmit={this.handleSubmit} className='login-form'>
          <h3>{text}</h3>
          <label>Username:
            <input type='text'
                    value={this.state.username}
                    onChange={this.update('username')}
                    className='login-input'/>
          </label>
          <br/>
          <br/>
          <br/>
          <label>Password:
            <input type='password'
                    value={this.state.password}
                    onChange={this.update('password')}
                    className='login-input'/>
          </label>
          <br/>
          <br/>
          <input type="submit" value='Submit'/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
