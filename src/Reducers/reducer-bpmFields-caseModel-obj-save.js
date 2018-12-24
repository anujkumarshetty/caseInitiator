import {
    STORE_BPM_TO_CASEMODEL_OBJ,
    DEL_BPM_TO_CASEMODEL_OBJ,
    EDIT_BPM_TO_CASEMODEL_OBJ
} from '../Actions/action-definitions';
import initialConfig from '../config/initialConfig';
import dash from 'lodash';

export default function (state = initialConfig, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case STORE_BPM_TO_CASEMODEL_OBJ:

            return {
                ...state,
                caseModelFieldMappings: [...state.caseModelFieldMappings, action.payload]
            }

        case EDIT_BPM_TO_CASEMODEL_OBJ:

            return {
                ...state,
                caseModelFieldMappings: action.payload
            }

        case DEL_BPM_TO_CASEMODEL_OBJ:

            let newState = dash.cloneDeep(state);
            newState.caseModelFieldMappings.splice(action.payload, 1);
            console.log(newState);
            return newState;

        default: return state;

    }

}   