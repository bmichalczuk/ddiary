import {SET_FLASH_MSG, CLEAR_FLASH_MSG} from "../actions/actionsTypes";

export default (state = {text: "", type:""}, action) => {
    switch (action.type) {
        case SET_FLASH_MSG:
            return {...state, text: action.msg.text, type: action.msg.type};
        case CLEAR_FLASH_MSG:
            return {...state, text: "", type: ""};
        default:
            return state
    };
}