import * as SessionApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";


const receiveCurrentUser = currentUser => {
  return({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

const receiveErrors = errors => {
  return({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};

export const login = user => dispatch =>(
  SessionApiUtil.login(user)
  .then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => (dispatch(receiveErrors(err.responseJSON))))
);

export const signup = user => dispatch =>(
  SessionApiUtil.signup(user)
  .then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch =>(
  SessionApiUtil.logout()
  .then(user => dispatch(receiveCurrentUser(null)))
);
