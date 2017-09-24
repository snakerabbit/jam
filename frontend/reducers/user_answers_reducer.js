import { RECEIVE_USER_ANSWERS, RECEIVE_USER_ANSWER} from '../actions/user_answer_actions';

const _defaultState = {
  userAnswer: null,
  userAnswers: []
};

const UserAnswersReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ANSWER:
      return {userAnswer: action.userAnswer};
    case RECEIVE_USER_ANSWERS:
      return {userAnswers: action.userAnswers};
    default:
      return state;
  }
};

export default UserAnswersReducer;
