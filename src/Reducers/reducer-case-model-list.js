import { STORE_CASE_MODEL_LIST } from '../Actions/action-definitions';

export default function (state = null, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {

        case STORE_CASE_MODEL_LIST:
            return action.payload;

        default: return state;

    }

}   