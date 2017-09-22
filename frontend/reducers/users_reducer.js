import merge from 'lodash/merge';
import {RECEIVE_ALL_USERS, RECEIVE_USER} from '../actions/user_actions';


const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_USER:
      let newState = merge({}, state);
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
