import React, { Component } from 'react'
import { animalRegistration, currentPosition } from '../../actions/submitActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TextFieldGroup from '../common/TextFieldGroup';
import RadioFieldGroup from '../common/RadioFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import CheckboxFieldGroup from '../common/CheckboxFieldGroup';

class AnimalRegistration extends Component {
    state = {
        // Centre: 'test',
        // FarmerName: 'test',
        // MobileNo: '1111111111',
        // Village: 'test',
        CowTagNo: 'test',
        Age: '1.5',
        DateOfBirth: "2018-06-05",
        SireID: 'test',
        SireSireID: 'test',
        DamID: 'test',
        Gender: 'Female',
        Species: 'Cattle',
        Breed: [],
        BloodLevel: 'test',
        ReceiptNumber: 'test',
        RegistrationCharges: 'test',
        // SurveyPickYield: '3',
        // MDPH: 'test',
        // LactationNo: 'test',
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

    async onChange(e) {
        if (e.target.type === 'checkbox') {
            console.log("target name", e.target.name)
            console.log("target value", e.target.value)
            const k = e.target.value;
            const j = e.target.name;
            const i = this.state[e.target.name].indexOf(e.target.value)
            console.log("i", i)
            if (i > -1) {
                this.setState(prevState => {

                    const newObj = {
                        ...prevState,
                        [j]: prevState[j].splice(i, 1)
                    };
                    console.log("new Obj", newObj);
                    return { ...prevState };

                });
            } else {
                await this.setState(prevState => {
                    console.log("target name", j)
                    console.log("target value", k)
                    console.log(prevState)
                    const newObj = {
                        ...prevState,
                        [j]: prevState[j].splice(0, 0, k)
                    }
                    console.log("new obj", prevState);
                    return { ...prevState }
                })
                console.log("new state", this.state)
            }
        }
        else if (e.target.name === 'Species') {
            await this.setState({
                [e.target.name]: e.target.value,
                Breed: []
            });
        }
        else {
            this.setState({ [e.target.name]: e.target.value });
        }

    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            ...this.state,
        };
        this.props.animalRegistration(userData, this.props.history);

        // const data = {
        //     user: this.props.auth.user.id,
        //     AnimalRegistration: this.props.submit.animalRegistrationData === null ? null : this.props.submit.animalRegistrationData._id,
        //     AnimalInsemination: this.props.submit.animalInseminationData === null ? null : this.props.submit.animalInseminationData._id,
        //     CalfRegister: this.props.submit.calfRegisterData === null ? null : this.props.submit.calfRegisterData._id,
        //     CalvingRegister: this.props.submit.calvingRegisterData === null ? null : this.props.submit.calvingRegisterData._id,
        //     MilkRecordingRegister: this.props.submit.milkRecordingRegisterData === null ? null : this.props.submit.milkRecordingRegisterData._id,
        // }
        // this.props.currentPosition(data);
        // console.log(data)
    }

    render() {
        const { errors } = this.state;
        console.log("state on rerender", this.state);

        const optionGender = [
            { label: "Female", value: "Female", checked: this.state.Gender === "Female" },
            { label: "Male", value: "Male", checked: this.state.Gender === "Male" }
        ];
        const optionSpecies = [
            { label: "Cattle", value: "Cattle", checked: this.state.Species === "Cattle" },
            { label: "Buffalo", value: "Buffalo", checked: this.state.Species === "Buffalo" }
        ];
        const optionBreedCattle = [
            { label: "Jersey", value: "Jersey", checked: this.state.Breed.indexOf("Jersey") > -1 },
            { label: "Dangi", value: "Dangi", checked: this.state.Breed.indexOf("Dangi") > -1 },
            { label: "Bargur", value: "Bargur", checked: this.state.Breed.indexOf("Bargur") > -1 },
            { label: "HF", value: "HF", checked: this.state.Breed.indexOf("HF") > -1 },
            { label: "Amritmahal", value: "Amritmahal", checked: this.state.Breed.indexOf("Amritmahal") > -1 },
            { label: "Bachur", value: "Bachur", checked: this.state.Breed.indexOf("Bachur") > -1 },
            { label: "Deoni", value: "Deoni", checked: this.state.Breed.indexOf("Deoni") > -1 },
            { label: "Gaolao", value: "Gaolao", checked: this.state.Breed.indexOf("Gaolao") > -1 },
            { label: "Hallikar", value: "Hallikar", checked: this.state.Breed.indexOf("Hallikar") > -1 },
            { label: "Gir", value: "Gir", checked: this.state.Breed.indexOf("Gir") > -1 }
        ];

        const optionBreedBuffalo = [
            { label: "Bhadwan", value: "Bhadwan", checked: this.state.Breed.indexOf("Bhadwan") > -1 },
            { label: "Jaffarabadi", value: "Jaffarabadi", checked: this.state.Breed.indexOf("Jaffarabadi") > -1 },
            { label: "Marathawada", value: "Marathawada", checked: this.state.Breed.indexOf("Marathawada") > -1 },
            { label: "Mehsana", value: "Mehsana", checked: this.state.Breed.indexOf("Mehsana") > -1 },
            { label: "Murrah", value: "Murrah", checked: this.state.Breed.indexOf("Murrah") > -1 },
            { label: "Nagpuri", value: "Nagpuri", checked: this.state.Breed.indexOf("Nagpuri") > -1 },
            { label: "Nili-Ravi", value: "Nili-Ravi", checked: this.state.Breed.indexOf("Nili-Ravi") > -1 },
            { label: "Pandharpuri", value: "Pandharpuri", checked: this.state.Breed.indexOf("Pandharpuri") > -1 },
            { label: "Surti", value: "Surti", checked: this.state.Breed.indexOf("Surti") > -1 },
            { label: "Toda", value: "Toda", checked: this.state.Breed.indexOf("Toda") > -1 }
        ];

        return (
            <div className="AnimalRegistration">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Animal Registration Form</h1>
                            <p className="lead text-center">1st Form</p>
                            <div className="card">
                                <form onSubmit={e => this.onSubmit(e)}>
                                    {/* <TextFieldGroup
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
                                    /> */}
                                    {/* {JSON.stringify(errors).length !== 2 && (<div class="alert alert-danger" role="alert">
                                        {JSON.stringify(errors)}
                                    </div>)} */}
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
                                    <RadioFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Gender"
                                        label="Gender (લિંગ) :"
                                        name="Gender"
                                        type="text"
                                        value={this.state.Gender}
                                        onChange={e => this.onChange(e)}
                                        options={optionGender}
                                        error={errors.Gender}
                                    />
                                    <RadioFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Species"
                                        label="Species (પ્રજાતિ) :"
                                        name="Species"
                                        type="text"
                                        value={this.state.Species}
                                        options={optionSpecies}
                                        onChange={e => this.onChange(e)}
                                        error={errors.Species}
                                    />
                                    {this.state.Species === "Cattle" ? (
                                        <CheckboxFieldGroup
                                            disabled={this.props.submit.disableAnimalRegistration}
                                            placeholder="Breed"
                                            label="Breed (જાતિ) :"
                                            name="Breed"
                                            type="text"
                                            value={this.state.Breed}
                                            onChange={e => this.onChange(e)}
                                            options={optionBreedCattle}
                                            error={errors.Breed}
                                        />
                                    ) : (
                                            <CheckboxFieldGroup
                                                disabled={this.props.submit.disableAnimalRegistration}
                                                placeholder="Breed"
                                                label="Breed (જાતિ) :"
                                                name="Breed"
                                                type="text"
                                                value={this.state.Breed}
                                                onChange={e => this.onChange(e)}
                                                options={optionBreedBuffalo}
                                                error={errors.Breed}
                                            />
                                        )}

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

                                    {/* <TextFieldGroup
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
                                    /> */}
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Blood Level"
                                        label="Blood Level :"
                                        name="BloodLevel"
                                        type="text"
                                        value={this.state.BloodLevel}
                                        onChange={e => this.onChange(e)}
                                        error={errors.BloodLevel}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Registration Charges"
                                        label="Registration Charges:"
                                        name="RegistrationCharges"
                                        type="text"
                                        value={this.state.RegistrationCharges}
                                        onChange={e => this.onChange(e)}
                                        error={errors.RegistrationCharges}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Receipt Number"
                                        label="Receipt Number:"
                                        name="ReceiptNumber"
                                        type="text"
                                        value={this.state.ReceiptNumber}
                                        onChange={e => this.onChange(e)}
                                        error={errors.ReceiptNumber}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Sire ID"
                                        label="Sire ID (ગાયના પિતાનુ આઈ. ડી.) :"
                                        name="SireID"
                                        type="text"
                                        value={this.state.SireID}
                                        onChange={e => this.onChange(e)}
                                        error={errors.SireID}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Sire's Sire ID"
                                        label="Sire's Sire ID (ગાયના પિતાના પિતાનુ આઈ. ડી.) :"
                                        name="SireSireID"
                                        type="text"
                                        value={this.state.SireSireID}
                                        onChange={e => this.onChange(e)}
                                        error={errors.SireSireID}
                                    />
                                    <TextFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Dam"
                                        label="Dam ID (ગાયના માતાનુ આઈ. ડી.) :"
                                        name="DamID"
                                        type="text"
                                        value={this.state.DamID}
                                        onChange={e => this.onChange(e)}
                                        error={errors.DamID}
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