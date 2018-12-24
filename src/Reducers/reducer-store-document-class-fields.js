import { STORE_DOCUMENT_CLASS_FIELDS } from '../Actions/action-definitions';

export default function (state = [], action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case STORE_DOCUMENT_CLASS_FIELDS:
            return action.payload;
        default: return state;

    }

}   