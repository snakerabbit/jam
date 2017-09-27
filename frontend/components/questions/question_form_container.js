import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createResponse } from '../../actions/response_actions';


const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    responses: state.responses.responses,
    questions: state.questions.questions
  });
};


const mapDispatchToProps = dispatch => {
  return({
    createResponse: (response) => dispatch(createResponse(response))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
