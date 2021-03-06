import React from 'react';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import AddChallengeForm from './add-challenge-container';
import AddChallengeCompleted from './added-challenge-container';

const mapStateToProps = state => ({
  addStatus: state.addedChallenge,
});

const AddChallenge = (props) => {
  const ifAdded = renderIf(props.addStatus.fulfilled);
  const ifNotAdded = renderIf(!props.addStatus.fulfilled);
  return (
    <div className="form-view">
      {ifNotAdded(<AddChallengeForm />)}
      {ifAdded(<AddChallengeCompleted />)}
    </div>
  );
};

export default connect(mapStateToProps)(AddChallenge);
