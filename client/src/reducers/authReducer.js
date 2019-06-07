import {FETCH_USER, ADD_DIARY_ENTRY} from "../actions/actionsTypes";

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload ? {...state, ...action.payload} : false;
        case ADD_DIARY_ENTRY:
            return state;
        default:
            return state
    };
};