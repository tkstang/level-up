import React from 'react';
import { Message, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './add-admin-cohort-styles.css';

const AdminCohortSuccessMessage = props => (
  <Message className="successAdminCohort" textAlign="center">
    <Message.Header>
      Success!
    </Message.Header>
    <p className="success-message">
      You have successfully added more cohorts to your profile!
    </p>
    <Grid centered>
      <Link to={'/admin/configuration'}>
        <Button basic color="orange">OK</Button>
      </Link>
    </Grid>
  </Message>
);

export default AdminCohortSuccessMessage;
