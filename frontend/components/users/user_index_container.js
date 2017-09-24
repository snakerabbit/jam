import { connect } from 'react-redux';
import UserIndex from './user_index';
import { fetchUsers, fetchUser, fetchAllUsers} from '../../actions/user_actions';

const mapStateToProps = state => {
  return({
    users: Object.values(state.users)
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchUsers:(instrument) => dispatch(fetchUsers(instrument)),
    fetchUser: id => dispatch(fetchUser(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);
