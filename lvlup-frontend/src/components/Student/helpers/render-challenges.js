import React from 'react';
import { Table, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const renderChallenges = props => props.challenges.challenges.filter(challenges => challenges.active === 'Active').map(item => (
  <Table.Row key={`${item.id}challenges-table-student`}>
    <Table.Cell>{item.name}</Table.Cell>
    <Table.Cell>{item.category.category}</Table.Cell>
    <Table.Cell>{item.description}</Table.Cell>
    <Table.Cell>
      {item.requirements_1 ? <List bulleted>
        <List.Item>{item.requirements_1}</List.Item>
        {item.requirements_2 ? <List.Item>{item.requirements_2}</List.Item> : null}
        {item.requirements_3 ? <List.Item>{item.requirements_3}</List.Item> : null}
        {item.requirements_4 ? <List.Item>{item.requirements_4}</List.Item> : null}
        {item.requirements_5 ? <List.Item>{item.requirements_5}</List.Item> : null}
      </List> : 'No requirements!'}
    </Table.Cell>
    <Table.Cell textAlign="center">{item.point_value}</Table.Cell>
    <Table.Cell className="lvl-link" textAlign="center" onClick={() => props.selectChallenge(item)}><Link to={`/student/challenge-submission/${item.id}`}>lvl^</Link></Table.Cell>
  </Table.Row>
    ));

export default renderChallenges;
