import React, { Component } from 'react'
import { milkRecordingRegister, currentPosition } from '../../actions/submitActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';

class MilkRecordingRegister extends Component {
    state = {
        TotalLactationMilkYield: '12',
        DOD: 'test',
        MilkingDays: '12',
        GL: 'test',
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
        this.props.milkRecordingRegister(userData, this.props.history);

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
            <div className="MilkRecordingRegister">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Milk Recording Register Form</h1>
                            <p className="lead text-center">4th Form</p>
                            <div className="card">
                                <form onSubmit={e => this.onSubmit(e)}>
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableMilkRecordingRegister}
                                        label="Total Lactation Milk Yield:"
                                        placeholder="Total Lactation Milk Yield"
                                        name="TotalLactationMilkYield"
                                        type="text"
                                        value={this.state.TotalLactationMilkYield}
                                        onChange={e => this.onChange(e)}
                                        error={errors.TotalLactationMilkYield}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableMilkRecordingRegister}
                                        label="DOD:"
                                        placeholder="DOD"
                                        name="DOD"
                                        type="text"
                                        value={this.state.DOD}
                                        onChange={e => this.onChange(e)}
                                        error={errors.DOD}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableMilkRecordingRegister}
                                        label="Milking Days:"
                                        placeholder="Milking Days"
                                        name="MilkingDays"
                                        type="text"
                                        value={this.state.MilkingDays}
                                        onChange={e => this.onChange(e)}
                                        error={errors.MilkingDays}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableMilkRecordingRegister}
                                        label="GL:"
                                        placeholder="GL"
                                        name="GL"
                                        type="text"
                                        value={this.state.GL}
                                        onChange={e => this.onChange(e)}
                                        error={errors.GL}
                                    />
                                    <input type="submit" className="btn btn-info btn-block mt-4" disabled={this.props.submit.disableMilkRecordingRegister} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

MilkRecordingRegister.propTypes = {
    milkRecordingRegister: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    submit: state.submit,
});

export default connect(mapStateToProps, { milkRecordingRegister, currentPosition })(MilkRecordingRegister);