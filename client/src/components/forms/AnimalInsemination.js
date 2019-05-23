import React, { Component } from 'react'
import { animalInsemination, currentPosition } from '../../actions/submitActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';

class AnimalInsemination extends Component {
    state = {
        DateOfAI: '2018-06-05',
        BullNo: 'test',
        NumberOfAIService: 'test',
        DateOfPD: '2018-06-05',
        PD: '23',
        ExpectedCalvingDate: '2018-06-05',
        errors: {}
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
        this.props.animalInsemination(userData, this.props.history);

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
            <div className="AnimalInsemination">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Animal Insemination Form</h1>
                            <p className="lead text-center">2nd Form</p>
                            <div className="card">
                                <form onSubmit={e => this.onSubmit(e)}>
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalInsemination}
                                        label="Date Of AI:"
                                        placeholder="Date Of AI"
                                        name="DateOfAI"
                                        type="date"
                                        value={this.state.DateOfAI}
                                        onChange={e => this.onChange(e)}
                                        error={errors.DateOfAI}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalInsemination}
                                        label="Bull No:"
                                        placeholder="Bull No"
                                        name="BullNo"
                                        type="text"
                                        value={this.state.BullNo}
                                        onChange={e => this.onChange(e)}
                                        error={errors.BullNo}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalInsemination}
                                        label="Number of AI/Service:"
                                        placeholder="Number of AI/Service"
                                        name="NumberOfAIService"
                                        type="text"
                                        value={this.state.NumberOfAIService}
                                        onChange={e => this.onChange(e)}
                                        error={errors.NumberOfAIService}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalInsemination}
                                        label="Date Of PD:"
                                        placeholder="Date Of PD"
                                        name="DateOfPD"
                                        type="date"
                                        value={this.state.DateOfPD}
                                        onChange={e => this.onChange(e)}
                                        error={errors.DateOfPD}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalInsemination}
                                        label="PD:"
                                        placeholder="PD"
                                        name="PD"
                                        type="text"
                                        value={this.state.PD}
                                        onChange={e => this.onChange(e)}
                                        error={errors.PD}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalInsemination}
                                        label="Expected Calving Date:"
                                        placeholder="Expected Calving Date"
                                        name="ExpectedCalvingDate"
                                        type="date"
                                        value={this.state.ExpectedCalvingDate}
                                        onChange={e => this.onChange(e)}
                                        error={errors.ExpectedCalvingDate}
                                    />
                                    <input type="submit" className="btn btn-info btn-block mt-4" disabled={this.props.submit.disableAnimalInsemination} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

AnimalInsemination.propTypes = {
    currentPosition: PropTypes.func.isRequired,
    animalInsemination: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    submit: state.submit
});

export default connect(mapStateToProps, { animalInsemination, currentPosition, })(AnimalInsemination);