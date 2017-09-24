import * as UserApiUtil from '../util/user_api_util';
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";


export const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

const receiveUser = user =>{
  return({
    type: RECEIVE_USER,
    user
  });
};

export const fetchUsers = instrument => dispatch => (
    UserApiUtil.fetchUsers(instrument).then(users => dispatch(receiveAllUsers(users)))
);

export const fetchAllUsers = () => dispatch => (
  UserApiUtil.fetchAllUsers().then(users => dispatch(receiveAllUsers(users)))
);

export const fetchUser = id => dispatch => (
  UserApiUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
);

export const updateUser = updatedUser => dispatch => (
  UserApiUtil.updateUser(updatedUser).then(user => dispatch(receiveUser(user)))
);
