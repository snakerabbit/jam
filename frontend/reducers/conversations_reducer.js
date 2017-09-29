import merge from 'lodash/merge';
import { RECEIVE_CONVERSATIONS, RECEIVE_CONVERSATION} from '../actions/conversation_actions';


const ConversationsReducer = (state = {}, action) =>{
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      return {conversations: action.conversations};
    case RECEIVE_CONVERSATION:
      return merge({}, state, {[action.conversation.id]: action.conversation});
    default:
      return state;
  }
};

export default ConversationsReducer;
