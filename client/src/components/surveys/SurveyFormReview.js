import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import { submitSurvey } from '../../actions/index';

const mapState = state => ({
  formValues: state.form.surveyForm.values
})

const actions = {
  submitSurvey
}

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history}) => {

  const reviewFields = _.map(formFields, ({label, name}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  })

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button 
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat right white-text"
        >
        Submit Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  )
}

export default connect(mapState, actions)(withRouter(SurveyFormReview));

