import * as QuestionApiUtil from '../util/question_api_util';
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_CURRENT_QUESTION = "RECEIVE_CURRENT_QUESTION";

const receiveQuestions = questions => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
};

const receiveQuestion = question => {
  return({
    type: RECEIVE_CURRENT_QUESTION,
    question
  });
};

export const fetchQuestion = questionId => dispatch => (
  QuestionApiUtil.fetchQuestion(questionId).then(question => dispatch(receiveQuestion(question)))
);

export const fetchQuestions = () => dispatch => (
  QuestionApiUtil.fetchQuestions().then(questions => dispatch(receiveQuestions(questions)))
);
