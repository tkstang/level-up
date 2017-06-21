import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { moreStudentInfo } from '../../../actions/student-dash-actions';

import StudentDashboard from './dashboard';

const mapStateToProps = state => ({
  studentLoginInfo: state.studentLoginInfo,
  lvlUpInfo: state.studentPointsAndCampus,
  submissions: state.submissions,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  moreStudentInfo }, dispatch);

const onDidMount = lifecycle({
  componentDidMount() {
    if (this.props.studentLoginInfo.username) {
      this.props.moreStudentInfo(this.props.studentLoginInfo.id);
    }
  },
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, onDidMount)(StudentDashboard);
