export const fetchConversations = () => {
  return $.ajax({
    method: "GET",
    url: 'api/conversations',

  });
};
