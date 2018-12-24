import { STORE_CONTAINER_COLLECTION_NAME } from '../Actions/action-definitions';
import initialConfig from '../config/initialConfig';

export default function (state = initialConfig, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case STORE_CONTAINER_COLLECTION_NAME:
            return {
                ...state,
                containerCollection: action.payload
            }
        default: return state;

    }

}   