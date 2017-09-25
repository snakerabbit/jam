import { connect } from 'react-redux';
import { fetchUserAnswers } from '../../actions/user_answer_actions';
import { fetchQuestions } from '../../actions/question_actions';
import Questions from './questions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    questions: state.question.questions,
    userAnswers: state.userAnswers.userAnswers
  });
};



const mapDispatchToProps = dispatch =>({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchUserAnswers: (userId) => dispatch(fetchUserAnswers(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
