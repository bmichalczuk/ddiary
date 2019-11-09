import {SET_FLASH_MSG, CLEAR_FLASH_MSG} from "../actions/actionsTypes";

export default (state = {text: "", type:""}, action) => {
    switch (action.type) {
        case SET_FLASH_MSG:
            const {text, type} = action.msg;
            return {...state, text, type};
        case CLEAR_FLASH_MSG:
            return { text: "", type: ""};
        default:
            return state
    };
}