import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchConversation, createMessage } from '../../actions/conversation_actions';
import Messages from './messages';

const mapStateToProps = (state, ownProps) =>{
  return({
    currentUser: state.session.currentUser,
    conversationId: ownProps.match.params.conversationsId,
    currentConversation: state.conversations.currentConversation
  });
};

const mapDispatchToProps = dispatch =>{
  return({
    fetchConversation: id => dispatch(fetchConversation(id)),
    createMessage: message => dispatch(createMessage(message))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Messages));
