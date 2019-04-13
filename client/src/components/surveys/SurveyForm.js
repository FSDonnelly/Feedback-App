import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

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
                    <button type="submit" className="teal btn-flat right white-text">Submit <i className="material-icons right">done</i></button>
                    <button type="" className="teal btn-flat left white-text">Cancel<i className="material-icons left">cancel</i></button>
                </form>
            </div>
        );
    };
};

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);