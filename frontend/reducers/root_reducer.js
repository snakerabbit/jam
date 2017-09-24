import { combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import UsersReducer from './users_reducer';
import QuestionReducer from './question_reducer';
import UserAnswersReducer from './user_answers_reducer';

export default combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  users: UsersReducer,
  question: QuestionReducer,
  userAnswers: UserAnswersReducer
});
