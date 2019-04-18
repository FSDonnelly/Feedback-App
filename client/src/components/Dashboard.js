import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
    return (
        <div>
            <SurveyList />
            <div className="fixed-action-btn container">
                <Link className="btn-floating btn-large red" to="/surveys/new">
                    <i className="large material-icons">create</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;