import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { campusChallenges } from '../../../../actions/student-challenges-actions';
import EditChallengeCompleted from './edit-challenge-completed';

const mapStateToProps = state => ({
  editedChallenge: state.editedChallenge,
  adminInfo: state.adminLoginInfo,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  campusChallenges }, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.campusChallenges(this.props.adminInfo.campus_id);
  },
});

export default compose(connectToStore, onDidMount)(EditChallengeCompleted);
