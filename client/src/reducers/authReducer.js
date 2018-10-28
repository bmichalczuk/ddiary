import {FETCH_USER} from "../actions/actionsTypes";
export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER:
            return state;
        default:
            return state
    }
}