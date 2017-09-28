import * as ResponseApiUtil from '../util/response_api_util';
export const RECEIVE_RESPONSES = "RECEIVE_RESPONSES";
export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE";

const receiveResponses = responses => {
  return {
    type: RECEIVE_RESPONSES,
    responses
  };
};

const receiveResponse = response => {
  return {
    type: RECEIVE_RESPONSE,
    response
  };
};

export const fetchResponses = user_id => dispatch => (
  ResponseApiUtil.fetchResponses(user_id)
                 .then(responses => dispatch(receiveResponses(responses)))
);

export const fetchResponse = responseId => dispatch => (
  ResponseApiUtil.fetchResponse(responseId)
                 .then(response => dispatch(receiveResponse(response)))
);

export const createResponse = newResponse => dispatch => (
  ResponseApiUtil.createResponse(newResponse)
                 .then(response => dispatch(receiveResponse(response)))
);

export const updateResponse = updatedResponse => dispatch =>(
  ResponseApiUtil.updateResponse(updatedResponse)
                 .then(response => dispatch(receiveResponse(response)))
);
