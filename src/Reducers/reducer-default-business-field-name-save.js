import { STORE_SELECTED_CONTAINER_FIELD_3, STORE_DEFAULT_VALUE_INPUT } from '../Actions/action-definitions';

export default function (state = { containerField3: "", defaultValue: "", }, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {

        case STORE_SELECTED_CONTAINER_FIELD_3:
            return {
                ...state,
                containerField3: action.payload
            }
        case STORE_DEFAULT_VALUE_INPUT:
            return {
                ...state,
                defaultValue: action.payload
            }
        default: return state;

    }

}   