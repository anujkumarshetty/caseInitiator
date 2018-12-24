import { STORE_DOCUMENT_CLASS } from '../Actions/action-definitions';
import initialConfig from '../config/initialConfig';

export default function (state = initialConfig, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case STORE_DOCUMENT_CLASS:
        return {
            ...state,
            srcDocumentClass : action.payload
        }
        default: return state;

    }

}   