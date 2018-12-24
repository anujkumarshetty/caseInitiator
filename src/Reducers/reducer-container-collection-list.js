import { STORE_CONTAINER_COLLECTION_LIST } from '../Actions/action-definitions';

export default function (state = null, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {

        case STORE_CONTAINER_COLLECTION_LIST:
            return action.payload;

        default: return state;

    }

}   