export const fetchResponses = (user_id) => {
  return $.ajax({
    method: "GET",
    url:"api/responses",
    data: {response: {user_id}}
  });
};

export const fetchResponse = (responseId) => {
  return $.ajax({
    method: "GET",
    url: `api/responses/${responseId}`
  });
};

export const createResponse = (response) => {
  return $.ajax({
    method: "POST",
    url: "api/responses",
    data: {response}
  });
};
