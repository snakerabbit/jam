import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser, updateUser } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  user: state.users[ownProps.match.params.postId]
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  updateUser: user => dispatch(updateUser(user))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
