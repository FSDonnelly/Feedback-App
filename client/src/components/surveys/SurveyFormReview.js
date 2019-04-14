import React from 'react';
import { connect } from 'react-redux';

const SurveyReview = ({ onCancel }) => {
    return (
        <div>
            <h5>Please confirm your survey enties</h5>
            <button className="yellow darken-3 btn-flat" onClick={onCancel} >
                Back
            <i className="material-icons left">backspace</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    console.log(state);
    return {

    };
};

export default connect(mapStateToProps)(SurveyReview);