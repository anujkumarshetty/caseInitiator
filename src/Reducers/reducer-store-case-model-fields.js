import { STORE_CASE_MODEL_FIELDS } from '../Actions/action-definitions';

export default function (state = [], action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case STORE_CASE_MODEL_FIELDS:
            return action.payload;
        default: return state;

    }

}   