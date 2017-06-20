import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PendingSubmissionsTable from './pending-submissions';
import { selectChallenge } from '../../../actions/student-challenges-actions';
import { submissionsAction } from '../../../actions/admin-dash-actions';
import { resetPendingSubmissions } from '../../../actions/reset-actions';
import { sortSubmittedChrono, sortSubmittedRevChrono } from '../../../actions/sort-date-actions';
import { sortSubmittedAsc, sortSubmittedDesc } from '../../../actions/sort-actions';

const mapStateToProps = state => ({
  adminInfo: state.adminLoginInfo,
  pendingSubmissions: state.adminPendingSubmissions,
  selectedChallenge: state.selectedChallenge,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  selectChallenge,
  submissionsAction,
  resetPendingSubmissions,
  sortSubmittedChrono,
  sortSubmittedRevChrono,
  sortSubmittedAsc,
  sortSubmittedDesc,
}, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.resetPendingSubmissions();
    this.props.adminInfo.cohorts.map(item => this.props.submissionsAction(item.id));
  },
});

export default compose(connectToStore, onDidMount)(PendingSubmissionsTable);
