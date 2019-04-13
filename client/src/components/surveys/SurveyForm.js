import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subject Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({ label, name }) => {
            return (
                <Field
                    key={name}
                    component={SurveyField}
                    type="text"
                    label={label}
                    name={name}
                />
            );
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <button type="submit" className="teal btn-flat right white-text">Next <i className="material-icons right">navigate_next</i></button>
                    <Link to="/surveys" className="red btn-flat left white-text">Cancel<i className="material-icons left">cancel</i></Link>
                </form>
            </div>
        );
    };
};

function validate(values) {
    const errors = {};

    errors.emails = validateEmails(values.emails || '');

    _.each(FIELDS, ({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide ${name}.`
        };
    });

    return errors;
};

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);