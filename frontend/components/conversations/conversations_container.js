import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Conversations from './conversations';
import { fetchConversations } from '../../actions/conversation_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.session.currentUser,
    currentProfile: ownProps.match.params.userId,
    conversations: state.conversations.conversations
  });
};

const mapDispatchToProps = dispatch => {
  return({
      fetchConversations: () => dispatch(fetchConversations())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Conversations));
