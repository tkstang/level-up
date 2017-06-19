import { connect } from 'react-redux';
import StudentDashboard from './dashboard';

const mapStateToProps = state => ({
  studentLoginInfo: state.studentLoginInfo,
  lvlUpInfo: state.studentPointsAndCampus,
  submissions: state.submissions,
});

export default connect(mapStateToProps)(StudentDashboard);
