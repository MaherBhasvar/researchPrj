import { DASHBOARD_EXCEL } from '../actions/types';

const initialState = {
    excelData: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case DASHBOARD_EXCEL:
            return {
                ...state,
                excelData: action.payload
            }
        default:
            return state;
    }
}