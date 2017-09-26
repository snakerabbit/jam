export const fetchResponses = (userId) => {
  return $.ajax({
    method: "GET",
    url:"api/responses",
    data: {response: {userId}}
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