import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Conversation from './conversations';
import { fetchConversations, createConversation } from '../../actions/conversation_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.session.currentUser,
    currentProfile: ownProps.match.params.userId,
    conversations: state.conversations.conversations,
    users: Object.values(state.users)
  });
};

const mapDispatchToProps = dispatch => {
  return({
      fetchConversations: () => dispatch(fetchConversations()),
      createConversation: (newConvo) => dispatch(createConversation(newConvo)),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Conversation));
