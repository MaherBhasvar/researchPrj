import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup'

const ExcelFormPart1 = (props) => {
    return (
        <div>
            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalRegistration}
                label="Date of Entry :"
                placeholder=""
                name="DateOfEntry"
                type="date"
                value={props.Centre}
                onChange={e => props.onChange(e)}
                error={props.errors.Centre}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalRegistration}
                placeholder=""
                label="Farmer's Name (ખેડુતનુ નામ) : "
                name="FarmerName"
                type="text"
                value={props.FarmerName}
                onChange={e => props.onChange(e)}
                error={props.errors.FarmerName}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalRegistration}
                placeholder=""
                label="Mobile No (મોબાઈલ નંબર) :"
                name="MobileNo"
                type="number"
                value={props.MobileNo}
                onChange={e => props.onChange(e)}
                error={props.errors.MobileNo}

            />
            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalRegistration}
                placeholder=""
                label="Village Name (ગામનુ નામ) :"
                name="Village"
                type="text"
                value={props.Village}
                onChange={e => props.onChange(e)}
                error={props.errors.Village}
            />
            {/* {JSON.stringify(props.errors).length !== 2 && (<div class="alert alert-danger" role="alert">
                {JSON.stringify(props.errors)}
            </div>)} */}
            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalRegistration}
                placeholder="Cow Tag No"
                label="Cow Tag Number (ગાયનો ટેગ નંબર) :"
                name="CowTagNo"
                type="text"
                value={props.CowTagNo}
                onChange={e => props.onChange(e)}
                error={props.errors.CowTagNo}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalRegistration}
                placeholder="Age of Cow"
                label="Age (in Year) (ઉમર (વર્ષમા)) : "
                name="Age"
                type="number"
                value={props.Age}
                onChange={e => props.onChange(e)}
                error={props.errors.Age}
                step="0.01"
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalRegistration}
                placeholder="Date Of Birth of Cow"
                label="Date of Birth (જન્મ તારીક) : "
                name="DateOfBirth"
                type="date"
                value={props.DateOfBirth}
                onChange={e => props.onChange(e)}
                error={props.errors.DateOfBirth}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalRegistration}
                placeholder="Sire ID"
                label="Sire ID (ગાયના પિતાનુ આઈ. ડી.) :"
                name="SireID"
                type="text"
                value={props.SireID}
                onChange={e => props.onChange(e)}
                error={props.errors.SireID}
            />

            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalRegistration}
                placeholder="Dam"
                label="Dam ID (ગાયના માતાનુ આઈ. ડી.) :"
                name="DamID"
                type="text"
                value={props.DamID}
                onChange={e => props.onChange(e)}
                error={props.errors.DamID}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalRegistration}
                placeholder="SurveyPickYield"
                label="Survey Pick Yield (in Lit./day):"
                name="SurveyPickYield"
                type="number"
                value={props.SurveyPickYield}
                onChange={e => props.onChange(e)}
                error={props.errors.SurveyPickYield}
                step="0.01"
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalRegistration}
                placeholder="MDPH"
                label="Milk/Day/Preg. Heif."
                name="MDPH"
                type="text"
                value={props.MDPH}
                onChange={e => props.onChange(e)}
                error={props.errors.MDPH}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalRegistration}
                placeholder="Lactation Number"
                label="Lactation Number:"
                name="LactationNo"
                type="text"
                value={props.LactationNo}
                onChange={e => props.onChange(e)}
                error={props.errors.LactationNo}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalInsemination}
                label="Date Of AI:"
                placeholder="Date Of AI"
                name="DateOfAI"
                type="date"
                value={props.DateOfAI}
                onChange={e => props.onChange(e)}
                error={props.errors.DateOfAI}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalInsemination}
                label="Bull No:"
                placeholder="Bull No"
                name="BullNo"
                type="text"
                value={props.BullNo}
                onChange={e => props.onChange(e)}
                error={props.errors.BullNo}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalInsemination}
                label="Number of AI/Service:"
                placeholder="Number of AI/Service"
                name="NumberOfAIService"
                type="text"
                value={props.NumberOfAIService}
                onChange={e => props.onChange(e)}
                error={props.errors.NumberOfAIService}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalInsemination}
                label="Date Of PD:"
                placeholder="Date Of PD"
                name="DateOfPD"
                type="date"
                value={props.DateOfPD}
                onChange={e => props.onChange(e)}
                error={props.errors.DateOfPD}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalInsemination}
                label="PD:"
                placeholder="PD"
                name="PD"
                type="text"
                value={props.PD}
                onChange={e => props.onChange(e)}
                error={props.errors.PD}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableAnimalInsemination}
                label="Expected Calving Date:"
                placeholder="Expected Calving Date"
                name="ExpectedCalvingDate"
                type="date"
                value={props.ExpectedCalvingDate}
                onChange={e => props.onChange(e)}
                error={props.errors.ExpectedCalvingDate}
            />

            <TextFieldGroup
                //disabled={props.props.submit.disableCalvingRegister}
                label="Date Of Calving:"
                placeholder="Date Of Calving"
                name="DateOfCalving"
                type="date"
                value={props.DateOfCalving}
                onChange={e => props.onChange(e)}
                error={props.errors.DateOfCalving}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableCalvingRegister}
                label="Ease of Calving:"
                placeholder="Ease of Calving"
                name="EaseOfCalving"
                type="text"
                value={props.EaseOfCalving}
                onChange={e => props.onChange(e)}
                error={props.errors.EaseOfCalving}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableCalvingRegister}
                label="Type of Calving:"
                placeholder="Type of Calving"
                name="TypeOfCalving"
                type="text"
                value={props.TypeOfCalving}
                onChange={e => props.onChange(e)}
                error={props.errors.TypeOfCalving}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableCalvingRegister}
                label="Calf Sex:"
                placeholder="Calf Sex"
                name="CalfSex"
                type="date"
                value={props.CalfSex}
                onChange={e => props.onChange(e)}
                error={props.errors.CalfSex}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableCalvingRegister}
                label="PD:"
                placeholder="PD"
                name="CongDefect"
                type="text"
                value={props.CongDefect}
                onChange={e => props.onChange(e)}
                error={props.errors.CongDefect}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableCalvingRegister}
                label="Calf Tag No:"
                placeholder="Calf Tag No"
                name="CalfTagNo"
                type="text"
                value={props.CalfTagNo}
                onChange={e => props.onChange(e)}
                error={props.errors.CalfTagNo}
            />
            <TextFieldGroup
                //disabled={props.props.submit.disableCalvingRegister}
                label="Remarks:"
                placeholder="Remarks"
                name="Remarks"
                type="text"
                value={props.Remarks}
                onChange={e => props.onChange(e)}
                error={props.errors.Remarks}
            />
        </div>
    )
}

export default ExcelFormPart1;