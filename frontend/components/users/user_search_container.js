import { connect } from 'react-redux';
import UserSearch from './user_search';
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';

const mapStateToProps = state => {
  return({
    user: state.users[state.users.id]
  });
};

const mapDispatchToProps = dispatch =>{
  return({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchUser: id => dispatch(fetchUser(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
