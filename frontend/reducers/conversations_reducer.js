import merge from 'lodash/merge';
import { RECEIVE_CONVERSATIONS, RECEIVE_CONVERSATION} from '../actions/conversation_actions';

const _defaultState = {
  currentConversation: null,
  conversations: {}
};

const ConversationsReducer = (state, action) =>{
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      return {conversations: action.conversations};
    case RECEIVE_CONVERSATION:
      return {currentConversation: action.conversation};
    default:
      return state;
  }
};

export default ConversationsReducer;
