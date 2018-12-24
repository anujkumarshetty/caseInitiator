import { STORE_SELECTED_CONTAINER_FIELD_2, STORE_SELECTED_CASE_MODEL } from '../Actions/action-definitions';

export default function (state = { caseModel: "", containerField2: "" }, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {

        case STORE_SELECTED_CONTAINER_FIELD_2:
            return {
                ...state,
                containerField2: action.payload
            }
        case STORE_SELECTED_CASE_MODEL:
            return {
                ...state,
                caseModel: action.payload
            }
        default: return state;

    }

}   