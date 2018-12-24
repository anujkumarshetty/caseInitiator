import { STORE_SEARCH_QUERY } from '../Actions/action-definitions';
import initialConfig from '../config/initialConfig';

export default function (state = initialConfig, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case STORE_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            }
        default: return state;

    }

}   