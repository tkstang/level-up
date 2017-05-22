import React, { Component } from 'react';
import { Form, Container, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import { allCampuses, setCampuses } from '../../../../actions/admin-signup';
import { addChallenge } from '../../../../actions/add-challenge';
import { renderField, renderTextAreaField, renderSelectField, categories } from '../../admin-common/render-fields';
import { required, number } from '../../admin-common/validations';
import { addRequirement, renderRequirementInputs } from './add-challenge-form-helpers';
import './add-challenge-styles.css';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addChallenge, allCampuses, setCampuses }, dispatch);
}
function mapStateToProps(state, ownProps) {
  return {
    addChallenge: false,
    campuses: state.allCampuses,
  };
}


class AddChallengeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { numberOfRequestInputs: 1,
      maxRequestInputs: false,
    };
  }

  componentWillMount() {
    this.props.allCampuses();
  }

  render() {
    if (this.props.campuses.length === 0) {
      return <div>LOADING</div>;
    }

    const { handleSubmit } = this.props;
    return (
      <Container>
        <Segment inverted>
          <Form onSubmit={handleSubmit(this.props.addChallenge)}>
            <Form.Group>
              <Form.Field width={12}>
                <Field
                  name="name"
                  component={renderField}
                  type="text"
                  label="Name"
                  placeholder="Name"
                  validate={[required]}
                />
              </Form.Field>
              <Form.Field width={4}>
                <Field
                  name="point_value"
                  component={renderField}
                  type="number"
                  label="Point Value"
                  placeholder="Point Value"
                  validate={[required, number]}
                />
              </Form.Field>
            </Form.Group>

            {renderRequirementInputs(this.state.numberOfRequestInputs)}
            <Form.Group>
              <Form.Field width={4}>
                {renderIf(this.state.numberOfRequestInputs < 5 && this.state.maxRequestInputs === false)(
                  <Button basic color="orange" onClick={() => addRequirement()}>Add Requirement</Button>,
                )}
              </Form.Field>
            </Form.Group>

            <Form.Group>
              <Form.Field width={8}>
                <Field
                  name="campus_id"
                  component={renderSelectField}
                  type="text"
                  label="Campus"
                  placeholder="Select Campus"
                  validate={[required]}
                  multiple
                >
                  <option default>Select Campus</option>
                  { this.props.campuses.map(option => <option key={option.id} value={option.id}>{option.location}</option>)}
                </Field>
              </Form.Field>
              <Form.Field width={8}>

                <Field
                  name="category_id"
                  component={renderSelectField}
                  type="text"
                  label="Select Category"
                  placeholder="Select Category"
                  validate={required}
                >
                  <option default>Select Category</option>
                  { categories.map(option => <option key={option.key} value={option.value}>{option.text}</option>)}
                </Field>
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field width={16}>
                <Field
                  name="description"
                  component={renderTextAreaField}
                  type="text"
                  label="Description"
                  placeholder="Describe challenge..."
                  validate={[required]}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Button basic color="orange">Submit</Form.Button>
            </Form.Group>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'addChallenge' })(AddChallengeForm));
