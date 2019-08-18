import React, { Component } from 'react'
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getAnimalRegistration, getExcelData } from '../../actions/submitActions';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class DashboardExcel extends Component {

    state = {
        userList: [],
        errors: {}
    }

    componentDidMount() {
        this.props.getExcelData()
    }

    render() {

        const data = this.props.dashboard.excelData
        var displayData = null

        if (data) {
            displayData = (
                <tbody>
                    {
                        data.map((user, index) =>
                            <tr key={user._id} user={user}>

                                <td >{user.SrNo}</td>
                                <td >{user.DateOfEntry}</td>
                                <td >{user.Centre}</td>

                                <td >{user.FarmerName}</td>

                                <td >{user.MoNo}</td>

                                <td >{user.Village}</td>

                                <td >{user.CowTagNo}</td>

                                <td >{user.Age}</td>

                                <td >{user.DateOfBirth}</td>

                                <td >{user.Sire}</td>

                                <td >{user.Dam}</td>

                                <td >{user.SurveyPickYield}</td>

                                <td >{user.MDPH}</td>
                                <td >{user.LactationNo}</td>
                                <td >{user.DateOfAI}</td>

                                <td >{user.BullNo}</td>

                                <td >{user.NumberOfAI}</td>

                                <td >{user.DateOfPD}</td>

                                <td >{user.PD}</td>

                                <td >{user.ExpCalvDate}</td>

                                <td >{user.DateOfCalving}</td>

                                <td >{user.EaseOfCalving}</td>

                                <td >{user.TypeOfCalving}</td>

                                <td >{user.CalfSex}</td>
                                <td>{user.CongDefect}</td>
                                <td>{user.CalfTagNo}</td>
                                <td>{user.Remarks}</td>
                                <td>{user.MRActDate}</td>

                            </tr>
                        )
                    }
                </tbody>
            )
        }
        console.log("renderer", this.props.dashboard)
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col >
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
                            </CardHeader>
                            <CardBody>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr No</th>
                                            <th scope="col">Date Of Entry</th>
                                            <th scope="col">Centre</th>
                                            <th scope="col">Farmer's Name</th>
                                            <th scope="col">Mobile No</th>
                                            <th scope="col">Village</th>
                                            <th scope="col">Cow Tag No/Change</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Date Of Birth</th>
                                            <th scope="col">SireID</th>

                                            <th scope="col">DamID</th>
                                            <th scope="col">Survey Pick Yield (in Lit./Day)</th>
                                            <th scope="col">M/D/P/H</th>
                                            <th scope="col">Lactation No</th>
                                            <th scope="col">Date of AI</th>
                                            <th scope="col">Bull No</th>
                                            <th scope="col">Number of AI</th>

                                            <th scope="col">Date of PD</th>
                                            <th scope="col">PD</th>
                                            <th scope="col">Expected Calving Date</th>
                                            <th scope="col">Date of Calving</th>
                                            <th scope="col">Ease of Calving</th>
                                            <th scope="col">Type of Calving</th>
                                            <th scope="col">Calf Sex</th>
                                            <th scope="col">cong Defect</th>

                                            <th scope="col">Calf Tag No</th>
                                            <th scope="col">Remarks</th>
                                            <th scope="col">Mr Act Date</th>


                                        </tr>
                                    </thead>

                                    {displayData}

                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>
        );
    }


}

DashboardExcel.propTypes = {
    getAnimalRegistration: PropTypes.func.isRequired,
    getExcelData: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    submit: state.submit,
    dashboard: state.dashboard,
});

export default connect(mapStateToProps, { getAnimalRegistration, getExcelData, })(
    DashboardExcel
);
