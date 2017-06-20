import React from 'react';
import { Menu, Icon, Image, Loader } from 'semantic-ui-react';
import './sidenav-styles.css';
import { Link } from 'react-router-dom';


const StudentSidenav = (props) => {
  if (!props.studentLoginInfo.id && !props.studentPointsAndCampus.currentTotal) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  return (
    <Menu inverted vertical className="studentSidenav">
      <Menu.Item id="student-sidenav-info"><Image src={props.studentLoginInfo.gravatar_url ? props.studentLoginInfo.gravatar_url : props.studentLoginInfo.photo_url} shape="circular" size="tiny" centered />
        <div className="userdiv">
          <h4>{props.studentLoginInfo.username}</h4>
          <p>{props.studentPointsAndCampus.totalEarned ? `${props.studentPointsAndCampus.totalEarned}  Points Earned` : '0 Points Earned'}</p>
          <p> {props.studentPointsAndCampus.currentTotal ? `${props.studentPointsAndCampus.currentTotal} Points Remaining` : '0 Points Remaining'}</p>
          <p>{props.studentPointsAndCampus.cohort ? `${props.studentPointsAndCampus.cohort}  ${props.studentPointsAndCampus.cohortType} -  ${props.studentPointsAndCampus.location}` : null}</p>
        </div>
      </Menu.Item>
      <Link to={'/student/dashboard'}><Menu.Item><Icon color="orange" className="dash-icon" name="dashboard" /><br />Dashboard</Menu.Item></Link>
      <Link to={'/student/challenges'}><Menu.Item><Icon color="orange" className="dash-icon" name="chevron up" /><br />Challenges</Menu.Item></Link>
      <Link to={'/student/rewards'}><Menu.Item><Icon color="orange" className="dash-icon" name="gift" /><br />Rewards</Menu.Item></Link>
      <Link to={'/'}><Menu.Item onClick={() => props.loggingOutStudent()}><Icon color="orange" className="dash-icon" name="sign out" /><br />Log Out</Menu.Item></Link>
    </Menu>
  );
};

export default StudentSidenav;
