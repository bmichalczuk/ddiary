import {FETCH_USER} from "../actions/actionsTypes";
export default (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_USER:
            return {...state, ...action.payload};
        default:
            return state
    }
}