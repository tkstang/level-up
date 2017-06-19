import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { campusRewards } from '../../../../actions/student-rewards-actions';
import EditRewardCompleted from './edit-reward-completed';

const mapStateToProps = state => ({
  editedReward: state.editedReward,
  adminInfo: state.adminLoginInfo,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  campusRewards }, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.campusRewards(this.props.adminInfo.campus_id);
  },
});

export default compose(connectToStore, onDidMount)(EditRewardCompleted);
