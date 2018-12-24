import { STORE_PRIORITY_VALUE } from '../Actions/action-definitions';
import initialConfig from '../config/initialConfig'

export default function (state = initialConfig, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case STORE_PRIORITY_VALUE:

            return {
                ...state,
                priority: action.payload
            }
        default: return state;

    }

}   