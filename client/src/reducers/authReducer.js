import {FETCH_USER, ADD_DIARY_ENTRY, UPDATE_USER} from "../actions/actionsTypes";

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_USER:
            console.log(action.payload)
            return action.payload ? {...state, ...action.payload} : false;
        case UPDATE_USER: 
            return {...state, ...action.user};
        default:
            return state
    };
};