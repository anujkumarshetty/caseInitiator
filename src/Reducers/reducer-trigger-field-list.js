import { STORE_DOCUMENT_CLASS_TRIGGER_LIST } from '../Actions/action-definitions';

export default function (state = null, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {

        case STORE_DOCUMENT_CLASS_TRIGGER_LIST:
            return action.payload;

        default: return state;

    }

}   