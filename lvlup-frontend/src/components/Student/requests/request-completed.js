import React from 'react';
import { Label, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const RequestCompleted = props => (
  <div>
    <Table celled selectable color="orange">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center" className="completed-thead">Reward Request Successful!</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Requested Reward</Label>
            {props.reward.name}
          </Table.Cell>
        </Table.Row>
        {props.requestedReward.data.notes ?
          <Table.Row>
            <Table.Cell>
              <Label ribbon>Request Notes</Label>
              {props.requestedReward.data.notes}
            </Table.Cell>
          </Table.Row> : null}
      </Table.Body>
    </Table>
    <Link to={'/student/rewards'}>
      <Button basic color="orange">Back to Rewards</Button>
    </Link>
  </div>
);

export default RequestCompleted;
