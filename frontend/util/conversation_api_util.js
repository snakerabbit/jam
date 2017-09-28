export const fetchConversations = () => {
  return $.ajax({
    method: "GET",
    url: 'api/conversations',

  });
};

export const fetchConversation = convId => {
  return $.ajax({
    method: "GET",
    url: `api/conversations/${convId}`
  });
};

export const createConversation = conv =>{
  return $.ajax({
    method: "POST",
    url:'api/conversations',
    data: {conv}
  });
};

export const createMessage = message =>{
  return $.ajax({
    method: "POST",
    url: `api/conversations/${message.conversation_id}/messages`
  });
};
