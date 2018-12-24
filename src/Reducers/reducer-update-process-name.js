import * as ActDef from '../Actions/action-definitions';
import initialConfig from '../config/initialConfig';

export default function (state = initialConfig, action) {
    // console.log(state);
    // console.log(action);

    switch (action.type) {

        case ActDef.UPDATE_PROCESS_LIST1:
            return {
                ...state,
                processTemplateName1: action.payload
            };
        case ActDef.UPDATE_PROCESS_LIST2:
            return {
                ...state,
                processTemplateName2: action.payload
            };


        default: return state;
    }

}