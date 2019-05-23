import React, { Component } from 'react'
import { calvingRegister, currentPosition } from '../../actions/submitActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';

class CalvingRegister extends Component {
    state = {
        DateOfCalving: '2018-06-05',
        EaseOfCalving: 'test',
        TypeOfCalving: 'test',
        CalfSex: 'M',
        CongDefect: 'test',
        CalfTagNo: '12dsqw',
        Remarks: '',
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
        this.props.calvingRegister(userData, this.props.history);

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
        const { errors } = this.state;
        return (
            <div className="CalvingRegister">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Calving Register Form</h1>
                            <p className="lead text-center">3rd Form</p>
                            <div className="card">
                                <form onSubmit={e => this.onSubmit(e)}>
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableCalvingRegister}
                                        label="Date Of Calving:"
                                        placeholder="Date Of Calving"
                                        name="DateOfCalving"
                                        type="date"
                                        value={this.state.DateOfCalving}
                                        onChange={e => this.onChange(e)}
                                        error={errors.DateOfCalving}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableCalvingRegister}
                                        label="Ease of Calving:"
                                        placeholder="Ease of Calving"
                                        name="EaseOfCalving"
                                        type="text"
                                        value={this.state.EaseOfCalving}
                                        onChange={e => this.onChange(e)}
                                        error={errors.EaseOfCalving}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableCalvingRegister}
                                        label="Type of Calving:"
                                        placeholder="Type of Calving"
                                        name="TypeOfCalving"
                                        type="text"
                                        value={this.state.TypeOfCalving}
                                        onChange={e => this.onChange(e)}
                                        error={errors.TypeOfCalving}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableCalvingRegister}
                                        label="Calf Sex:"
                                        placeholder="Calf Sex"
                                        name="CalfSex"
                                        type="date"
                                        value={this.state.CalfSex}
                                        onChange={e => this.onChange(e)}
                                        error={errors.CalfSex}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableCalvingRegister}
                                        label="PD:"
                                        placeholder="PD"
                                        name="CongDefect"
                                        type="text"
                                        value={this.state.CongDefect}
                                        onChange={e => this.onChange(e)}
                                        error={errors.CongDefect}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableCalvingRegister}
                                        label="Calf Tag No:"
                                        placeholder="Calf Tag No"
                                        name="CalfTagNo"
                                        type="text"
                                        value={this.state.CalfTagNo}
                                        onChange={e => this.onChange(e)}
                                        error={errors.CalfTagNo}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableCalvingRegister}
                                        label="Remarks:"
                                        placeholder="Remarks"
                                        name="Remarks"
                                        type="text"
                                        value={this.state.Remarks}
                                        onChange={e => this.onChange(e)}
                                        error={errors.Remarks}
                                    />
                                    <input type="submit" className="btn btn-info btn-block mt-4" disabled={this.props.submit.disableCalvingRegister} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

CalvingRegister.propTypes = {
    calvingRegister: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    submit: state.submit,
});

export default connect(mapStateToProps, { calvingRegister, currentPosition })(CalvingRegister);