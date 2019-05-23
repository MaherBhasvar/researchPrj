import { LOCK_AR, AR, LOCK_AI, AI, LOCK_CFR, CFR, LOCK_CLR, CLR, LOCK_MRR, MRR, CLEAR_GLOBAL_SUBMIT, DELETE_AI, DELETE_AR, DELETE_CFR, DELETE_CLR, DELETE_MRR, } from '../actions/types';

const initialState = {
    animalRegistrationData: null,
    disableAnimalRegistration: false,

    animalInseminationData: null,
    disableAnimalInsemination: false,

    calfRegisterData: null,
    disableCalfRegister: false,

    calvingRegisterData: null,
    disableCalvingRegister: false,

    milkRecordingRegisterData: null,
    disableMilkRecordingRegister: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case AR:
            return {
                ...state,
                animalRegistrationData: action.payload,
            }
        case LOCK_AR:
            return {
                ...state,
                disableAnimalRegistration: true,
            }
        case AI:
            return {
                ...state,
                animalInseminationData: action.payload,
            }
        case LOCK_AI:
            return {
                ...state,
                disableAnimalInsemination: true,
            }
        case CFR:
            return {
                ...state,
                calfRegisterData: action.payload,
            }
        case LOCK_CFR:
            return {
                ...state,
                disableCalfRegister: true,
            }
        case CLR:
            return {
                ...state,
                calvingRegisterData: action.payload,
            }
        case LOCK_CLR:
            return {
                ...state,
                disableCalvingRegister: true,
            }
        case MRR:
            return {
                ...state,
                milkRecordingRegisterData: action.payload,
            }
        case LOCK_MRR:
            return {
                ...state,
                disableMilkRecordingRegister: true,
            }
        case CLEAR_GLOBAL_SUBMIT:
            return {
                ...initialState,
            }
        case DELETE_AI:
            return {
                ...state,
                animalInseminationData: null,
                disableAnimalInsemination: false,
            }
        case DELETE_AR:
            return {
                ...state,
                animalRegistrationData: null,
                disableAnimalRegistration: false,
            }
        case DELETE_CFR:
            return {
                ...state,
                calfRegisterData: null,
                disableCalfRegister: false,
            }
        case DELETE_CLR:
            return {
                ...state,
                calvingRegisterData: null,
                disableCalvingRegister: false,
            }
        case DELETE_MRR:
            return {
                ...state,
                milkRecordingRegisterData: null,
                disableMilkRecordingRegister: false,
            }
        default:
            return state;
    }
}