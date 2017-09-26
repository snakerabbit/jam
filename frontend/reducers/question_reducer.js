import { RECEIVE_QUESTIONS, RECEIVE_CURRENT_QUESTION} from '../actions/question_actions';
import merge from 'lodash/merge';

const _defaultState = {
  currentQuestion: null,
  questions:{}
};

const QuestionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {questions: action.questions};
    case RECEIVE_CURRENT_QUESTION:
      return {currentQuestion: action.question}
    default:
      return state;
  }
};

export default QuestionReducer;
