import * as UserAnswersApiUtil from '../util/user_answers_api_util';
export const RECEIVE_USER_ANSWERS = 'RECEIVE_USER_ANSWERS';
export const RECEIVE_USER_ANSWER = "RECEIVE_USER_ANSWER";

const receiveUserAnswers = userAnswers => {
  return {
    type: RECEIVE_USER_ANSWERS,
    userAnswers
  };
};

const receiveUserAnswer = userAnswer => {
  return({
    type: RECEIVE_USER_ANSWER,
    userAnswer
  });
};

export const fetchUserAnswers = () => dispatch => (
  UserAnswersApiUtil.fetchUserAnswers().then(userAnswers => dispatch(receiveUserAnswers(userAnswers)))
);

export const fetchUserAnswer = id => dispatch => (
  UserAnswersApiUtil.fetchUserAnswer(id).then(userAnswer => dispatch(receiveUserAnswer(userAnswer)))
);

export const createUserAnswer = userAnswer => dispatch => (
  UserAnswersApiUtil.postUserAnswer(userAnswer).then(answer => dispatch(receiveUserAnswer(answer)))
);
