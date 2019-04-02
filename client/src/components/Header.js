import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'Still waiting'
            case false:
                return 'Logged Out'
            default:
                return 'Logged In'
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">Feedback App</a>
                    <ul id="nav-mobile" className="right">
                       { this.renderContent() }
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
};

export default connect(mapStateToProps)(Header);