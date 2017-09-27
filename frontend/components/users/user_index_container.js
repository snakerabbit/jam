import { connect } from 'react-redux';
import UserIndex from './user_index';
import { fetchUsers, fetchUser, fetchAllUsers} from '../../actions/user_actions';
import { fetchQuestions } from '../../actions/question_actions';
import { fetchResponses } from '../../actions/response_actions';

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    users: Object.values(state.users),
    questions: state.questions.questions,
    responses: state.responses.responses
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchUsers:(instrument) => dispatch(fetchUsers(instrument)),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchResponses: (userId) => dispatch(fetchResponses(userId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);
