import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import './reward-submission-style.css';

class RewardTitle extends Component {
  render() {
    return (
      <Form className="reward-title">
        <Form.Field inline>
          <label>Reward Title</label>
          <Input placeholder="Pizza Party" />
        </Form.Field>
      </Form>
    );
  }
}


export default RewardTitle;