import React from 'react';
import { Table, Loader } from 'semantic-ui-react';
import './dashboard-styles.css';
import { quarterConverter, quarterPointFinder, getFirstName } from '../helpers/dashboard';
import SignupInfo from './signup-container';
import SignUpError from './signup-error';
import Submissions from './submissions-container';
import RewardsEarned from './rewards-earned-container';
import AchievementsCarousel from './achievements-carousel-container';

const StudentDashboard = (props) => {
  if (props.studentLoginInfo.error) {
    return (
      <div>
        <SignUpError />
      </div>
    );
  }
  if (!props.studentLoginInfo.name && !props.lvlUpInfo.totalEarned) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  if (!props.studentLoginInfo.cohort_id && props.submissions.submissions.length === 0) {
    return <SignupInfo />;
  }
  return (
    <div className="lvl-table">
      <h1 className="headerStudent">{`Welcome, ${getFirstName(props.studentLoginInfo.name)}!`}</h1>
      { props.submissions.submissions.length > 0 ? <AchievementsCarousel /> : null}
      <Table celled selectable id="points-table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" className="thead-secondary point-header">Current Quarter</Table.HeaderCell>
            <Table.HeaderCell textAlign="center" className="thead-secondary point-header">Quarter Points</Table.HeaderCell>
            <Table.HeaderCell textAlign="center" className="thead-secondary point-header">Cumulative Points</Table.HeaderCell>
            <Table.HeaderCell textAlign="center" className="thead-secondary point-header">Remaining Points</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell className="point-cell" textAlign="center">
              {quarterConverter(props.lvlUpInfo.currentQuarter)}
            </Table.Cell>
            <Table.Cell className="point-cell" textAlign="center">
              {quarterPointFinder(props.lvlUpInfo)}
            </Table.Cell>
            <Table.Cell className="point-cell" textAlign="center">
              {props.lvlUpInfo.totalEarned}
            </Table.Cell>
            <Table.Cell className="point-cell" textAlign="center">
              {props.lvlUpInfo.currentTotal}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Submissions />
      <RewardsEarned />

    </div>
  );
};

export default StudentDashboard;
