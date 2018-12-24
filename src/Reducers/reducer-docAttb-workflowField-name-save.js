import { STORE_SELECTED_DOC_ATTRIBUTE, STORE_SELECTED_CONTAINER_FIELD_1 } from '../Actions/action-definitions';

export default function (state = { documentAttribute: "", containerField1: "" }, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case STORE_SELECTED_DOC_ATTRIBUTE:
            return {
                ...state,
                documentAttribute: action.payload
            }
        case STORE_SELECTED_CONTAINER_FIELD_1:
            return {
                ...state,
                containerField1: action.payload
            }
        default: return state;

    }

}   