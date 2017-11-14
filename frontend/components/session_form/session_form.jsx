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
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  componentWillMount() {
    this.props.clearSessionErrors();
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


  handleGuestLogin() {
      if (this.props.formType === "login") {
        return (
          <button type="submit"
                  onClick={() => this.setState({username: "guest", password: 'password'})}>Demo Login</button>
        );
      } else {
        return(
          <div></div>
        );
      }
  }


  renderErrors() {
    return(
      <ul>
      {this.props.errors.map((error, index) => (
        <li key={`error-${index}`}>
          <p>{error}</p>
        </li>
      ))}
    </ul>
  );
  }

  render (){
    const text = (this.props.formType === 'login') ? "LOG IN: " : "SIGN UP: ";
    return(
      <div>
        <form onSubmit={this.handleSubmit} className='login-form'>
          <h3>{text}</h3>
          {this.renderErrors()}
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
          <br/>
          <br/>
          {this.handleGuestLogin()}
          <br/>
          <br/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
