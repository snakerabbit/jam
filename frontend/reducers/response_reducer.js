import merge from 'lodash/merge';
import {RECEIVE_RESPONSES, RECEIVE_RESPONSE} from '../actions/response_actions';

const _defaultState = {
  currentResponse: null,
  responses: {}
};

const ResponseReducer = (state=_defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESPONSES:
      return {responses: action.responses};
    case RECEIVE_RESPONSE:
      let newState = merge({}, state);
      return merge(newState, {responses: action.response});
    default:
      return state;
  }
};

export default ResponseReducer;
