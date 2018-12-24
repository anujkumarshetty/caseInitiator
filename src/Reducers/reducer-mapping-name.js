import { STORE_MAPPING_NAME } from '../Actions/action-definitions';
import initialConfig from '../config/initialConfig'

export default function (state = initialConfig, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case STORE_MAPPING_NAME:

            return {
                ...state,
                mappingName: action.payload
            }
        default: return state;

    }

}   