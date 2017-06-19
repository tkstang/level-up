import React from 'react';
import { Label, Table, Button, Grid, Container, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './edit-challenge-styles.css';

const EditChallengeCompleted = props => (
  <Container className="lvl-table">
    <Table celled selectable color="orange">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center" className="completed-thead">Challenge Edit Successful!</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Challenge</Label>
            {props.editedChallenge.data.name}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Point Value</Label>
            {props.editedChallenge.data.point_value}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Description</Label>
            {props.editedChallenge.data.description}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Requirements</Label>
            {props.editedChallenge.data.requirements_1 ? <List bulleted>
              <List.Item>{props.editedChallenge.data.requirements_1}</List.Item>
              {props.editedChallenge.data.requirements_2 ? <List.Item>{props.editedChallenge.data.requirements_2}</List.Item> : null}
              {props.editedChallenge.data.requirements_3 ? <List.Item>{props.editedChallenge.data.requirements_3}</List.Item> : null}
              {props.editedChallenge.data.requirements_4 ? <List.Item>{props.editedChallenge.data.requirements_4}</List.Item> : null}
              {props.editedChallenge.data.requirements_5 ? <List.Item>{props.editedChallenge.data.requirements_5}</List.Item> : null}
            </List> : 'No requirements!'}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Description</Label>
            {props.editedChallenge.data.description}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <Grid centered>
      <Link to={'/admin/challenges'}>
        <Button basic color="orange" id="completed-btn">Back to Challenges</Button>
      </Link>
    </Grid>
  </Container>
);

export default EditChallengeCompleted;
