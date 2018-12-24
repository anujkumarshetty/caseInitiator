import { STORE_TRIGGER_FIELD } from '../Actions/action-definitions';
import initialConfig from '../config/initialConfig';

export default function (state = initialConfig, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case STORE_TRIGGER_FIELD:
            return {
                ...state,
                triggerFieldName: action.payload
            }
        default: return state;

    }

}   