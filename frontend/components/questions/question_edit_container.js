import { connect } from 'react-redux';
import QuestionEdit from './question_edit';
import { createResponse, fetchResponse, updateResponse } from '../../actions/response_actions';


const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    responses: state.responses.responses,
    questions: state.questions.questions,

  });
};


const mapDispatchToProps = dispatch => {
  return({
    createResponse: (response) => dispatch(createResponse(response)),
    updateResponse: (response) => dispatch(updateResponse(response))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(QuestionEdit);
