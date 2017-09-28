import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Tabs from './tabs';

const mapStateToProps = (state, ownProps) => {
  return({
    currentUser:state.session.currentUser,
    currentProfile: ownProps.match.params.userId
  });
};

export default withRouter(connect(mapStateToProps)(Tabs));
