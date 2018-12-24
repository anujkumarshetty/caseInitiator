import { SET_INDEX } from '../Actions/action-definitions';

export default function (state = { index: -1 }, action) {
    // console.log(action);
    // console.log(state);
    switch (action.type) {
        case SET_INDEX:
            return {
                index: action.payload
            }
        default: return state;

    }

}