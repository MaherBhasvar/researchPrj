import React, { Component } from 'react'
import { excelFormSubmit } from '../../actions/submitActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import ExcelFormPart1 from './ExcelFormPart1';

class ExcelForm extends Component {
    state = {
        DateOfEntry: this.props.user.DateOfEntry,
        FarmerName: this.props.user.FarmerName,
        MobileNo: this.props.user.MobileNo,
        Village: this.props.user.Village,
        CowTagNo: this.props.user.CowTagNo,
        Age: this.props.user.Age,
        DateOfBirth: this.props.user.DateOfBirth,
        SireID: this.props.user.SireID,
        DamID: this.props.user.DamID,
        SurveyPickYield: this.props.user.SurveyPickYield,
        MDPH: this.props.user.MDPH,
        LactationNo: this.props.user.LactationNo,
        DateOfAI: this.props.user.DateOfAI,
        BullNo: this.props.user.BullNo,
        NumberOfAIService: this.props.user.NumberOfAIService,
        DateOfPD: this.props.user.DateOfPD,
        PD: this.props.user.PD,
        ExpectedCalvingDate: this.props.user.ExpectedCalvingDate,
        DateOfCalving: this.props.user.DateOfCalving,
        EaseOfCalving: this.props.user.EaseOfCalving,
        TypeOfCalving: this.props.user.TypeOfCalving,
        CalfSex: this.props.user.CalfSex,
        CongDefect: this.props.user.CongDefect,
        CalfTagNo: this.props.user.CalfTagNo,
        Remarks: this.props.user.Remarks,

        MRActDated1: '',
        MRActDated2: '',
        MRActDated3: '',
        MRActDated4: '',
        MRActDated5: '',
        MRActDated6: '',
        MRActDated7: '',
        MRActDated8: '',
        MRActDated9: '',
        MRActDated10: '',
        MRActDated11: '',
        MRActDated12: '',
        MRActDated13: '',
        MRActDated14: '',
        MRActDated15: '',
        MRActDated16: '',
        MRActDated17: '',
        MRActDated18: '',
        MRActDated19: '',
        MRActDated20: '',


        IntervalDaysd1: '',
        IntervalDaysd2: '',
        IntervalDaysd3: '',
        IntervalDaysd4: '',
        IntervalDaysd5: '',
        IntervalDaysd6: '',
        IntervalDaysd7: '',
        IntervalDaysd8: '',
        IntervalDaysd9: '',
        IntervalDaysd10: '',
        IntervalDaysd11: '',
        IntervalDaysd12: '',
        IntervalDaysd13: '',
        IntervalDaysd14: '',
        IntervalDaysd15: '',
        IntervalDaysd16: '',
        IntervalDaysd17: '',
        IntervalDaysd18: '',
        IntervalDaysd19: '',
        IntervalDaysd20: '',


        MEm1: '',
        MEm2: '',
        MEm3: '',
        MEm4: '',
        MEm5: '',
        MEm6: '',
        MEm7: '',
        MEm8: '',
        MEm9: '',
        MEm10: '',
        MEm11: '',
        MEm12: '',
        MEm13: '',
        MEm14: '',
        MEm15: '',
        MEm16: '',
        MEm17: '',
        MEm18: '',
        MEm19: '',
        MEm20: '',
        MEe1: '',
        MEe2: '',
        MEe3: '',
        MEe4: '',
        MEe5: '',
        MEe6: '',
        MEe7: '',
        MEe8: '',
        MEe9: '',
        MEe10: '',
        MEe11: '',
        MEe12: '',
        MEe13: '',
        MEe14: '',
        MEe15: '',
        MEe16: '',
        MEe17: '',
        MEe18: '',
        MEe19: '',
        MEe20: '',

        TotalLactationMilkYield: '',
        DOD: '',
        MilkingDays: '',
        GL: '',
        DateOfBirthWeight: '',

        Month0HW: '',
        Month0BL: '',
        Month0HG: '',
        Month0Date: '',


        Month1HW: '',
        Month1BL: '',
        Month1HG: '',
        Month1Date: '',

        Month3HW: '',
        Month3BL: '',
        Month3HG: '',
        Month3Date: '',

        Month6HW: '',
        Month6BL: '',
        Month6HG: '',
        Month6Date: '',

        Month12HW: '',
        Month12BL: '',
        Month12HG: '',
        Month12Date: '',

        AFCHW: '',
        AFCBL: '',
        AFCHG: '',
        AFCDate: '',

        errors: {}
    };

    componentDidMount() {
        this.setState({
            DateOfEntry: this.props.user.DateOfEntry,
            FarmerName: this.props.user.FarmerName,
            MobileNo: this.props.user.MobileNo,
            Village: this.props.user.Village,
            CowTagNo: this.props.user.CowTagNo,
            Age: this.props.user.Age,
            DateOfBirth: this.props.user.DateOfBirth,
            SireID: this.props.user.SireID,
            DamID: this.props.user.DamID,
            SurveyPickYield: this.props.user.SurveyPickYield,
            MDPH: this.props.user.MDPH,
            LactationNo: this.props.user.LactationNo,
            DateOfAI: this.props.user.DateOfAI,
            BullNo: this.props.user.BullNo,
            NumberOfAIService: this.props.user.NumberOfAIService,
            DateOfPD: this.props.user.DateOfPD,
            PD: this.props.user.PD,
            ExpectedCalvingDate: this.props.user.ExpectedCalvingDate,
            DateOfCalving: this.props.user.DateOfCalving,
            EaseOfCalving: this.props.user.EaseOfCalving,
            TypeOfCalving: this.props.user.TypeOfCalving,
            CalfSex: this.props.user.CalfSex,
            CongDefect: this.props.user.CongDefect,
            CalfTagNo: this.props.user.CalfTagNo,
            Remarks: this.props.user.Remarks,
        })
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
            CowTagNo: this.state.CowTagNo,
            Age: this.state.Age,
            DateOfBirth: this.state.DateOfBirth,
            SireID: this.state.SireID,
            SireSireID: this.state.SireSireID,
            DamID: this.state.DamID,
            Gender: this.state.Gender,
            BloodLevel: this.state.BloodLevel,
            ReceiptNumber: this.state.ReceiptNumber,
            RegistrationCharges: this.state.RegistrationCharges,
        };
        //this.props.excelFormSubmit(userData, this.props.history);

    }

    render() {
        const { errors } = this.state;
        console.log("state on rerender", this.state);

        return (
            <div className="AnimalRegistration">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h3 className="display-6 text-center">Excel Update Form</h3>
                            <p className="lead text-center">1st Form</p>
                            <div className="card">
                                <form >
                                    {/* <ExcelFormPart1  {...this.state} onChange={e => this.onChange(e)} /> */}
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableAnimalRegistration}
                                        label="Date of Entry :"
                                        placeholder=""
                                        name="DateOfEntry"
                                        type="date"
                                        value={this.state.DateOfEntry}
                                        onChange={e => this.onChange(e)}
                                        error={errors.DateOfEntry}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder=""
                                        label="Farmer's Name (ખેડુતનુ નામ) : "
                                        name="FarmerName"
                                        type="text"
                                        value={this.state.FarmerName}
                                        onChange={e => this.onChange(e)}
                                        error={errors.FarmerName}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder=""
                                        label="Mobile No (મોબાઈલ નંબર) :"
                                        name="MobileNo"
                                        type="number"
                                        value={this.state.MobileNo}
                                        onChange={e => this.onChange(e)}
                                        error={errors.MobileNo}

                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder=""
                                        label="Village Name (ગામનુ નામ) :"
                                        name="Village"
                                        type="text"
                                        value={this.state.Village}
                                        onChange={e => this.onChange(e)}
                                        error={errors.Village}
                                    />
                                    {/* {JSON.stringify(errors).length !== 2 && (<div class="alert alert-danger" role="alert">
                                        {JSON.stringify(errors)}
                                    </div>)} */}
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Cow Tag No"
                                        label="Cow Tag Number (ગાયનો ટેગ નંબર) :"
                                        name="CowTagNo"
                                        type="text"
                                        value={this.state.CowTagNo}
                                        onChange={e => this.onChange(e)}
                                        error={errors.CowTagNo}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Age of Cow"
                                        label="Age (in Year) (ઉમર (વર્ષમા)) : "
                                        name="Age"
                                        type="number"
                                        value={this.state.Age}
                                        onChange={e => this.onChange(e)}
                                        error={errors.Age}
                                        step="0.01"
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Date Of Birth of Cow"
                                        label="Date of Birth (જન્મ તારીક) : "
                                        name="DateOfBirth"
                                        type="date"
                                        value={this.state.DateOfBirth}
                                        onChange={e => this.onChange(e)}
                                        error={errors.DateOfBirth}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Sire ID"
                                        label="Sire ID (ગાયના પિતાનુ આઈ. ડી.) :"
                                        name="SireID"
                                        type="text"
                                        value={this.state.SireID}
                                        onChange={e => this.onChange(e)}
                                        error={errors.SireID}
                                    />

                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Dam"
                                        label="Dam ID (ગાયના માતાનુ આઈ. ડી.) :"
                                        name="DamID"
                                        type="text"
                                        value={this.state.DamID}
                                        onChange={e => this.onChange(e)}
                                        error={errors.DamID}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableAnimalRegistration}
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
                                        //disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="MDPH"
                                        label="Milk/Day/Preg. Heif."
                                        name="MDPH"
                                        type="text"
                                        value={this.state.MDPH}
                                        onChange={e => this.onChange(e)}
                                        error={errors.MDPH}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableAnimalRegistration}
                                        placeholder="Lactation Number"
                                        label="Lactation Number:"
                                        name="LactationNo"
                                        type="text"
                                        value={this.state.LactationNo}
                                        onChange={e => this.onChange(e)}
                                        error={errors.LactationNo}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableAnimalInsemination}
                                        label="Date Of AI:"
                                        placeholder="Date Of AI"
                                        name="DateOfAI"
                                        type="date"
                                        value={this.state.DateOfAI}
                                        onChange={e => this.onChange(e)}
                                        error={errors.DateOfAI}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableAnimalInsemination}
                                        label="Bull No:"
                                        placeholder="Bull No"
                                        name="BullNo"
                                        type="text"
                                        value={this.state.BullNo}
                                        onChange={e => this.onChange(e)}
                                        error={errors.BullNo}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableAnimalInsemination}
                                        label="Number of AI/Service:"
                                        placeholder="Number of AI/Service"
                                        name="NumberOfAIService"
                                        type="text"
                                        value={this.state.NumberOfAIService}
                                        onChange={e => this.onChange(e)}
                                        error={errors.NumberOfAIService}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableAnimalInsemination}
                                        label="Date Of PD:"
                                        placeholder="Date Of PD"
                                        name="DateOfPD"
                                        type="date"
                                        value={this.state.DateOfPD}
                                        onChange={e => this.onChange(e)}
                                        error={errors.DateOfPD}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableAnimalInsemination}
                                        label="PD:"
                                        placeholder="PD"
                                        name="PD"
                                        type="text"
                                        value={this.state.PD}
                                        onChange={e => this.onChange(e)}
                                        error={errors.PD}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableAnimalInsemination}
                                        label="Expected Calving Date:"
                                        placeholder="Expected Calving Date"
                                        name="ExpectedCalvingDate"
                                        type="date"
                                        value={this.state.ExpectedCalvingDate}
                                        onChange={e => this.onChange(e)}
                                        error={errors.ExpectedCalvingDate}
                                    />

                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableCalvingRegister}
                                        label="Date Of Calving:"
                                        placeholder="Date Of Calving"
                                        name="DateOfCalving"
                                        type="date"
                                        value={this.state.DateOfCalving}
                                        onChange={e => this.onChange(e)}
                                        error={errors.DateOfCalving}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableCalvingRegister}
                                        label="Ease of Calving:"
                                        placeholder="Ease of Calving"
                                        name="EaseOfCalving"
                                        type="text"
                                        value={this.state.EaseOfCalving}
                                        onChange={e => this.onChange(e)}
                                        error={errors.EaseOfCalving}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableCalvingRegister}
                                        label="Type of Calving:"
                                        placeholder="Type of Calving"
                                        name="TypeOfCalving"
                                        type="text"
                                        value={this.state.TypeOfCalving}
                                        onChange={e => this.onChange(e)}
                                        error={errors.TypeOfCalving}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableCalvingRegister}
                                        label="Calf Sex:"
                                        placeholder="Calf Sex"
                                        name="CalfSex"
                                        type="date"
                                        value={this.state.CalfSex}
                                        onChange={e => this.onChange(e)}
                                        error={errors.CalfSex}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableCalvingRegister}
                                        label="PD:"
                                        placeholder="PD"
                                        name="CongDefect"
                                        type="text"
                                        value={this.state.CongDefect}
                                        onChange={e => this.onChange(e)}
                                        error={errors.CongDefect}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableCalvingRegister}
                                        label="Calf Tag No:"
                                        placeholder="Calf Tag No"
                                        name="CalfTagNo"
                                        type="text"
                                        value={this.state.CalfTagNo}
                                        onChange={e => this.onChange(e)}
                                        error={errors.CalfTagNo}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableCalvingRegister}
                                        label="Remarks:"
                                        placeholder="Remarks"
                                        name="Remarks"
                                        type="text"
                                        value={this.state.Remarks}
                                        onChange={e => this.onChange(e)}
                                        error={errors.Remarks}
                                    />
                                    {/* 
                                    *****************************************************************************************
                                    *****************************************************************************************
                                    MR Act Date
                                    *****************************************************************************************
                                    *****************************************************************************************
                                    */}
                                    <div>
                                        <p>M.R. Act. Date</p>
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 1:"
                                            placeholder="MR Act Date 1"
                                            name="MRActDated1"
                                            type="date"
                                            value={this.state.MRActDated1}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated1}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 2:"
                                            placeholder="MR Act Date 2"
                                            name="MRActDated2"
                                            type="date"
                                            value={this.state.MRActDated2}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated2}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 3:"
                                            placeholder="MR Act Date 3"
                                            name="MRActDated3"
                                            type="date"
                                            value={this.state.MRActDated3}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated3}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 4:"
                                            placeholder="MR Act Date 4"
                                            name="MRActDated4"
                                            type="date"
                                            value={this.state.MRActDated4}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated4}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 5:"
                                            placeholder="MR Act Date 5"
                                            name="MRActDated5"
                                            type="date"
                                            value={this.state.MRActDated5}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated5}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 6:"
                                            placeholder="MR Act Date 6"
                                            name="MRActDated6"
                                            type="date"
                                            value={this.state.MRActDated6}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated6}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 7:"
                                            placeholder="MR Act Date 7"
                                            name="MRActDated7"
                                            type="date"
                                            value={this.state.MRActDated7}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated7}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 8:"
                                            placeholder="MR Act Date 8"
                                            name="MRActDated8"
                                            type="date"
                                            value={this.state.MRActDated8}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated8}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 9:"
                                            placeholder="MR Act Date 9"
                                            name="MRActDated9"
                                            type="date"
                                            value={this.state.MRActDated9}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated9}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 10:"
                                            placeholder="MR Act Date 10"
                                            name="MRActDated10"
                                            type="date"
                                            value={this.state.MRActDated10}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated10}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 11:"
                                            placeholder="MR Act Date 11"
                                            name="MRActDated11"
                                            type="date"
                                            value={this.state.MRActDated11}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated11}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 12:"
                                            placeholder="MR Act Date 12"
                                            name="MRActDated12"
                                            type="date"
                                            value={this.state.MRActDated12}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated12}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 13:"
                                            placeholder="MR Act Date 13"
                                            name="MRActDated13"
                                            type="date"
                                            value={this.state.MRActDated13}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated13}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 14:"
                                            placeholder="MR Act Date 14"
                                            name="MRActDated14"
                                            type="date"
                                            value={this.state.MRActDated14}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated14}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 15:"
                                            placeholder="MR Act Date 15"
                                            name="MRActDated15"
                                            type="date"
                                            value={this.state.MRActDated15}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated15}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 16:"
                                            placeholder="MR Act Date 16"
                                            name="MRActDated16"
                                            type="date"
                                            value={this.state.MRActDated16}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated16}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 17:"
                                            placeholder="MR Act Date 17"
                                            name="MRActDated17"
                                            type="date"
                                            value={this.state.MRActDated17}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated17}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 18:"
                                            placeholder="MR Act Date 18"
                                            name="MRActDated18"
                                            type="date"
                                            value={this.state.MRActDated18}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated18}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 19:"
                                            placeholder="MR Act Date 19"
                                            name="MRActDated19"
                                            type="date"
                                            value={this.state.MRActDated19}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated19}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 20:"
                                            placeholder="MR Act Date 20"
                                            name="MRActDated20"
                                            type="date"
                                            value={this.state.MRActDated20}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated20}
                                        />
                                    </div>

                                    {/* 
                                    *****************************************************************************************
                                    *****************************************************************************************
                                    MR Act Date
                                    *****************************************************************************************
                                    *****************************************************************************************
                                    */}
                                    {/* <div>
                                        <p>M.R. Act. Date</p>
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 1:"
                                            placeholder="MR Act Date 1"
                                            name="MRActDated1"
                                            type="date"
                                            value={this.state.MRActDated1}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated1}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 2:"
                                            placeholder="MR Act Date 2"
                                            name="MRActDated2"
                                            type="date"
                                            value={this.state.MRActDated2}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated2}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 3:"
                                            placeholder="MR Act Date 3"
                                            name="MRActDated3"
                                            type="date"
                                            value={this.state.MRActDated3}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated3}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 4:"
                                            placeholder="MR Act Date 4"
                                            name="MRActDated4"
                                            type="date"
                                            value={this.state.MRActDated4}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated4}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 5:"
                                            placeholder="MR Act Date 5"
                                            name="MRActDated5"
                                            type="date"
                                            value={this.state.MRActDated5}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated5}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 6:"
                                            placeholder="MR Act Date 6"
                                            name="MRActDated6"
                                            type="date"
                                            value={this.state.MRActDated6}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated6}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 7:"
                                            placeholder="MR Act Date 7"
                                            name="MRActDated7"
                                            type="date"
                                            value={this.state.MRActDated7}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated7}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 8:"
                                            placeholder="MR Act Date 8"
                                            name="MRActDated8"
                                            type="date"
                                            value={this.state.MRActDated8}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated8}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 9:"
                                            placeholder="MR Act Date 9"
                                            name="MRActDated9"
                                            type="date"
                                            value={this.state.MRActDated9}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated9}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 10:"
                                            placeholder="MR Act Date 10"
                                            name="MRActDated10"
                                            type="date"
                                            value={this.state.MRActDated10}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated10}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 11:"
                                            placeholder="MR Act Date 11"
                                            name="MRActDated11"
                                            type="date"
                                            value={this.state.MRActDated11}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated11}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 12:"
                                            placeholder="MR Act Date 12"
                                            name="MRActDated12"
                                            type="date"
                                            value={this.state.MRActDated12}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated12}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 13:"
                                            placeholder="MR Act Date 13"
                                            name="MRActDated13"
                                            type="date"
                                            value={this.state.MRActDated13}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated13}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 14:"
                                            placeholder="MR Act Date 14"
                                            name="MRActDated14"
                                            type="date"
                                            value={this.state.MRActDated14}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated14}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 15:"
                                            placeholder="MR Act Date 15"
                                            name="MRActDated15"
                                            type="date"
                                            value={this.state.MRActDated15}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated15}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 16:"
                                            placeholder="MR Act Date 16"
                                            name="MRActDated16"
                                            type="date"
                                            value={this.state.MRActDated16}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated16}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 17:"
                                            placeholder="MR Act Date 17"
                                            name="MRActDated17"
                                            type="date"
                                            value={this.state.MRActDated17}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated17}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 18:"
                                            placeholder="MR Act Date 18"
                                            name="MRActDated18"
                                            type="date"
                                            value={this.state.MRActDated18}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated18}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 19:"
                                            placeholder="MR Act Date 19"
                                            name="MRActDated19"
                                            type="date"
                                            value={this.state.MRActDated19}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated19}
                                        />
                                        <TextFieldGroup
                                            //disabled={this.props.submit.disableCalvingRegister}
                                            label="MR Act Date 20:"
                                            placeholder="MR Act Date 20"
                                            name="MRActDated20"
                                            type="date"
                                            value={this.state.MRActDated20}
                                            onChange={e => this.onChange(e)}
                                            error={errors.MRActDated20}
                                        /> 
                                    </div>
                                    */}






                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableMilkRecordingRegister}
                                        label="Total Lactation Milk Yield:"
                                        placeholder="Total Lactation Milk Yield"
                                        name="TotalLactationMilkYield"
                                        type="text"
                                        value={this.state.TotalLactationMilkYield}
                                        onChange={e => this.onChange(e)}
                                        error={errors.TotalLactationMilkYield}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableMilkRecordingRegister}
                                        label="DOD:"
                                        placeholder="DOD"
                                        name="DOD"
                                        type="text"
                                        value={this.state.DOD}
                                        onChange={e => this.onChange(e)}
                                        error={errors.DOD}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableMilkRecordingRegister}
                                        label="Milking Days:"
                                        placeholder="Milking Days"
                                        name="MilkingDays"
                                        type="text"
                                        value={this.state.MilkingDays}
                                        onChange={e => this.onChange(e)}
                                        error={errors.MilkingDays}
                                    />
                                    <TextFieldGroup
                                        //disabled={this.props.submit.disableMilkRecordingRegister}
                                        label="GL:"
                                        placeholder="GL"
                                        name="GL"
                                        type="text"
                                        value={this.state.GL}
                                        onChange={e => this.onChange(e)}
                                        error={errors.GL}
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
                                    <input type="submit" className="btn btn-info btn-block mt-4"
                                        //disabled={this.props.submit.disableAnimalRegistration} 
                                        onClick={e => this.onSubmit(e)} />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ExcelForm.propTypes = {
    currentPosition: PropTypes.func.isRequired,
    excelFormSubmit: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    submit: state.submit
});

export default connect(mapStateToProps, {})(ExcelForm);