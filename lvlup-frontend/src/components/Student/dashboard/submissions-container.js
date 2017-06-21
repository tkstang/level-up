import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle } from 'recompose';
import Submissions from './submissions';
import { submissionsAction } from '../../../actions/student-dash-actions';
import {
  sortSubmissionsAsc,
  sortSubmissionsDesc,
} from '../../../actions/sort-actions';
import {
  sortSubmissionsChrono,
  sortSubmissionsRevChrono,
} from '../../../actions/sort-date-actions';


const mapStateToProps = state => ({
  studentLoginInfo: state.studentLoginInfo,
  submissions: state.submissions.submissions,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  submissionsAction,
  sortSubmissionsAsc,
  sortSubmissionsDesc,
  sortSubmissionsChrono,
  sortSubmissionsRevChrono,
}, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    if (this.props.studentLoginInfo.id) {
      this.props.submissionsAction(this.props.studentLoginInfo.id);
    }
  },
});

export default compose(connectToStore, onDidMount)(Submissions);
