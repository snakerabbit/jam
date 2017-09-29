import { connect } from 'react-redux';
import UserBasics from './user_basics';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { createConversation } from '../../actions/conversation_actions';
import { withRouter } from 'react-router-dom';



const mapStateToProps = (state, ownProps) => ({
  user: state.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  updateUser: user => dispatch(updateUser(user)),
  createConversation: newConvo => dispatch(createConversation(newConvo))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserBasics));
