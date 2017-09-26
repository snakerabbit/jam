import { connect } from 'react-redux';
import Questions from './questions';
import { fetchQuestions } from '../../actions/question_actions';
import { fetchResponses } from '../../actions/response_actions';
import { withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.session.currentUser,
    currentProfile: state.users[ownProps.match.params.userId],
    questions: state.questions.questions,
    responses: state.responses.responses
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchResponses: (userId) => dispatch(fetchResponses(userId))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Questions));
