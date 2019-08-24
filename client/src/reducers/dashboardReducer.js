import { DASHBOARD_EXCEL, STOP_DASHBOARD_EXCEL } from '../actions/types';
import { stat } from 'fs';

const initialState = {
    excelData: [],
    stop: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case DASHBOARD_EXCEL:
            // const newExcelData = [
            //     ...state.excelData,
            //     ...action.payload,
            // ]
            console.log("reducer", state.excelData)
            return {
                ...state,
                excelData: state.excelData.concat(action.payload)
            }
        case STOP_DASHBOARD_EXCEL:
            return {
                ...state,
                stop: true
            }
        default:
            return state;
    }
}