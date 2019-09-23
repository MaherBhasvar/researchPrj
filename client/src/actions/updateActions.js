import axios from 'axios';
import { UPDATE_RECORD, UPDATE_RECORDS, GET_ERRORS } from './types'

export const updateAllRecords = (date) => (dispatch) => {
    axios.post('/api/dashboardExcel/updateAll', date)
        .then(res => {
            dispatch({
                type: UPDATE_RECORDS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}