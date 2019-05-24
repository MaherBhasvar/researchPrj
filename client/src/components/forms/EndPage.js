import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearGlobalSubmit, deleteAllSubmit, currentPosition } from '../../actions/submitActions';

class EndPage extends Component {

    state = {
        disable: false,
    }

    newButton = (e) => {
        e.preventDefault();
        this.props.clearGlobalSubmit(this.props.history);
    }

    componentWillMount() {
        this.setState({
            disable: !this.props.submit.disableAnimalRegistration ||
                !this.props.submit.disableAnimalInsemination ||
                !this.props.submit.disableCalfRegister ||
                !this.props.submit.disableCalvingRegister ||
                !this.props.submit.disableMilkRecordingRegister
        })
    }

    deleteAllButton = (e) => {
        e.preventDefault();
        const deleteIDObject = {
            idAR: this.props.submit.animalRegistrationData._id,
            idAI: this.props.submit.animalInseminationData._id,
            idCFR: this.props.submit.calfRegisterData._id,
            idCLR: this.props.submit.calvingRegisterData._id,
            idMRR: this.props.submit.milkRecordingRegisterData._id,
        }
        this.props.deleteAllSubmit(deleteIDObject, this.props.history);
    }

    render() {
        return (
            <div className="CalfRegister">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">End</h1>
                            <p className="lead text-center">
                                {
                                    this.props.submit.disableAnimalRegistration &&
                                        this.props.submit.disableAnimalInsemination &&
                                        this.props.submit.disableCalfRegister &&
                                        this.props.submit.disableCalvingRegister &&
                                        this.props.submit.disableMilkRecordingRegister ?
                                        (<span>Success</span>) :
                                        (<span>Please submit all Forms</span>)
                                }
                            </p>
                            <div className="card">
                                <button onClick={(e) => this.newButton(e)} disabled={this.state.disable} className="btn btn-info btn-block mt-4">New</button>
                                <button onClick={(e) => this.deleteAllButton(e)} disabled={this.state.disable} >Delete All </button>
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

export default connect(mapStateToProps, { clearGlobalSubmit, deleteAllSubmit, currentPosition })(withRouter(EndPage));