import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StudentChallengesTable from './challenges-table';
import { campusChallenges, selectChallenge, resetChallenge } from '../../../actions/student-challenges-actions';

const mapStateToProps = state => ({
  studentLoginInfo: state.studentLoginInfo,
  lvlUpInfo: state.studentPointsAndCampus,
  challenges: state.challenges,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  campusChallenges,
  selectChallenge,
  resetChallenge }, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    if (!this.props.challenges.fetched) this.props.campusChallenges(this.props.lvlUpInfo.campusId);
    this.props.resetChallenge();
  },
});

export default compose(connectToStore, onDidMount)(StudentChallengesTable);
