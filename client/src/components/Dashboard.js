import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <div className="fixed-action-btn">
                <Link className="btn-floating btn-large red" to="/surveys/new">
                    <i className="large material-icons">create</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;