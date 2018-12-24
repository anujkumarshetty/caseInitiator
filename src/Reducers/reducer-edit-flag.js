import { SET_FLAG, RESET_FLAG } from '../Actions/action-definitions';

export default function (state = { Flag: 0 }, action) {
    // console.log(action);
    // console.log(state);
    switch (action.type) {
        case SET_FLAG:
            return {
                Flag: 1
            }
        case RESET_FLAG:
            return {
                Flag: 0
            }
        default: return state;

    }

}