import { STORE_DOC_ATTB_AND_WORK_FIELD_OBJ, DEL_DOC_ATTB_AND_WORK_FIELD_OBJ, EDIT_DOC_ATTB_AND_WORK_FIELD_OBJ } from '../Actions/action-definitions';
import initialConfig from '../config/initialConfig';
import dash from 'lodash';

export default function (state = initialConfig, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case STORE_DOC_ATTB_AND_WORK_FIELD_OBJ:

            return {
                ...state,
                containerFieldMappings: [...state.containerFieldMappings, action.payload]
            }

        case EDIT_DOC_ATTB_AND_WORK_FIELD_OBJ:

            return {
                ...state,
                containerFieldMappings: action.payload
            }

        case DEL_DOC_ATTB_AND_WORK_FIELD_OBJ:

            let newState = dash.cloneDeep(state);
            newState.containerFieldMappings.splice(action.payload, 1);
            console.log(newState);
            return newState;

        default: return state;

    }

}   