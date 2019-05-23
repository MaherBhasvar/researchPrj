import React, { Component } from 'react'
import { animalRegistration, currentPosition } from '../../actions/submitActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TextFieldGroup from '../common/TextFieldGroup';

class AnimalRegistration extends Component {
    state = {
        Centre: 'test',
        FarmerName: 'test',
        MobileNo: '1111111111',
        Village: 'test',
        CowTagNo: 'test',
        Age: '1.5',
        DateOfBirth: "2018-06-05",
        Sire: 'test',
        Dam: 'test',
        SurveyPickYield: '3',
        MDPH: 'test',
        LactationNo: 'test',
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
        this.props.animalRegistration(userData, this.props.history);

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
            <div className="AnimalRegistration">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Animal Registration Form</h1>
                            <p className="lead text-center">1st Form</p>
                            <div className="card">
                                <form onSubmit={e => this.onSubmit(e)}>
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        label="Centre Name (કેન્દ્રનુ નામ) :"
                                        placeholder=""
                                        name="Centre"
                                        type="text"
                                        value={this.state.Centre}
                                        onChange={e => this.onChange(e)}
                                        error={errors.Centre}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder=""
                                        label="Farmer's Name (ખેડુતનુ નામ) : "
                                        name="FarmerName"
                                        type="text"
                                        value={this.state.FarmerName}
                                        onChange={e => this.onChange(e)}
                                        error={errors.FarmerName}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder=""
                                        label="Mobile No (મોબાઈલ નંબર) :"
                                        name="MobileNo"
                                        type="number"
                                        value={this.state.MobileNo}
                                        onChange={e => this.onChange(e)}
                                        error={errors.MobileNo}

                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder=""
                                        label="Village Name (ગામનુ નામ) :"
                                        name="Village"
                                        type="text"
                                        value={this.state.Village}
                                        onChange={e => this.onChange(e)}
                                        error={errors.Village}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Cow Tag No"
                                        label="Cow Tag Number (ગાયનો ટેગ નંબર) :"
                                        name="CowTagNo"
                                        type="text"
                                        value={this.state.CowTagNo}
                                        onChange={e => this.onChange(e)}
                                        error={errors.CowTagNo}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Age of Cow"
                                        label="Age (in Year) (ઉમર (વર્ષમા)) : "
                                        name="Age"
                                        type="Number"
                                        value={this.state.Age}
                                        onChange={e => this.onChange(e)}
                                        error={errors.Age}
                                        step="0.01"
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Date Of Birth of Cow"
                                        label="Date of Birth (જન્મ તારીક) : "
                                        name="DateOfBirth"
                                        type="date"
                                        value={this.state.DateOfBirth}
                                        onChange={e => this.onChange(e)}
                                        error={errors.DateOfBirth}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Sire"
                                        label="Sire (ગાયના પિતા) :"
                                        name="Sire"
                                        type="text"
                                        value={this.state.Sire}
                                        onChange={e => this.onChange(e)}
                                        error={errors.Sire}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Dam"
                                        label="Dam (ગાયના માતા) :"
                                        name="Dam"
                                        type="text"
                                        value={this.state.Dam}
                                        onChange={e => this.onChange(e)}
                                        error={errors.Dam}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="SurveyPickYield"
                                        label="Survey Pick Yield (in Lit./day):"
                                        name="SurveyPickYield"
                                        type="number"
                                        value={this.state.SurveyPickYield}
                                        onChange={e => this.onChange(e)}
                                        error={errors.SurveyPickYield}
                                        step="0.01"
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="MDPH"
                                        label="Milk/Day/Preg. Heif."
                                        name="MDPH"
                                        type="text"
                                        value={this.state.MDPH}
                                        onChange={e => this.onChange(e)}
                                        error={errors.MDPH}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Lactation Number"
                                        label="Lactation Number:"
                                        name="LactationNo"
                                        type="text"
                                        value={this.state.LactationNo}
                                        onChange={e => this.onChange(e)}
                                        error={errors.LactationNo}
                                    />
                                    <input type="submit" className="btn btn-info btn-block mt-4" disabled={this.props.submit.disableAnimalRegistration} />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AnimalRegistration.propTypes = {
    animalRegistration: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    submit: state.submit,
    errors: state.errors,
});

export default connect(mapStateToProps, { animalRegistration, currentPosition })(withRouter(AnimalRegistration));