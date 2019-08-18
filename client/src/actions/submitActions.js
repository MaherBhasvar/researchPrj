import axios from 'axios';
import {
    GET_ERRORS, LOCK_AR, AR, DELETE_AR,
    LOCK_AI, AI, DELETE_AI,
    LOCK_CFR, CFR, DELETE_CFR,
    LOCK_CLR, CLR, DELETE_CLR,
    LOCK_MRR, MRR, DELETE_MRR,
    CLEAR_GLOBAL_SUBMIT,
    DASHBOARD_EXCEL,
} from './types';

// ***************************************************************************************
// ***************************************************************************************

// ***************************************************************************************
// ***************************************************************************************

export const animalRegistration = (data, history) => dispatch => {
    axios.post('/api/animalRegistration', data)
        .then(res => {
            //Lock AR
            dispatch({
                type: LOCK_AR,
            });
            dispatch({
                type: AR,
                payload: res.data,
            });
            //
            history.push('/animalInsemination');
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

export const animalInsemination = (data, history) => dispatch => {
    axios.post('/api/animalInsemination', data)
        .then(res => {
            //Lock AR
            dispatch({
                type: LOCK_AI,
            });
            dispatch({
                type: AI,
                payload: res.data,
            });
            //
            history.push('/calvingRegister');
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

export const calfRegister = (data, history) => dispatch => {
    axios.post('/api/calfRegister', data)
        .then(res => {
            //Lock AR
            dispatch({
                type: LOCK_CFR,
            });
            dispatch({
                type: CFR,
                payload: res.data,
            });
            //
            history.push('/end')
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

export const calvingRegister = (data, history) => dispatch => {
    axios.post('/api/calvingRegister', data)
        .then(res => {
            //Lock AR
            dispatch({
                type: LOCK_CLR,
            });
            dispatch({
                type: CLR,
                payload: res.data,
            });
            //
            history.push('/milkRecordingRegister')
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

export const milkRecordingRegister = (data, history) => dispatch => {
    axios.post('/api/milkRecordingRegister', data)
        .then(res => {
            //Lock AR
            dispatch({
                type: LOCK_MRR,
            });
            dispatch({
                type: MRR,
                payload: res.data,
            });
            //
            history.push('/calfRegister')
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

export const currentPosition = (data) => dispatch => {
    axios.post('/api/current', data)
        .then(res => console.log(res))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

export const clearGlobalSubmit = (history) => (dispatch) => {
    dispatch({
        type: CLEAR_GLOBAL_SUBMIT,
    })
    history.push('/animalRegistration');

}


// ***************************************************************************************
// ***************************************************************************************

// ***************************************************************************************
// ***************************************************************************************


export const getAnimalRegistration = () => dispatch => {
    axios.get('/api/animalRegistration/dashboard')
        .then(res => {
            dispatch({
                type: AR,
                payload: res.data,
            })
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const getExcelData = () => dispatch => {
    axios.get('/api/dashboardExcel/show')
        .then(res => {
            console.log("dispatched", res.data)
            dispatch({
                type: DASHBOARD_EXCEL,
                payload: res.data,
            })
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}


// ***************************************************************************************
// ***************************************************************************************

// ***************************************************************************************
// ***************************************************************************************


export const deleteAnimalRegistration = (id) => dispatch => {
    axios.delete(`/api/animalRegistration/${id}`).then(res =>
        dispatch({
            type: DELETE_AR,
        })).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }));
}

export const deleteAnimalInsemination = (id) => dispatch => {
    axios.delete(`/api/animalInsemination/${id}`).then(res =>
        dispatch({
            type: DELETE_AI,
        })).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }));
}

export const deleteCalfRegister = (id) => dispatch => {
    axios.delete(`/api/calfRegister/${id}`).then(res =>
        dispatch({
            type: DELETE_CFR,
        })).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }));
}

export const deleteCalvingRegister = (id) => dispatch => {
    axios.delete(`/api/calvingRegister/${id}`).then(res =>
        dispatch({
            type: DELETE_CLR,
        })).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }));
}

export const deleteMilkRecordingRegister = (id) => dispatch => {
    axios.delete(`/api/milkRecordingRegister/${id}`).then(res =>
        dispatch({
            type: DELETE_MRR,
        })).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }));
}
export const deleteAllSubmit = (ids) => dispatch => {
    dispatch(deleteAnimalInsemination(ids.idAR));
    dispatch(deleteAnimalRegistration(ids.idAI));
    dispatch(deleteCalfRegister(ids.idCFR));
    dispatch(deleteCalvingRegister(ids.idCLR));
    dispatch(deleteMilkRecordingRegister(ids.idMRR));
    dispatch(clearGlobalSubmit());
}