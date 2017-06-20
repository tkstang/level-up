import React from 'react';
import renderIf from 'render-if';
import { Grid, Container } from 'semantic-ui-react';
import SignupForm from './signup-form-container';
import SignUpMessage from './signup-message';
import './signupview.css';

const AdminSignup = props => (
  <div>
    <Container>
      <Grid centered>
        {renderIf(!props.adminSignup.status)(
          <div className="signup">
            <SignupForm />
            {props.adminSignup.error ? <p className="errorMessage">{props.adminSignup.error}</p> : null}
          </div>,
    )}
        {renderIf(props.adminSignup.status)(
          <div className="signup">
            <SignUpMessage />
          </div>,
    )}
      </Grid>
    </Container>
  </div>
);


export default AdminSignup;
