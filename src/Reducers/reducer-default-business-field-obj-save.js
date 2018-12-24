import {
    STORE_DEFAULT_VALUE_FOR_BUSINESS_FIELD_OBJ,
    DEL_DEFAULT_VALUE_FOR_BUSINESS_FIELD_OBJ,
    EDIT_DEFAULT_VALUE_FOR_BUSINESS_FIELD_OBJ
} from '../Actions/action-definitions';
import initialConfig from '../config/initialConfig';
import dash from 'lodash';

export default function (state = initialConfig, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case STORE_DEFAULT_VALUE_FOR_BUSINESS_FIELD_OBJ:

            return {
                ...state,
                containerDefaultValues: [...state.containerDefaultValues, action.payload]
            }

        case EDIT_DEFAULT_VALUE_FOR_BUSINESS_FIELD_OBJ:

            return {
                ...state,
                containerDefaultValues: action.payload
            }

        case DEL_DEFAULT_VALUE_FOR_BUSINESS_FIELD_OBJ:

            let newState = dash.cloneDeep(state);
            newState.containerDefaultValues.splice(action.payload, 1);
            console.log(newState);
            return newState;

        default: return state;

    }

}   