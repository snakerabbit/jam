import { combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import UsersReducer from './users_reducer';
import QuestionReducer from './question_reducer';
import ResponseReducer from './response_reducer';
import ConversationsReducer from './conversations_reducer';

export default combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  users: UsersReducer,
  questions: QuestionReducer,
  responses: ResponseReducer,
  conversations: ConversationsReducer
});
