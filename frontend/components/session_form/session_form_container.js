import { connect } from 'react-redux';
import { login, logout, signup, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state =>{
  return({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return({
    processForm: user => dispatch(processForm(user)),
    formType,
    clearSessionErrors: () => dispatch(clearSessionErrors())
  });
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionForm)
);
