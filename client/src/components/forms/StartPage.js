import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearGlobalSubmit, currentPosition } from '../../actions/submitActions';

class StartPage extends Component {

    componentDidMount() {
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

    newButton = (e) => {
        e.preventDefault();
        this.props.clearGlobalSubmit(this.props.history);
    }
    render() {
        return (
            <div className="CalfRegister">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Start</h1>
                            <p className="lead text-center"></p>
                            <div className="card">
                                <button onClick={(e) => this.newButton(e)} className="btn btn-info btn-block mt-4">New</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    submit: state.submit,
});

export default connect(mapStateToProps, { clearGlobalSubmit, currentPosition })(withRouter(StartPage));