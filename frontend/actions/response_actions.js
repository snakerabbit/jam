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

export const fetchResponses = userId => dispatch => (
  ResponseApiUtil.fetchResponses(userId)
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
