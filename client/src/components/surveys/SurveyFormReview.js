import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your survey enties</h5>
            {reviewFields}
            <button className="red darken-3 btn-flat white-text" onClick={onCancel} >
                Back
            <i className="material-icons left">backspace</i>
            </button>
            <button onClick={() => submitSurvey(formValues)} className="teal btn-flat right white-text">Send Survey <i className="material-icons right">email</i></button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, actions)(SurveyReview);