import React, { Component } from 'react'
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getAnimalRegistration, getExcelData } from '../../actions/submitActions';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../common/Spinner'
import UpdateModal from '../modals/UpdateModal';

class DashboardExcel extends Component {

    state = {
        displayModal: false,
        selectedUserForUpdate: null,
        userList: [],
        skip: 0,
        limit: 10,
        errors: {}
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        var data = {
            skip: this.state.skip,
            limit: this.state.limit,
        }
        this.props.getExcelData(data)

        // for (var i = 0; i < 60; i++) {
        //     this.setState(prevState => {
        //         console.log("Bottom")
        //         console.log(this.state.skip)
        //         var data = {
        //             skip: prevState.skip,
        //             limit: this.state.limit,
        //         }
        //         this.props.getExcelData(data)

        //         return {
        //             ...prevState,
        //             skip: prevState.skip + this.state.limit,
        //         }
        //     })
        // }
    }

    // handleScroll = (e) => {
    //     const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    //     if (bottom) {
    //         console.log("bottom reached")
    //     }
    //     console.log("onScroll")
    // }

    handleScroll = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight && !this.props.dashboard.stop) {
            this.setState(prevState => {
                console.log("Bottom")
                console.log(this.state.skip)
                var data = {
                    skip: prevState.skip + this.state.limit,
                    limit: this.state.limit,
                }
                this.props.getExcelData(data)

                return {
                    ...prevState,
                    skip: prevState.skip + this.state.limit,
                }
            })

        } else {
            console.log("Not Bottom")
        }
    }

    updateRecord = (e, user) => {
        e.preventDefault();

        if (this.state.displayModal === false) {
            this.setState({ displayModal: true, selectedUserForUpdate: user })
        }
        if (this.state.displayModal === true) {
            this.setState({ displayModal: false, selectedUserForUpdate: null })
        }
        console.log(user);

    }


    render() {



        const dashboard = this.props.dashboard
        var displayData = null
        console.log(dashboard)
        if (dashboard.excelData !== []) {
            const data = this.props.dashboard.excelData
            displayData = (
                <tbody>
                    {
                        data.map((user, index) =>
                            <tr key={user._id} user={user}>

                                <td> <button onClick={(e) => this.updateRecord(e, user)}>Update</button> </td>

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
            <div className="animated fadeIn" onScroll={this.handleScroll}>
                {
                    this.state.displayModal ?
                        <UpdateModal
                            data={displayData}
                            modal={this.state.displayModal}
                            updateRecord={(e) => this.updateRecord(e, null)}
                            selectedUserForUpdate={this.state.selectedUserForUpdate}
                        /> :
                        null
                }
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
                                            <th scope="col">Update</th>
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
                                {this.props.dashboard.stop ? (<span>---No More Data to Load---</span>) : <Spinner />}
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
