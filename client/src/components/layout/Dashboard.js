import React, {Component} from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import {getAnimalRegistration} from '../../actions/submitActions';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux'

// import usersData from './UsersData'

// function UserRow(props) {
//   const user = props.user
//   const userLink = `/users/${user.id}`

//   const getBadge = (status) => {
//     return status === 'Active' ? 'success' :
//       status === 'Inactive' ? 'secondary' :
//         status === 'Pending' ? 'warning' :
//           status === 'Banned' ? 'danger' :
//             'primary'
//   }

//   return (
//     <tr key={user.id.toString()}>
//       <th scope="row"><Link to={userLink}>{user.id}</Link></th>
//       <td><Link to={userLink}>{user.name}</Link></td>
//       <td>{user.registered}</td>
//       <td>{user.role}</td>
//       <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
//     </tr>
//   )
// }

class Dashboard extends Component {

    state = {
        userList: [],
        errors: {}
    }

    componentDidMount () {
        this.props.getAnimalRegistration();
        // this.setState({
        //     userList: this.props.submit.animalRegistrationData
        // })
    }

    // componentWillReceiveProps (nextProps) {
    //     this.props.getAnimalRegistration();
    // }

  render() {
    // const userList = usersData.filter((user) => user.id < 10)
    const userList = this.props.submit.animalRegistrationData;

    console.log(typeof this.props.submit.animalRegistrationData);

    let displayData;
    if (userList !== null) {
        displayData = (
            <tbody>
                {
                    userList.map((user, index) =>
                    <tr key={user._id} user={user}>
                    <td>{index}</td>
                      <td >{user.DateOfEntry}</td>
                    <td >{user.Centre}</td>
                    <td >{user.FarmerName}</td>
                    <td >{user.MobileNo}</td>
                    <td >{user.Village}</td>
                    <td >{user.CowTagNo}</td>
                    <td >{user.Age}</td>
                    <td >{user.DateOfBirth}</td>
                    <td >{user.Sire}</td>
                    <td >{user.Dam}</td>
                    <td >{user.SurveyPickYield}</td>
                    <td >{user.MDPH}</td>
                    <td >{user.LactationNo}</td>                     
                    </tr>
                  )
                }
            </tbody>
        );
       }
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
                      <th scope="col">Cow Tag No</th>
                      <th scope="col">Age</th>
                      <th scope="col">Date Of Birth</th>
                      <th scope="col">Sire</th>
                      <th scope="col">Dam</th>
                      <th scope="col">Survey Pick Yield (in Lit./Day)</th>
                      <th scope="col">M/D/P/H</th>
                      <th scope="col">Lactation No</th>
                    </tr>
                  </thead>

                    {displayData}

                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

Dashboard.propTypes = {
    getAnimalRegistration: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    submit: state.submit
  });
  
  export default connect(mapStateToProps, { getAnimalRegistration, })(
    Dashboard
  );