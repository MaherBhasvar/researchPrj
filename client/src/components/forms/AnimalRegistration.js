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
        optionBreed: true,
        optionBreedName: 'test',
        // SurveyPickYield: '3',
        // MDPH: 'test',
        // LactationNo: 'test',
        optionGender: [
            { label: "Female", value: "Female", checked: true },
            { label: "Male", value: "Male", checked: false }
        ],
        optionSpecies: [
            { label: "Cattle", value: "Cattle", checked: true },
            { label: "Buffalo", value: "Buffalo", checked: false }
        ],
        optionBreedCattle: [
            { label: "Jersey", value: "Jersey", checked: false },
            { label: "Dangi", value: "Dangi", checked: false },
            { label: "Bargur", value: "Bargur", checked: false },
            { label: "HF", value: "HF", checked: false },
            { label: "Amritmahal", value: "Amritmahal", checked: false },
            { label: "Bachur", value: "Bachur", checked: false },
            { label: "Deoni", value: "Deoni", checked: false },
            { label: "Gaolao", value: "Gaolao", checked: false },
            { label: "Hallikar", value: "Hallikar", checked: false },
            { label: "Gir", value: "Gir", checked: false }
        ],
        optionBreedBuffalo: [
            { label: "Bhadwan", value: "Bhadwan", checked: false },
            { label: "Jaffarabadi", value: "Jaffarabadi", checked: false },
            { label: "Marathawada", value: "Marathawada", checked: false },
            { label: "Mehsana", value: "Mehsana", checked: false },
            { label: "Murrah", value: "Murrah", checked: false },
            { label: "Nagpuri", value: "Nagpuri", checked: false },
            { label: "Nili-Ravi", value: "Nili-Ravi", checked: false },
            { label: "Pandharpuri", value: "Pandharpuri", checked: false },
            { label: "Surti", value: "Surti", checked: false },
            { label: "Toda", value: "Toda", checked: false }
        ],
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
    //add or remove custom Breed
    async addCustomBreed(e) {
        e.preventDefault();
        const optionBreedName = prompt('Add Custom Breed')

        //optionBreed has to be true hence to allow adding custom breed
        if (optionBreedName && this.state.optionBreed) {
            await this.setState({ optionBreedName: optionBreedName.toString() })
            await this.setState({ optionBreed: false })
            await this.setState(prevState => {
                if (this.state.Species === 'Cattle') {
                    const newObj = {
                        label: optionBreedName,
                        value: optionBreedName,
                        checked: true,
                    }
                    const newObj2 = {
                        Breed: prevState.Breed.splice(0, 0, optionBreedName),
                        optionBreedCattle: prevState.optionBreedCattle.splice(0, 0, newObj)
                    }
                    return {
                        ...prevState,
                    }
                } else {
                    const newObj = {
                        label: optionBreedName,
                        value: optionBreedName,
                        checked: true,
                    }
                    const newObj2 = {
                        Breed: prevState.Breed.splice(0, 0, optionBreedName),
                        optionBreedBuffalo: prevState.optionBreedBuffalo.splice(0, 0, newObj)
                    }
                    return {
                        ...prevState,
                    }
                }
            })
            console.log(typeof this.state.optionBreedName)
            console.log(this.state)
        }
    };

    //onChange Event handlers
    async onChange(e) {
        if (e.target.type === 'checkbox') {
            console.log("target name", e.target.name)
            console.log("target value", e.target.value)
            const k = e.target.value;
            const j = e.target.name;
            const i = this.state[e.target.name].indexOf(e.target.value)
            console.log("i", i)

            //if Breed is already checked
            if (i > -1) {
                this.setState(prevState => {

                    const newObj = {
                        ...prevState,
                        [j]: prevState[j].splice(i, 1)
                    };
                    console.log("new Obj", newObj);
                    if (this.state.Species === 'Cattle') {
                        return {
                            ...prevState,
                            optionBreedCattle: prevState.optionBreedCattle.map(eachElement => {
                                if (eachElement.label === k) {
                                    eachElement.checked = false;
                                }
                                return eachElement
                            }
                            )
                        };
                    } else {
                        return {
                            ...prevState,
                            optionBreedBuffalo: prevState.optionBreedBuffalo.map(eachElement => {
                                if (eachElement.label === k) {
                                    eachElement.checked = false;
                                }
                                return eachElement
                            }
                            )
                        };
                    }


                });
            }
            //Breed is unchecked
            else {
                await this.setState(prevState => {
                    console.log("target name", j)
                    console.log("target value", k)
                    console.log(prevState)
                    const newObj = {
                        ...prevState,
                        [j]: prevState[j].splice(0, 0, k)
                    }
                    console.log("new obj", prevState);
                    if (this.state.Species === 'Cattle') {
                        return {
                            ...prevState,
                            optionBreedCattle: prevState.optionBreedCattle.map(eachElement => {
                                if (eachElement.label === k) {
                                    eachElement.checked = true;
                                }
                                return eachElement
                            }
                            )
                        };
                    } else {
                        return {
                            ...prevState,
                            optionBreedBuffalo: prevState.optionBreedBuffalo.map(eachElement => {
                                if (eachElement.label === k) {
                                    eachElement.checked = true;
                                }
                                return eachElement
                            }
                            )
                        };
                    }
                })
                console.log("new state", this.state)
            }
        }
        // Species Radio Button
        else if (e.target.name === 'Species') {
            const k = e.target.value;
            const j = e.target.name;
            const i = this.state[e.target.name].indexOf(e.target.value)
            await this.setState(prevstate => {
                return {
                    ...prevstate,
                    [j]: k,
                    optionSpecies: prevstate.optionSpecies.map(eachElement => {
                        if (eachElement.label === k) {
                            eachElement.checked = true;
                        } else {
                            eachElement.checked = false;
                        }
                        return eachElement
                    }),
                    Breed: [],
                    optionBreed: true,
                    optionBreedName: ''
                }
            });
        }
        //Gender Radio Button
        else if (e.target.name === 'Gender') {
            const k = e.target.value;
            const j = e.target.name;
            const i = this.state[e.target.name].indexOf(e.target.value)
            await this.setState(prevstate => {
                return {
                    ...prevstate,
                    [j]: k,
                    optionGender: prevstate.optionGender.map(eachElement => {
                        if (eachElement.label === k) {
                            eachElement.checked = true;
                        } else {
                            eachElement.checked = false;
                        }
                        return eachElement
                    }),

                }
            });
        }
        else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            CowTagNo: this.state.CowTagNo,
            Age: this.state.Age,
            DateOfBirth: this.state.DateOfBirth,
            SireID: this.state.SireID,
            SireSireID: this.state.SireSireID,
            DamID: this.state.DamID,
            Gender: this.state.Gender,
            Species: this.state.Species,
            Breed: this.state.Breed.toString(),
            BloodLevel: this.state.BloodLevel,
            ReceiptNumber: this.state.ReceiptNumber,
            RegistrationCharges: this.state.RegistrationCharges,
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

        const optionGender = this.state.optionGender
        const optionSpecies = this.state.optionSpecies
        const optionBreedCattle = this.state.optionBreedCattle

        const optionBreedBuffalo = this.state.optionBreedBuffalo

        return (
            <div className="AnimalRegistration">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h3 className="display-6 text-center">Animal Registration Form</h3>
                            <p className="lead text-center">1st Form</p>
                            <div className="card">
                                <form >
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
                                        options={this.state.optionGender}
                                        error={errors.Gender}
                                    />
                                    <RadioFieldGroup
                                        disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Species"
                                        label="Species (પ્રજાતિ) :"
                                        name="Species"
                                        type="text"
                                        value={this.state.Species}
                                        options={this.state.optionSpecies}
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
                                            options={this.state.optionBreedCattle}
                                            optionBreed={!this.state.optionBreed}
                                            addCustomBreed={e => this.addCustomBreed(e)}
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
                                                options={this.state.optionBreedBuffalo}
                                                optionBreed={!this.state.optionBreed}
                                                addCustomBreed={e => this.addCustomBreed(e)}
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
                                    {errors.CowTagNo && (<div className="alert alert-danger" role="alert">
                                        {errors.CowTagNo}
                                    </div>)}
                                    {errors.Gender && (<div className="alert alert-danger" role="alert">
                                        {errors.Gender}
                                    </div>)}
                                    {errors.Species && (<div className="alert alert-danger" role="alert">
                                        {errors.Species}
                                    </div>)}

                                    {errors.Breed && (<div className="alert alert-danger" role="alert">
                                        {errors.Breed}
                                    </div>)}
                                    {errors.SireID && (<div className="alert alert-danger" role="alert">
                                        {errors.SireID}
                                    </div>)}
                                    {errors.SireSireID && (<div className="alert alert-danger" role="alert">
                                        {errors.SireSireID}
                                    </div>)}
                                    {errors.DamID && (<div className="alert alert-danger" role="alert">
                                        {errors.DamID}
                                    </div>)}
                                    {errors.SireID && (<div className="alert alert-danger" role="alert">
                                        {errors.SireID}
                                    </div>)}

                                    {errors.Age && (<div className="alert alert-danger" role="alert">
                                        {errors.Age}
                                    </div>)}
                                    {errors.DateOfBirth && (<div className="alert alert-danger" role="alert">
                                        {errors.DateOfBirth}
                                    </div>)}
                                    {errors.BloodLevel && (<div className="alert alert-danger" role="alert">
                                        {errors.BloodLevel}
                                    </div>)}
                                    {errors.RegistrationCharges && (<div className="alert alert-danger" role="alert">
                                        {errors.RegistrationCharges}
                                    </div>)}
                                    {errors.ReceiptNumber && (<div className="alert alert-danger" role="alert">
                                        {errors.ReceiptNumber}
                                    </div>)}
                                    <input type="submit" className="btn btn-info btn-block mt-4" disabled={this.props.submit.disableAnimalRegistration} onClick={e => this.onSubmit(e)} />

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