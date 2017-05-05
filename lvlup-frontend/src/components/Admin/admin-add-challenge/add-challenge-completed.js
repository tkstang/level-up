import React from 'react';
import { Label, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  addedChallenge: state.addedChallenge,
});

const AddChallengeCompleted = props => (
  <div>
    <Table celled color="orange">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Challenge Successfully Added!</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Challenge</Label>
            {props.addedChallenge.data.name}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Point Value</Label>
            {props.addedChallenge.data.point_value}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Description</Label>
            {props.addedChallenge.data.description}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <Link to={'/admin/challenges'}>
      <Button>Back to Challenges</Button>
    </Link>
  </div>
);

export default connect(mapStateToProps)(AddChallengeCompleted);
