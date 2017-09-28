import * as ApiUtil from '../util/conversation_api_util';
export const RECEIVE_CONVERSATIONS = "RECEIVE_CONVERSATIONS";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";

const receiveConversations = conversations =>{
  return{
    type: RECEIVE_CONVERSATIONS,
    conversations
  };
};

const receiveConversation = conversation =>{
  return({
    type: RECEIVE_CONVERSATION,
    conversation
  });
};

export const fetchConversations = () => dispatch =>(
  ApiUtil.fetchConversations().then(conversations => dispatch(receiveConversations(conversations)))
);

export const fetchConversation = id => dispatch => (
  ApiUtil.fetchConversation(id).then(conversation => dispatch(receiveConversation(conversation)))
);

export const createConversation = newConvo => dispatch =>(
  ApiUtil.createConversation(newConvo).then(conversation => dispatch(receiveConversation(conversation)))
);

export const createMessage = message => dispatch => (
  ApiUtil.createMessage(message).then(conversation => dispatch(receiveConversation(conversation)))
);
