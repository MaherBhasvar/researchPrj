import React, { Component } from 'react'
import { calfRegister, currentPosition } from '../../actions/submitActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup'

class CalfRegister extends Component {
    state = {
        email: '',
        password: '',
        errors: {},
    };

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
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
        this.props.calfRegister(userData, this.props.history);

        const data = {
            user: this.props.auth.user.id,
            AnimalRegistration: this.props.submit.animalRegistrationData === null ? null : this.props.submit.animalRegistrationData._id,
            AnimalInsemination: this.props.submit.animalInseminationData === null ? null : this.props.submit.animalInseminationData._id,
            CalfRegister: this.props.submit.calfRegisterData === null ? null : this.props.submit.calfRegisterData._id,
            CalvingRegister: this.props.submit.calvingRegisterData === null ? null : this.props.submit.calvingRegisterData._id,
            MilkRecordingRegister: this.props.submit.milkRecordingRegisterData === null ? null : this.props.submit.milkRecordingRegisterData._id,
        }
        this.props.currentPosition(data);
        console.log(data)
    }

    render() {
        const { errors } = this.props;
        return (
            <div className="CalfRegister">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Calf Register Form</h1>
                            <p className="lead text-center">5th Form</p>
                            <div className="card">
                                <form onSubmit={e => this.onSubmit(e)}>
                                    <input type="submit" className="btn btn-info btn-block mt-4" disabled={this.props.submit.disableCalfRegister} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CalfRegister.propTypes = {
    calfRegister: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    submit: state.submit
});

export default connect(mapStateToProps, { calfRegister, currentPosition })(CalfRegister);