import React, { Component } from 'react';
import './Rectangle.css';

import classnames from 'classnames';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import 'material-design-icons/iconfont/material-icons.css';
import { Nav, NavItem, NavLink, Breadcrumb, BreadcrumbItem } from 'reactstrap';
class Rectangle extends Component {

    render() {
        const style = {
            stroke: '#979797',
            strokeWidth: 2,
        }
        console.log(this.props.location.pathname)
        return (

            <div>
                <div className="rectangle-component">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-4 text-center">
                                <Link to='/dashboard'>Animal Registration Dashboard</Link>
                            </div>|
                            <div className="col-4 text-center">
                                <Link to='/dashboardExcel'>Excel Data Dashboard</Link>
                            </div>
                        </div>
                    </div>
                </div>







                <div className="Navigation">
                    <div className="rectangle-component">
                        <button
                            className={classnames('circle',
                                { 'circle-active': this.props.location.pathname === '/start' },
                                // { 'circle-done': this.props.submit.disableAnimalRegistration },
                            )}
                            onClick={(e) => { e.preventDefault(); this.props.history.push('/start') }}

                        >Start
                    </button>
                        <svg height="210" width="500" className="svg">
                            <line x1="0" y1="8" x2="200" y2="8" style={style} />
                            Sorry, your browser does not support inline SVG.
                    </svg>

                        <button
                            className={classnames('rectangle',
                                { 'rectangle-active': this.props.location.pathname === '/animalRegistration' },
                                { 'rectangle-done': this.props.submit.disableAnimalRegistration },
                            )}
                            onClick={(e) => { e.preventDefault(); this.props.history.push('/animalRegistration') }}

                        >1
                    </button>
                        <svg height="210" width="500" className="svg">
                            <line x1="0" y1="8" x2="200" y2="8" style={style} />
                            Sorry, your browser does not support inline SVG.
                    </svg>
                        <button
                            className={classnames('rectangle',
                                { 'rectangle-active': this.props.location.pathname === '/animalInsemination' },
                                { 'rectangle-done': this.props.submit.disableAnimalInsemination },
                            )}
                            onClick={(e) => { e.preventDefault(); this.props.history.push('/animalInsemination') }}

                        >2</button>
                        <svg height="210" width="500" className="svg">
                            <line x1="0" y1="8" x2="200" y2="8" style={style} />
                            Sorry, your browser does not support inline SVG.
                    </svg>
                        <button
                            className={classnames('rectangle',
                                { 'rectangle-active': this.props.location.pathname === '/calvingRegister' },
                                { 'rectangle-done': this.props.submit.disableCalvingRegister },
                            )}
                            onClick={(e) => { e.preventDefault(); this.props.history.push('/calvingRegister') }}

                        >3</button>
                        <svg height="210" width="500" className="svg">
                            <line x1="0" y1="8" x2="200" y2="8" style={style} />
                            Sorry, your browser does not support inline SVG.
                    </svg>
                        <button
                            className={classnames('rectangle',
                                { 'rectangle-active': this.props.location.pathname === '/milkRecordingRegister' },
                                { 'rectangle-done': this.props.submit.disableMilkRecordingRegister },
                            )}
                            onClick={(e) => { e.preventDefault(); this.props.history.push('/milkRecordingRegister') }}

                        >4</button>
                        <svg height="210" width="500" className="svg">
                            <line x1="0" y1="8" x2="200" y2="8" style={style} />
                            Sorry, your browser does not support inline SVG.
                    </svg>
                        <button
                            className={classnames('rectangle',
                                { 'rectangle-active': this.props.location.pathname === '/calfRegister' },
                                { 'rectangle-done': this.props.submit.disableCalfRegister },
                            )}
                            onClick={(e) => { e.preventDefault(); this.props.history.push('/calfRegister') }}

                        >5</button>
                        <svg height="210" width="500" className="svg">
                            <line x1="0" y1="8" x2="200" y2="8" style={style} />
                            Sorry, your browser does not support inline SVG.
                    </svg>
                        <button
                            className={classnames('circle',
                                { 'circle-active': this.props.location.pathname === '/end' },
                                // { 'circle-done': this.props.submit.disableAnimalRegistration },
                            )}
                            onClick={(e) => { e.preventDefault(); this.props.history.push('/end') }}

                        >Stop
                    </button>

                    </div>

                    {/* <svg width="400" height="110" className="rectangle">
                    <rect width="300" height="100" />
                </svg> */}
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    submit: state.submit,
    errors: state.errors,
});

export default connect(mapStateToProps, {})(withRouter(Rectangle));