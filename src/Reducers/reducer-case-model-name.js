import { STORE_CASE_MODEL_NAME } from '../Actions/action-definitions';
import initialConfig from '../config/initialConfig';

export default function (state = initialConfig, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case STORE_CASE_MODEL_NAME:
            return {
                ...state,
                caseModel: action.payload
            }
        default: return state;

    }

}   