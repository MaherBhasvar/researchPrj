import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {logoutUser} from '../../actions/authActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'


class Navbar extends Component {
    render () {

        let showbutton;
        console.log(this.props.auth.isAuthenticated)
        if(this.props.auth.isAuthenticated) {
            showbutton = (
                <div>
                    <button type="button" className="btn btn-danger" onClick={e => {e.preventDefault(); this.props.logoutUser();}}>
                        Logout
                    </button>
                </div>
            );
        } else {
            showbutton = (
                <div>
                    <button type="button" className="btn btn-outline-primary" onClick={e => {e.preventDefault();}}>
                        <Link to='/'>Log In</Link>
                    </button>
                </div>
            )
        }

        return (
            <div className="Navbar">
                <nav className="navbar sticky-top navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                Research Survey
                </Link>
                {showbutton}

                </nav>
            </div>
        );
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps, { logoutUser, })(
    Navbar
  );
  