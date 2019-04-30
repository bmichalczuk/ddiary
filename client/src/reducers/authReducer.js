import {FETCH_USER, ADD_ENTRY} from "../actions/actionsTypes";

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload ? {...state, ...action.payload} : false;
        case ADD_ENTRY:
            return state;
        default:
            return state
    };
};