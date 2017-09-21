import { connect } from 'react-redux';
import UserIndex from './user_index';
import { fetchUsers, fetchUser} from '../../actions/user_actions';

const mapStateToProps = state => {
  return({
    users: Object.values(state.users)
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchUsers:() => dispatch(fetchUsers()),
    fetchUser: id => dispatch(fetchUser(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);
