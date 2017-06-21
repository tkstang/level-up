import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RewardsEarned from './rewards-earned';
import { compose, lifecycle } from 'recompose';
import { requestsAction } from '../../../actions/student-dash-actions';
import {
  sortRewardsAsc,
  sortRewardsDesc,
} from '../../../actions/sort-actions';
import {
  sortRewardsChrono,
  sortRewardsRevChrono,
} from '../../../actions/sort-date-actions';


const mapStateToProps = state => ({
  studentLoginInfo: state.studentLoginInfo,
  requests: state.requests.requests,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  requestsAction,
  sortRewardsAsc,
  sortRewardsDesc,
  sortRewardsChrono,
  sortRewardsRevChrono,
}, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    if (this.props.studentLoginInfo.id) {
      this.props.requestsAction(this.props.studentLoginInfo.id);
    }
  },
});

export default compose(connectToStore, onDidMount)(RewardsEarned);
