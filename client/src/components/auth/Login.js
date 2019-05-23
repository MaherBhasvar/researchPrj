import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
//import classnames from 'classnames';
import TextFieldGroup from '../common/TextFieldGroup';


class Login extends Component {

  state = {
    email: 'admin@admin.com',
    password: 'admin',
    errors: {},
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/start')
    }
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/start');
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      ...this.state,
    };
    this.props.loginUser(userData);

  }
  render() {
    const { errors } = this.state;

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your account</p>
              <form onSubmit={e => this.onSubmit(e)}>
                <TextFieldGroup
                  label="Email Id:"
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={e => this.onChange(e)}
                  error={errors.email}
                />
                <TextFieldGroup
                  label="Password:"
                  placeholder="passwodrd"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={e => this.onChange(e)}
                  error={errors.password}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  submit: state.submit,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser, })(Login);