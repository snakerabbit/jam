import { RECEIVE_QUESTIONS, RECEIVE_QUESTION} from '../actions/question_actions';
import merge from 'lodash/merge';

const _defaultState = {
  question: null,
  questions: {}
};

const QuestionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {questions: action.questions};
    case RECEIVE_QUESTION:
      return {question: action.question};
    default:
      return state;
  }
};

export default QuestionReducer;
