import {FETCH_USER} from "../actions/actionsTypes";

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload ? {...state, ...action.payload} : false;
        default:
            return state
    };
};