import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { fetchQuestions } from '../../actions/question_actions';
import { fetchResponses, updateResponse } from '../../actions/response_actions';
import { withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.session.currentUser,
    currentProfile: ownProps.match.params.userId,
    questions: state.questions.questions,
    responses: state.responses.responses
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchResponses: (userId) => dispatch(fetchResponses(userId)),
    updateResponse: (response) => dispatch(updateResponse(response))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionIndex));
