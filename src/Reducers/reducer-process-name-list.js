import * as ActDef from '../Actions/action-definitions';


export default function (state = null, action) {
    // console.log(action.payload);
    switch (action.type) {

        case ActDef.STORE_PROCESS_LIST:
            return action.payload;

        default: return state;
    }

}