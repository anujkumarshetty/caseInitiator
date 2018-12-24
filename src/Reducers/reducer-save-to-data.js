import { SAVE_TO_DATA, DELETE_FROM_DATA, SAVE_EDITED_DATA } from '../Actions/action-definitions';
import initialConfig from '../config/initialConfig';
import dash from 'lodash';


export default function (state = initialConfig, action) {
    // console.log(action);
    // console.log(state);
    switch (action.type) {
        case SAVE_TO_DATA:
            // console.log(state)
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case DELETE_FROM_DATA:
            // console.log(state)
            const newState = dash.cloneDeep(state.data);
            // console.log(newState);
            newState.splice(action.payload, 1)
            console.log(newState);

            return {
                ...state,
                data: newState
            }
        case SAVE_EDITED_DATA:
            // console.log(state)
            const editedState = dash.cloneDeep(state.data);
            // console.log(editedState);
            // console.log(action.payload.index);
            // console.log(action.payload.data);
            editedState.splice(action.payload.index, 1, action.payload.data)
            // console.log(editedState);
            return {
                ...state,
                data: editedState
            }

        default: return state;

    }

}