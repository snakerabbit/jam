import { RECEIVE_QUESTIONS, RECEIVE_QUESTION} from '../actions/question_actions';
import merge from 'lodash/merge';



const QuestionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      return action.question;
    default:
      return state;
  }
};

export default QuestionReducer;
