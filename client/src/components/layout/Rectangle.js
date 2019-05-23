import React, { Component } from 'react';
import './Rectangle.css';

import classnames from 'classnames';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import 'material-design-icons/iconfont/material-icons.css';
class Rectangle extends Component {

    render() {
        const style = {
            stroke: '#979797',
            strokeWidth: 2,
        }
        console.log(this.props.location.pathname)
        return (

            <div className="retangle-component">
                <button
                    className={classnames('circle',
                        { 'circle-active': this.props.location.pathname === '/start' },
                        // { 'circle-done': this.props.submit.disableAnimalRegistration },
                    )}
                    onClick={(e) => { e.preventDefault(); this.props.history.push('/start') }}

                >
                </button>
                <svg height="210" width="500" className="svg">
                    <line x1="0" y1="15" x2="200" y2="15" style={style} />
                    Sorry, your browser does not support inline SVG.
                </svg>

                <button
                    className={classnames('rectangle',
                        { 'rectangle-active': this.props.location.pathname === '/animalRegistration' },
                        { 'rectangle-done': this.props.submit.disableAnimalRegistration },
                    )}
                    onClick={(e) => { e.preventDefault(); this.props.history.push('/animalRegistration') }}

                >
                </button>
                <svg height="210" width="500" className="svg">
                    <line x1="0" y1="15" x2="200" y2="15" style={style} />
                    Sorry, your browser does not support inline SVG.
                </svg>
                <button
                    className={classnames('rectangle',
                        { 'rectangle-active': this.props.location.pathname === '/animalInsemination' },
                        { 'rectangle-done': this.props.submit.disableAnimalInsemination },
                    )}
                    onClick={(e) => { e.preventDefault(); this.props.history.push('/animalInsemination') }}

                ></button>
                <svg height="210" width="500" className="svg">
                    <line x1="0" y1="15" x2="200" y2="15" style={style} />
                    Sorry, your browser does not support inline SVG.
                </svg>
                <button
                    className={classnames('rectangle',
                        { 'rectangle-active': this.props.location.pathname === '/calvingRegister' },
                        { 'rectangle-done': this.props.submit.disableCalvingRegister },
                    )}
                    onClick={(e) => { e.preventDefault(); this.props.history.push('/calvingRegister') }}

                ></button>
                <svg height="210" width="500" className="svg">
                    <line x1="0" y1="15" x2="200" y2="15" style={style} />
                    Sorry, your browser does not support inline SVG.
                </svg>
                <button
                    className={classnames('rectangle',
                        { 'rectangle-active': this.props.location.pathname === '/milkRecordingRegister' },
                        { 'rectangle-done': this.props.submit.disableMilkRecordingRegister },
                    )}
                    onClick={(e) => { e.preventDefault(); this.props.history.push('/milkRecordingRegister') }}

                ></button>
                <svg height="210" width="500" className="svg">
                    <line x1="0" y1="15" x2="200" y2="15" style={style} />
                    Sorry, your browser does not support inline SVG.
                </svg>
                <button
                    className={classnames('rectangle',
                        { 'rectangle-active': this.props.location.pathname === '/calfRegister' },
                        { 'rectangle-done': this.props.submit.disableCalfRegister },
                    )}
                    onClick={(e) => { e.preventDefault(); this.props.history.push('/calfRegister') }}

                ></button>
                <svg height="210" width="500" className="svg">
                    <line x1="0" y1="15" x2="200" y2="15" style={style} />
                    Sorry, your browser does not support inline SVG.
                </svg>
                <button
                    className={classnames('circle',
                        { 'circle-active': this.props.location.pathname === '/end' },
                        // { 'circle-done': this.props.submit.disableAnimalRegistration },
                    )}
                    onClick={(e) => { e.preventDefault(); this.props.history.push('/end') }}

                >
                </button>


                {/* <svg width="400" height="110" className="rectangle">
                    <rect width="300" height="100" />
                </svg> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    submit: state.submit,
    errors: state.errors,
});

export default connect(mapStateToProps, {})(withRouter(Rectangle));